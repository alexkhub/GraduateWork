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


class ProfileGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('name', 'slug')


class StudentProfileSerializer(serializers.ModelSerializer):
    group = ProfileGroupSerializer()

    class Meta:
        model = Users
        fields = ('group', 'username', 'first_name', 'email', 'term', 'phone', 'last_name', 'slug', 'is_staff')

    def update(self, instance, validated_data):
        instance.phone = validated_data.get('phone', instance.phone)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.save()
        return instance


class UsernameSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()

    class Meta:
        model = Users
        fields = ('id', 'username',)


class LessonScoresSerializer(serializers.ModelSerializer):
    student = serializers.SlugRelatedField(slug_field='username', read_only=True)

    class Meta:
        model = Student_Scores
        fields = ('id', 'points', 'date', 'student')
