from django.db.models import Prefetch, Q
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, ListCreateAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from rest_framework.response import Response
from .models import *
from .serializers import *
from student_performance.models import Subject, Group, Lecturer
from .permissions import *
from .utils import *


class GroupQuestListCreateView(ListCreateAPIView):
    queryset = Quest.objects.all().prefetch_related(
        Prefetch('subject', queryset=Subject.objects.all()),
        Prefetch('group', queryset=Group.objects.all()),
        Prefetch('lecturer', queryset=Lecturer.objects.all().prefetch_related('user'))
    )
    serializer_class = GroupQuestSerializer
    # permission_classes = (DetailStudentQuestPermission, IsAuthenticated)
    authentication_classes = (JWTAuthentication,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = QuestFilter

    def get_queryset(self):
        self.queryset = self.queryset.filter(group__slug=self.kwargs['group_slug'])
        return self.queryset

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class DetailStudentQuestRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = UserQuest.objects.all()
    serializer_class = StudentQuestSerializer
    lookup_field = 'id'
    # permission_classes = (DetailStudentQuestPermission, IsAuthenticated)
    authentication_classes = (JWTAuthentication,)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class CreateStudentQuestCreateView(CreateAPIView):
    queryset = UserQuest.objects.all()
    serializer_class = StudentQuestSerializer

    # permission_classes = (IsAuthenticated,)
    # authentication_classes = (JWTAuthentication,)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
