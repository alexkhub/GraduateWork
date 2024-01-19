from django.urls import path

from .views import *

urlpatterns = [
    path('', TimetableListView.as_view(), name='timetable'),
]