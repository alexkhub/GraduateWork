from rest_framework import serializers
from .models import *


class LecturerInformationSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field='username', queryset=Users.objects.all())

    class Meta:
        model = Lecturer
        fields = ('user',)
        read_only = ('owner.username',)


class MeasurableTypesControlSerializer(serializers.ModelSerializer):
    student = serializers.SlugRelatedField(slug_field='username', read_only=True)
    subject = serializers.SlugRelatedField(slug_field='subject_name', read_only=True)
    lecturer = LecturerInformationSerializer(read_only=True)

    class Meta:
        model = MeasurableTypesControl
        exclude = ('description',)

        read_only = ('owner.username',)
