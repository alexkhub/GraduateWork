from django.urls import path

from .views import *

urlpatterns = [
    path('', StudentPerformance.as_view(), name='home'),
]