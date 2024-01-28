from django.db.models import Prefetch, Q
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, ListCreateAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import *
from .serializers import *
from student_performance.models import Subject, Group, Lecturer
from .permissions import *
from .utils import *


class GroupQuestListCreateView(ListCreateAPIView):
    queryset = Quest.objects.all().prefetch_related(
        Prefetch('subject', queryset=Subject.objects.all()),
        Prefetch('group', queryset=Group.objects.all()),
        Prefetch('lecturer', queryset=Lecturer.objects.all())
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
        return None


class DetailStudentQuestRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = UserQuest.objects.all()
    serializer_class = DetailStudentQuestSerializer
    lookup_field = 'id'
    permission_classes = (DetailStudentQuestPermission, IsAuthenticated)
    authentication_classes = (JWTAuthentication,)


class CreateStudentQuestCreateView(CreateAPIView):
    queryset = UserQuest.objects.all()
    serializer_class = DetailStudentQuestSerializer
