from rest_framework import serializers
from .models import *

class TimetableSerializer(serializers.ModelSerializer):

    class Meta:
        model = TimetableOfClasses
        fields = '__all__'
