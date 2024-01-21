from django.db.models import Prefetch
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .models import *
from .serializers import *
from student_performance.models import Subject, Lecturer, Group


class TimetableListView(ListAPIView):
    queryset = TimetableOfClasses.objects.all().order_by('-group', 'lesson_number').prefetch_related(
        Prefetch('subject', queryset=Subject.objects.all()),
        Prefetch('group', queryset=Group.objects.all()),
        Prefetch('lecturer', queryset=Lecturer.objects.all())
    )
    serializer_class = TimetableSerializer
    permission_classes = (AllowAny,)
