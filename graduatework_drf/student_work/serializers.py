from rest_framework import serializers
from .models import *
from student_performance.serializers import LecturerInformationSerializer

from student_performance.models import Group, Subject, Lecturer


class GroupQuestSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField('name', queryset=Group.objects.all())
    subject = serializers.SlugRelatedField(slug_field='subject_name', queryset=Subject.objects.all())
    lecturer = LecturerInformationSerializer()

    class Meta:
        model = Quest
        fields = (
            'quest_name', 'description', 'file_link', 'date_added', 'date_pass', 'slug', 'group', 'subject', 'lecturer')


class DetailStudentQuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserQuest
        fields = '__all__'

    def create(self, validated_data):
        return UserQuest.objects.create(**validated_data)
