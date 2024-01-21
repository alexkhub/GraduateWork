from django.urls import path

from .views import *

urlpatterns = [
    path('', TimetableListView.as_view(), name='timetable'),
    path('exam/<slug:group_slug>/', ExamListView.as_view(), name='exam')
]