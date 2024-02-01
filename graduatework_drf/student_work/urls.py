from django.urls import path

from .views import *

urlpatterns = [
    path('group_quest/<slug:group_slug>/', GroupQuestListCreateView.as_view(), name='group_work'),
    path('detail_student_quest/<int:id>', DetailStudentQuestRetrieveUpdateDestroy.as_view(),
         name='detail_student_quest'),
    path('create_student_quest/', CreateStudentQuestCreateView.as_view(), name='create_student_quest')
]
