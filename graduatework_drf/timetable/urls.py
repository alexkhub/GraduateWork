from django.urls import path

from .views import *

urlpatterns = [
    path('timetable/<slug:group_slug>/', TimetableListView.as_view(), name='timetable'),
    path('exam/<slug:group_slug>/', ExamListView.as_view(), name='exam'),
    path('timetable_changes/', TimetableChangesListView.as_view(), name='timetable_changes'),
    path('timetable_lector/', LectorTimeTableListView.as_view(), name='timetable_lector'),
    path('journal/<int:id>/', JournalRetrieveView.as_view(), name='journal')
]