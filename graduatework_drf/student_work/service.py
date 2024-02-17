from datetime import datetime, date, timedelta
from django.core.mail import send_mail
from .models import *


def send_quest(quest_message, student_email):
    send_mail(
        'ДЗ',
        quest_message,
        'aleksandrkhubaevwork@gmail.com',
        [student_email],
        fail_silently=False
    )


def get_date():
    date = str(datetime.today())
    return date[:10]


def date_filter_sq():
    day = date.today()
    day_before = day - timedelta(weeks=6)
    return day_before
