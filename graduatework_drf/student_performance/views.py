from django.contrib.sites.shortcuts import get_current_site
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page

from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.reverse import reverse
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings
from .models import *
from .serializers import *
from django.db.models import Q, Prefetch
from .utils import *
from .tasks import *
from jwt import decode, ExpiredSignatureError
from jwt.exceptions import DecodeError

from .permissions import *
from student_work.models import Quest, UserQuest
from student_work.serializers import ProfileStudentUserQuestSerializer, ProfileStudentQuestSerializer
from timetable.serializers import Study_Plan_SubjectsSerializer
from timetable.models import Study_Plan


class StudentPerformanceListView(ListAPIView):
    queryset = Student_Scores.objects.all().prefetch_related(

        Prefetch('lecturer', queryset=Lecturer.objects.all().select_related('user').only('user__username'))
    ).order_by('-date').select_related('student', 'subject').only('student__username', 'subject__subject_name', 'cause',
                                                                  'points', 'date', 'lecturer')
    serializer_class = Student_ScoresSerializer
    authentication_classes = (JWTAuthentication,)
    permission_classes = [IsAuthenticated]
    filter_backends = (DjangoFilterBackend,)
    filterset_class = MeasurableTypesControlFilter

    def get_queryset(self):
        return self.queryset.filter(student__slug=self.kwargs['slug'])

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        measurable_types_control_serializer = self.serializer_class(queryset, many=True)
        user = Users.objects.get(slug=self.kwargs['slug'])
        subjects = Study_Plan.objects.filter(
            Q(plan_name=user.group.study_plan_name) & Q(term=user.term)).select_related('subject')
        subjects_serializer = Study_Plan_SubjectsSerializer(subjects, many=True)
        return Response(
            {
                'measurable_types_control': measurable_types_control_serializer.data,
                'subjects': subjects_serializer.data
            },
            status=status.HTTP_200_OK
        )


class StudentProfileRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all().select_related('group').only('group__name', 'username', 'first_name', 'last_name',
                                                                'email', 'term', 'phone')
    serializer_class = StudentProfileSerializer
    lookup_field = 'slug'
    http_method_names = ['get', 'post', 'patch', 'delete', 'head', 'options', 'trace']
    authentication_classes = (JWTAuthentication,)
    permission_classes = [IsAuthenticated, DeleteUserPermissions]
    @method_decorator(cache_page(60 * 60 * 2, key_prefix='profile'), )
    def retrieve(self, request, *args, **kwargs):
        obj = self.get_object()
        profile_serializer = self.serializer_class(obj)
        user_quests = UserQuest.objects.filter(user=obj).select_related('quest', 'user', 'quest__subject', 'quest__lecturer__user').only(
            'status', 'date_added',
            'quest__quest_name',
            'user__username', 'quest__subject__subject_name', 'quest__lecturer__user__username').order_by(
            '-date_added')[:10]
        user_quests_serializer = ProfileStudentUserQuestSerializer(user_quests, many=True)
        quests = Quest.objects.filter(group=obj.group).prefetch_related(
            Prefetch('lecturer', queryset=Lecturer.objects.all().select_related('user').only('user__username'))
        ).select_related('subject', 'group').only('quest_name', 'date_added', 'slug', 'group__name',
                                                  'subject__subject_name', 'lecturer').order_by('-date_added')[:10]
        quests_serializer = ProfileStudentQuestSerializer(quests, many=True)

        return Response({
            'profile': profile_serializer.data,
            'user_quests': user_quests_serializer.data,
            'quests': quests_serializer.data,
        }, status=status.HTTP_200_OK)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        user = request.user
        current_site = get_current_site(request).domain
        relative_link = reverse('delete-user')
        token = RefreshToken.for_user(user).access_token
        url = 'http://' + current_site + relative_link + "?token=" + str(token)
        email_body = f'Добрый день, ' + user.username + ' перейдите по ссылке для удаления аккаунта  \n' + url
        send_destroy_email.delay(email_body=email_body, user_email=user.email)
        return Response(status=status.HTTP_204_NO_CONTENT)


class DeleteEmailView(APIView):
    def get(self, request):
        token = request.GET.get('token')
        try:
            payload = decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = Users.objects.get(id=payload['user_id'])
            user.delete()
            return Response({'email': 'successfuly activated'}, status=status.HTTP_204_NO_CONTENT)
        # except jwt.ExpiredSignatureError as identifier:
        except ExpiredSignatureError:
            return Response({'error': 'Activation Expired expired'}, status=status.HTTP_400_BAD_REQUEST)
        # except jwt.exceptions.DecodeError as identifier:
        except DecodeError:
            return Response({'error': 'invalid token'}, status=status.HTTP_400_BAD_REQUEST)


class MyGroupView(ListAPIView):
    queryset = Users.objects.all()
    serializer_class = UsernameSerializer
    authentication_classes = (JWTAuthentication,)
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        self.queryset = self.queryset.filter(group__slug=self.kwargs['slug'])
        return self.queryset
