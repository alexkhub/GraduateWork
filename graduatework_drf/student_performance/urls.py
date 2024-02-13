from django.urls import path

from .views import *

urlpatterns = [
    path('', StudentPerformanceListView.as_view(), name='home'),
    path('profile/<slug:slug>/', StudentProfileRetrieveDestroyView.as_view(), name='profile'),
    path('delete-user/', DeleteEmailView.as_view(), name='delete-user'),
    path('my_group/<slug:slug>/', MyGroupView.as_view(), name='my_group'),

]