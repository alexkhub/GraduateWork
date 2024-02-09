from django.urls import path

from .views import *

urlpatterns = [
    path('', StudentPerformanceListView.as_view(), name='home'),
    path('profile/<slug:slug>/', StudentProfile.as_view(), name='profile')

]