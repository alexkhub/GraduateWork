from django.urls import path

from .views import *

urlpatterns = [
    path('scores/<slug:slug>/', StudentPerformanceListView.as_view(), name='scores'),
    path('profile/<slug:slug>/', StudentProfileRetrieveUpdateDestroyView.as_view(), name='profile'),
    path('delete-user/', DeleteEmailView.as_view(), name='delete-user'),
    path('my_group/<slug:slug>/', MyGroupView.as_view(), name='my_group'),
    path('scores_detail/<int:id>/', Student_ScoresRetrieveUpdateDestroyView.as_view(), name='scores_detail' ),

]