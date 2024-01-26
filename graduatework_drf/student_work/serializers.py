from rest_framework import serializers
from .models import *
from student_performance.serializers import LecturerInformationSerializer


class GroupQuestSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField('name', read_only=True)
    subject = serializers.SlugRelatedField(slug_field='subject_name', read_only=True)
    lecturer = LecturerInformationSerializer(read_only=True)

    class Meta:
        model = Quest
        fields = '__all__'


class DetailStudentQuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserQuest
        fields = '__all__'
