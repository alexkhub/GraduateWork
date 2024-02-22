from datetime import date

from django.core.mail import send_mail


def get_date() -> str:
    today = str(date.today())
    return today


def get_day_of_the_week() -> str:
    today = date.today()
    day_of_the_week = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб',  7: 'вс'}
    return day_of_the_week[today.weekday()+1]


def definition_evenness() -> str:
    week_number = date.today().isocalendar().week
    if week_number % 2 == 0:
        return 'четная'
    return 'нечетная'



def send_destroy_lesson_email(email_body):
    send_mail(
        'Удаление пары',
        email_body,
        'aleksandrkhubaevwork@gmail.com',
        ['aleksandrkhubaev04@gmail.com'],
        fail_silently=False
    )