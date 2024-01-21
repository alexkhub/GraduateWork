from rest_framework import serializers
from .models import *
from student_performance.serializers import LecturerInformationSerializer


class TimetableSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField('name', read_only=True)
    subject = serializers.SlugRelatedField(slug_field='subject_name', read_only=True)
    lecturer = LecturerInformationSerializer(read_only=True)

    class Meta:
        model = TimetableOfClasses
        fields = (
            'id', 'lesson_number', 'start_time', 'end_time', 'evenness', 'day_of_the_week', 'classroom', 'group',
            'subject', 'lecturer')


class ExamSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField('name', read_only=True)
    subject = serializers.SlugRelatedField(slug_field='subject_name', read_only=True)
    lecturer = LecturerInformationSerializer(read_only=True)

    class Meta:
        model = Exam
        fields = ('id', 'group', 'subject', 'lecturer', 'start_time', 'end_time', 'date', 'classroom')
