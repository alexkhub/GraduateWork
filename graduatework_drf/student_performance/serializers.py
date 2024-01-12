from rest_framework import serializers
from .models import *


class MeasurableTypesControlSerializer(serializers.ModelSerializer):

    class Meta:
        model = MeasurableTypesControl
        fields = '__all__'
        read_only = ('owner.username',)
