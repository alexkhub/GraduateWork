from django.db.models import Prefetch, Q
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication

from .service import *
from .models import *
from .serializers import *
from student_performance.models import Subject, Lecturer, Group, Users
from .tasks import *


class TimetableListView(ListAPIView):
    queryset = TimetableOfClasses.objects.all().order_by('day_of_the_week', 'lesson_number').prefetch_related(

        Prefetch('lecturer', queryset=Lecturer.objects.all().select_related('user').only('user__username'))
    ).select_related('subject', 'group', 'classroom')
    serializer_class = TimetableSerializer
    authentication_classes = (JWTAuthentication,)
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        self.queryset = self.queryset.filter(group__slug=self.kwargs['group_slug'])
        return self.queryset

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        serializer = self.get_serializer(queryset, many=True)
        return Response({
            'timetable': serializer.data
        }, status=status.HTTP_200_OK)


class ExamListView(ListAPIView):
    queryset = Exam.objects.all().prefetch_related(
        Prefetch('lecturer', queryset=Lecturer.objects.all().select_related('user').only('user__username'))
    ).select_related('subject', 'group')
    serializer_class = ExamSerializer
    authentication_classes = (JWTAuthentication,)
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        self.queryset = self.queryset.filter(group__slug=self.kwargs['group_slug'])
        return self.queryset

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        serializer = self.get_serializer(queryset, many=True)
        return Response({
            'exams': serializer.data
        }, status=status.HTTP_200_OK)


class TimetableChangesListView(ListAPIView):
    queryset = TimetableChanges.objects.filter(date__gte=get_date()).prefetch_related(
        Prefetch('lecturer', queryset=Lecturer.objects.all())
    ).select_related('subject', 'group').order_by('date', 'group', 'lesson_number')
    serializer_class = TimetableChangesSerializer
    authentication_classes = (JWTAuthentication,)
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        self.queryset = self.queryset.filter(group__slug=self.kwargs['group_slug'])
        return self.queryset

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        serializer = self.get_serializer(queryset, many=True)
        return Response({
            'timetable_changes': serializer.data
        }, status=status.HTTP_200_OK)


class LectorTimeTableListView(ListAPIView):
    queryset = TimetableOfClasses.objects.all().order_by('group', 'lesson_number').prefetch_related(

        Prefetch('lecturer', queryset=Lecturer.objects.all().select_related('user').only('user__username'))
    ).select_related('subject', 'group')
    serializer_class = TimetableSerializer
    authentication_classes = (JWTAuthentication,)
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(lecturer__user__slug=self.request.user.slug)

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        serializer = self.get_serializer(queryset, many=True)
        return Response({
            'lector_timetable': serializer.data
        }, status=status.HTTP_200_OK)


class JournalRetrieveView(RetrieveAPIView):
    queryset = Journal.objects.all().select_related('subject', 'group', ).prefetch_related(
        Prefetch('lessons', queryset=Lesson.objects.all().select_related('quest').prefetch_related(
            Prefetch('student_passes', queryset=Users.objects.all().only('username'))).only(
            'quest__quest_name', 'lesson_topic', 'lesson_number', 'date', 'type_of_lesson')),
        Prefetch('lecturer', queryset=Lecturer.objects.all().select_related('user').only('user__username'))
    ).only(
        'subject__subject_name', 'group__name', 'lecturer', 'lessons', 'date', 'number_of_lesson', 'slug')
    serializer_class = JournalSerializer
    lookup_field = 'id'
    authentication_classes = (JWTAuthentication,)
    permission_classes = [IsAuthenticated]

    @method_decorator(cache_page(60 * 60 * 2, key_prefix='journal'), )
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response({
            'journal': serializer.data
        }, status=status.HTTP_200_OK)


class LessonDetailRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Lesson.objects.all().select_related('quest', 'group').prefetch_related(
        Prefetch('student_passes', queryset=Users.objects.all().only('username'))).only(
        'group__name', 'quest__quest_name', 'type_of_lesson', 'lesson_topic', 'lesson_number', 'date')
    serializer_class = LessonDetailSerializer
    lookup_field = 'id'
    authentication_classes = (JWTAuthentication,)
    permission_classes = [IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response({
            'lesson_detail': serializer.data
        }, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', True)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        email_body = f"Была удалена следующая пара {instance.lesson_topic}  {instance.group}  {instance.subject}"
        send_destroy_lesson.delay(email_body=email_body)
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
