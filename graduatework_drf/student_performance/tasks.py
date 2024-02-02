from graduatework_drf.celery import app
from .service import *


@app.task
def send_email():
    send()