from django.urls import path

from .views import *

urlpatterns = [
    path('', StudentPerformanceListView.as_view(), name='home'),
]