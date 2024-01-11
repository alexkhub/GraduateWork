from django.shortcuts import render
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from .models import *
from .serializers import *


class StudentPerformance(ListAPIView):
    queryset = MeasurableTypesControl.objects.all()
    serializer_class = MeasurableTypesControlSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]

