
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from .models import *
from .serializers import *

class TimetableListView(ListAPIView):
    queryset = TimetableOfClasses.objects.all().order_by('group__slug',  'day_of_the_week', 'lesson_number')
    serializer_class = TimetableSerializer
