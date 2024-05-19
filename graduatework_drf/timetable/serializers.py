from rest_framework import serializers
from .models import *
from student_performance.serializers import LecturerInformationSerializer, UsernameSerializer, LessonStudentScoresSerializer

from student_performance.models import Users, Group

from student_work.models import Quest


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
    student_scores = LessonStudentScoresSerializer(many=True)
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


class CustomChoiceField(serializers.ChoiceField):
    def to_internal_value(self, data):
        # type casting
        if isinstance(data, int):
            return float(data)

        return super().to_internal_value(data)


class LessonDetailSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField(many=False, slug_field='name', read_only=True)
    quest = serializers.SlugRelatedField(many=False, slug_field='quest_name',
                                         queryset=Quest.objects.all().only('id', 'quest_name', 'date_added'))
    type_of_lesson = CustomChoiceField(choices=TYPE_OF_LESSON)
    student_scores = LessonStudentScoresSerializer(many=True)

    class Meta:
        model = Lesson
        exclude = ('subject', 'lecturer', 'classroom')

    def update(self, instance, validated_data):
        student_scores_instance = validated_data.pop('student_scores')
        instance.lesson_topic = validated_data.get('lesson_topic', instance.lesson_topic)
        instance.type_of_lesson = validated_data.get('type_of_lesson', instance.type_of_lesson)
        instance.quest = validated_data.get('quest', instance.quest)
        instance.student_passes.clear()

        instance.save()
        for sp in student_scores_instance:
            instance.student_scores.add(sp)
        return instance


class Study_Plan_SubjectsSerializer(serializers.ModelSerializer):
    subject = serializers.SlugRelatedField(slug_field='subject_name', read_only=True)

    class Meta:
        model = Study_Plan
        fields = ('subject', 'plan_name', 'term')


class Journal_ListSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField('name', read_only=True)
    subject = serializers.SlugRelatedField(slug_field='subject_name', read_only=True)
    lecturer = LecturerInformationSerializer(read_only=True)
    class Meta:
        model = Journal
        exclude = ('lessons', 'number_of_lesson')