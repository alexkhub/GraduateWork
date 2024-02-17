from graduatework_drf.celery import app
from .service import *
from student_performance.models import Users


@app.task
def send_quests(group, subject, quest_name):
    quest_message = f"{str(subject)} - {str(quest_name)}"
    students = Users.objects.filter(group__name=group)
    for student in students:
        send_quest(quest_message=quest_message, student_email=student.email)



