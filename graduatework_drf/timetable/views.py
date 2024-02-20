from django.db.models import Prefetch, Q
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework.generics import ListAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .service import *
from .models import *
from .serializers import *
from student_performance.models import Subject, Lecturer, Group, Users


class TimetableListView(ListAPIView):
    queryset = TimetableOfClasses.objects.all().order_by('group', 'lesson_number').prefetch_related(

        Prefetch('lecturer', queryset=Lecturer.objects.all().select_related('user').only('user__username'))
    ).select_related('subject', 'group', 'classroom')
    serializer_class = TimetableSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        self.queryset = self.queryset.filter(group__slug=self.kwargs['group_slug'])
        return self.queryset


class ExamListView(ListAPIView):
    queryset = Exam.objects.all().prefetch_related(
        Prefetch('lecturer', queryset=Lecturer.objects.all().select_related('user').only('user__username'))
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

        Prefetch('lecturer', queryset=Lecturer.objects.all().select_related('user').only('user__username'))
    ).select_related('subject', 'group')
    serializer_class = TimetableSerializer

    def get_queryset(self):
        return self.queryset.filter(lecturer__user__slug=self.request.user.slug)


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

    @method_decorator(cache_page(60 * 60 * 2, key_prefix='journal'), )
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class LessonDetailRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Lesson.objects.all().select_related('quest', 'group').prefetch_related('student_passes')
    serializer_class = LessonDetailSerializer
    lookup_field = 'id'
    http_method_names = ['get', 'post', 'patch', 'delete', 'head', 'options', 'trace']

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)
