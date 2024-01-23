from django.db.models import Prefetch
from django.shortcuts import render
from rest_framework.generics import ListAPIView



from .models import *
from .serializers import *
from student_performance.models import Subject, Group, Lecturer




class GroupQuestListView(ListAPIView):
    queryset = Quest.objects.all().prefetch_related(
        Prefetch('subject', queryset=Subject.objects.all()),
        Prefetch('group', queryset=Group.objects.all()),
        Prefetch('lecturer', queryset=Lecturer.objects.all())
    )
    serializer_class = GroupQuestSerializer

    def get_queryset(self):
        self.queryset = self.queryset.filter(group__slug=self.kwargs['group_slug'])
        return self.queryset