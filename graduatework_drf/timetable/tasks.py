from graduatework_drf.celery import app
from django.db.models import Q

from .models import TimetableOfClasses, TimetableChanges, Journal, Lesson
from .service import *


@app.task
def create_lessons():
    changes = TimetableChanges.objects.filter(date=get_date()).order_by('group', 'lesson_number').select_related(
        'group', 'subject', 'classroom', 'lecturer')
    groups = set()
    lessons_list = []
    for change in changes:
        groups.add(change.group)
        lessons_list.extend([Lesson(group=change.group,
                                    subject=change.subject,
                                    lecturer=change.lecturer,
                                    classroom=change.classroom)])
    timetables = TimetableOfClasses.objects.filter(
        Q(evenness__in=['совмещенная', definition_evenness()]) & Q(day_of_the_week='сб')).exclude(
        group__in=groups).order_by('group', 'lesson_number').select_related('group', 'subject', 'classroom',
                                                                            'lecturer')

    for timetable in timetables:
        lessons_list.extend([Lesson(group=timetable.group,
                                    subject=timetable.subject,
                                    lecturer=timetable.lecturer,
                                    classroom=timetable.classroom)])
    lessons_2 = Lesson.objects.bulk_create(lessons_list)
    for lesson in lessons_2:
        print(f'{lesson.subject.slug}-{lesson.group.slug}-{lesson.group.curs}')
        try:
            journal = Journal.objects.get(slug=f'{lesson.subject.slug}-{lesson.group.slug}-{lesson.group.curs}')
            journal.lessons.add(lesson)
        except Journal.DoesNotExist:
            pass
    return None
