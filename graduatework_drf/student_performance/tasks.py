from graduatework_drf.celery import app
from django.db.models import F
from .service import *
from .models import *


@app.task
def send_email():
    send()


@app.task
def update_student_tern():
    Users.objects.filter(is_staff=False).update(term=F('term') + 1)
    return None
