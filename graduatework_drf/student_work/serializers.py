from rest_framework import serializers
from .models import *
from student_performance.serializers import LecturerInformationSerializer


class GroupQuestSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField('name', read_only=True)
    subject = serializers.SlugRelatedField(slug_field='subject_name', read_only=True)
    lecturer = LecturerInformationSerializer(read_only=True)

    class Meta:
        model = Quest
        fields = ('quest_name', 'description', 'file_link', 'date_added', 'date_pass', 'slug', 'group', 'subject', 'lecturer')

    def create(self, validated_data):
        return Quest.objects.create(**validated_data)


class DetailStudentQuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserQuest
        fields = '__all__'

    def create(self, validated_data):
        return UserQuest.objects.create(**validated_data)
