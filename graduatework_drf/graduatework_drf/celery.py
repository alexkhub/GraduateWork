import os
from celery import Celery
from celery.schedules import crontab

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'graduatework_drf.settings')

app = Celery('graduatework_drf')
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()

app.conf.beat_schedule = {
    'update_student_tern': {
        'task': 'student_performance.tasks.update_student_tern',
        'schedule': crontab(minute='0', hour='12', day_of_month='11', month_of_year='7')
    },
    'timetable_automatic_generation': {
        'task': 'timetable.tasks.create_lessons',
        'schedule': crontab(minute='0', hour='8', )
    },
    'inactive_journal': {
        'task': 'timetable.tasks.inactive_journal',
        'schedule': crontab(minute='0', hour='13', day_of_month='11', month_of_year='7')
    }
}