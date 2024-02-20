from rest_framework import serializers
from .models import *
from student_performance.serializers import LecturerInformationSerializer, UsernameSerializer

from student_performance.models import Users


class TimetableSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField('name', read_only=True)
    subject = serializers.SlugRelatedField(slug_field='subject_name', read_only=True)
    lecturer = LecturerInformationSerializer(read_only=True)
    classroom = serializers.SlugRelatedField('slug', read_only=True)

    class Meta:
        model = TimetableOfClasses
        fields = (
            'id', 'lesson_number', 'start_time', 'end_time', 'evenness', 'day_of_the_week', 'classroom', 'group',
            'subject', 'lecturer')


class ExamSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField('name', read_only=True)
    subject = serializers.SlugRelatedField(slug_field='subject_name', read_only=True)
    lecturer = LecturerInformationSerializer(read_only=True)
    classroom = serializers.SlugRelatedField('slug', read_only=True)

    class Meta:
        model = Exam
        fields = ('id', 'group', 'subject', 'lecturer', 'start_time', 'end_time', 'date', 'classroom')


class TimetableChangesSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField('name', read_only=True)
    subject = serializers.SlugRelatedField(slug_field='subject_name', read_only=True)
    lecturer = LecturerInformationSerializer(read_only=True)
    classroom = serializers.SlugRelatedField('slug', read_only=True)

    class Meta:
        model = TimetableChanges
        fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):
    student_passes = UsernameSerializer(read_only=True, many=True)
    quest = serializers.SlugRelatedField(slug_field='quest_name', read_only=True)

    class Meta:
        model = Lesson
        exclude = ('group', 'subject', 'lecturer', 'classroom')


class JournalSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField('name', read_only=True)
    subject = serializers.SlugRelatedField(slug_field='subject_name', read_only=True)
    lecturer = LecturerInformationSerializer(read_only=True)
    lessons = LessonSerializer(read_only=True, many=True)

    class Meta:
        model = Journal
        fields = '__all__'


class LessonDetailSerializer(serializers.ModelSerializer):
    student_passes = UsernameSerializer(many=True)


    class Meta:
        model = Lesson
        exclude = ('subject', 'lecturer', 'classroom')

    def create_or_student_passess(self, student_passes):
        student_ids = []
        for student in student_passes:
            package_instance, created = Users.objects.update_or_create(pk=student.get('id'), defaults=student)
            student_ids.append(package_instance.pk)
        return student_ids

    def update(self, instance, validated_data):
        student_passes = validated_data.pop('student_passes', [])
        instance.student_passes = set(self.create_or_student_passess(student_passes))
        instance.lesson_topic = validated_data.get('lesson_topic', instance.lesson_topic)
        instance.type_of_lesson = validated_data.get('type_of_lesson', instance.type_of_lesson)
        instance.quest = validated_data.get('quest', instance.quest)
        return  instance



