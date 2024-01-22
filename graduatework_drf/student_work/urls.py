from django.urls import path

from .views import *

urlpatterns = [
    path('<slug:group_slug>/', GroupQuestListView.as_view(), name='group_work'),
]