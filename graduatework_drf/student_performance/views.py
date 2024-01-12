from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import *
from .serializers import *


class StudentPerformance(ListAPIView):
    queryset = MeasurableTypesControl.objects.all()
    serializer_class = MeasurableTypesControlSerializer
    authentication_classes = (JWTAuthentication,)
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):

        measurabletypescontrol_serializer = self.serializer_class(self.get_queryset(), many=True)
        return Response(
            {
                'measurabletypescontrol' : measurabletypescontrol_serializer.data,
            }
        )


