from rest_framework import serializers
from .models import *


class LecturerInformationSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field='username', queryset=Users.objects.all())

    class Meta:
        model = Lecturer
        fields = ('user',)
        # read_only = ('owner.username',)


class Student_ScoresSerializer(serializers.ModelSerializer):
    student = serializers.SlugRelatedField(slug_field='username', read_only=True)
    subject = serializers.SlugRelatedField(slug_field='subject_name', read_only=True)
    lecturer = LecturerInformationSerializer(read_only=True)

    class Meta:
        model = Student_Scores
        exclude = ('description',)

        read_only = ('owner.username',)


class StudentProfileSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField(slug_field='name', read_only=True)

    class Meta:
        model = Users
        fields = '__all__'
