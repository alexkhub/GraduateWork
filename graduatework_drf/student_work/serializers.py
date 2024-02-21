from rest_framework import serializers
from .models import *
from .service import *
from student_performance.serializers import LecturerInformationSerializer

from student_performance.models import Group, Subject, Lecturer, Users


class GroupQuestSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField('name', queryset=Group.objects.all())
    subject = serializers.SlugRelatedField(slug_field='subject_name', queryset=Subject.objects.all())
    lecturer = LecturerInformationSerializer()

    # lecturer = serializers.CharField(source='quest_lecturer')
    class Meta:
        model = Quest
        fields = (
            'quest_name', 'description', 'file_link', 'date_added', 'date_pass', 'slug', 'group', 'subject', 'lecturer')

    def create(self, validated_data):
        lecturer_data = validated_data.pop('lecturer')
        lecturer_data['user'] = self.context['request'].user

        lecturer_instance = Lecturer.objects.create(**lecturer_data)
        return Quest.objects.create(lecturer=lecturer_instance, **validated_data)


class StudentQuestSerializer(serializers.ModelSerializer):
    quest = serializers.SlugRelatedField('quest_name', read_only=True)
    user = serializers.SlugRelatedField('username', read_only=True)

    class Meta:
        model = UserQuest
        fields = ('status', 'comment', 'file_link', 'date_added', 'quest', 'user')

    def update(self, instance, validated_data):
        instance.comment = validated_data.get('comment', instance.comment)
        instance.file_link = validated_data.get('file_link', instance.file_link)
        instance.date_added = get_date()

        instance.save()
        return instance


class CreateStudentQuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserQuest
        fields = '__all__'


class ProfileStudentUserQuestSerializer(serializers.ModelSerializer):
    quest = serializers.SlugRelatedField('quest_name', read_only=True)
    user = serializers.SlugRelatedField('username', read_only=True)

    class Meta:
        model = UserQuest
        fields = ('status', 'date_added', 'quest', 'user')


class ProfileStudentQuestSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField('name', queryset=Group.objects.all())
    subject = serializers.SlugRelatedField(slug_field='subject_name', queryset=Subject.objects.all())
    lecturer = LecturerInformationSerializer()

    class Meta:
        model = Quest
        fields = (
            'quest_name',  'date_added',  'slug', 'group', 'subject', 'lecturer')
