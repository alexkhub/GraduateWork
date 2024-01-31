
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from .models import *
from .serializers import *
from django.db.models import Q, Prefetch
from .utils import *


class StudentPerformanceListView(ListAPIView):
    queryset = Student_Scores.objects.all().prefetch_related(
        Prefetch('subject', queryset=Subject.objects.all()),
        Prefetch('student', queryset=Users.objects.all()),
        Prefetch('lecturer', queryset=Lecturer.objects.all())
    ).order_by('-date')
    serializer_class = Student_ScoresSerializer
    authentication_classes = (JWTAuthentication,)
    # permission_classes = [IsAuthenticated]
    filter_backends = (DjangoFilterBackend,)
    filterset_class = MeasurableTypesControlFilter

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        measurable_types_control_serializer = self.serializer_class(queryset, many=True)
        return Response(
            {
                'measurable_types_control': measurable_types_control_serializer.data,
            },
            status=status.HTTP_200_OK
        )
