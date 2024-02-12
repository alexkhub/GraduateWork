import jwt
from django.contrib.sites.shortcuts import get_current_site

from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveDestroyAPIView
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


class StudentPerformanceListView(ListAPIView):
    queryset = Student_Scores.objects.all().prefetch_related(

        Prefetch('lecturer', queryset=Lecturer.objects.all())
    ).order_by('-date').select_related('student', 'subject')
    serializer_class = Student_ScoresSerializer
    authentication_classes = (JWTAuthentication,)
    # permission_classes = [IsAuthenticated]
    filter_backends = (DjangoFilterBackend,)
    filterset_class = MeasurableTypesControlFilter

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        measurable_types_control_serializer = self.serializer_class(queryset, many=True)

        return Response(
            {
                'measurable_types_control': measurable_types_control_serializer.data,
            },
            status=status.HTTP_200_OK
        )


class StudentProfile(RetrieveDestroyAPIView):
    queryset = Users.objects.all().select_related('group').only('group', 'username', 'first_name', 'last_name', 'email',
                                                                'term', 'phone')
    serializer_class = StudentProfileSerializer
    lookup_field = 'slug'

    def retrieve(self, request, *args, **kwargs):
        profile_serializer = self.serializer_class(self.get_object())

        return Response({
            'profile': profile_serializer.data
        })

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        user = request.user
        current_site = get_current_site(request).domain
        relativeLink = reverse('email-verify')
        token = RefreshToken.for_user(user).access_token
        absurl = 'http://' + current_site + relativeLink + "?token=" + str(token)
        email_body = 'Hi ' + user.username + 'user the link below to verify your email \n' + absurl

        verify_send(email_body=email_body, user_email=user.email)
        return Response(status=status.HTTP_200_OK)


class VerifyEmail(APIView):
    def get(self, request):
        token = request.GET.get('token')
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = Users.objects.get(id=payload['user_id'])
            user.is_verified = True
            # user.is_authenticated = True
            user.is_active = True
            # if not user.is_verified:
            user.delete()
            return Response({'email': 'successfuly activated'}, status=status.HTTP_204_NO_CONTENT)
        # except jwt.ExpiredSignatureError as identifier:
        except jwt.ExpiredSignatureError:
            return Response({'error': 'Activation Expired expired'}, status=status.HTTP_400_BAD_REQUEST)
        # except jwt.exceptions.DecodeError as identifier:
        except jwt.exceptions.DecodeError:
            return Response({'error': 'invalid token'}, status=status.HTTP_400_BAD_REQUEST)
