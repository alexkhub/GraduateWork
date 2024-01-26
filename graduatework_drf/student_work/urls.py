from django.urls import path

from .views import *

urlpatterns = [
    path('<slug:group_slug>/', GroupQuestListView.as_view(), name='group_work'),
    path('detail_student_quest/<int:id>', DetailStudentQuestRetrieveUpdateDestroy.as_view(),
         name='detail_student_quest')
]
