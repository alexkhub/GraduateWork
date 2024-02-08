from django.db.models import Prefetch
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .service import *
from .models import *
from .serializers import *
from student_performance.models import Subject, Lecturer, Group
from rest_framework.status import HTTP_200_OK


class TimetableListView(ListAPIView):
    queryset = TimetableOfClasses.objects.all().order_by('group', 'lesson_number').prefetch_related(

        Prefetch('lecturer', queryset=Lecturer.objects.all())
    ).select_related('subject', 'group')
    serializer_class = TimetableSerializer


class ExamListView(ListAPIView):
    queryset = Exam.objects.all().prefetch_related(
        Prefetch('lecturer', queryset=Lecturer.objects.all())
    ).select_related('subject', 'group')
    serializer_class = ExamSerializer

    def get_queryset(self):
        self.queryset = self.queryset.filter(group__slug=self.kwargs['group_slug'])
        return self.queryset


class TimetableChangesListView(ListAPIView):
    queryset = TimetableChanges.objects.filter(date__gte=get_date()).prefetch_related(
        Prefetch('lecturer', queryset=Lecturer.objects.all())
    ).select_related('subject', 'group').order_by('date', 'group', 'lesson_number')
    serializer_class = TimetableChangesSerializer


class LectorTimeTableListView(ListAPIView):
    queryset = TimetableOfClasses.objects.all().order_by('group', 'lesson_number').prefetch_related(

        Prefetch('lecturer', queryset=Lecturer.objects.all())
    ).select_related('subject', 'group')
    serializer_class = TimetableSerializer

    def get_queryset(self):
        return self.queryset.filter(lecturer__user__slug='users')
