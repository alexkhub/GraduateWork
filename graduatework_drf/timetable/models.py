from django.db import models


# Create your models here.

class Exam(models.Model):
    group = models.ForeignKey('student_performance.Group', on_delete=models.CASCADE, verbose_name='Группа',
                              related_name='exam_group')
    subject = models.ForeignKey('student_performance.Subject', on_delete=models.CASCADE, verbose_name='Дисциплина',
                                related_name='exam_subject')
    lecturer = models.ForeignKey('student_performance.Lecturer', on_delete=models.PROTECT, verbose_name='Преподаватель',
                                 related_name='exam_lecturer')
    start_date = models.DateTimeField(verbose_name='Начало экзамена')
    end_date = models.DateTimeField(verbose_name='Конец экзамена')
    classroom = models.CharField(max_length=10, verbose_name='Аудитория', blank=True, null=True)

    class Meta:
        verbose_name = 'Экзамен'
        verbose_name_plural = 'Экзамены'

    def __str__(self):
        return f"Экз {self.subject}-{self.group}"


class TimetableOfClasses(models.Model):
    group = models.ForeignKey('student_performance.Group', on_delete=models.CASCADE, verbose_name='Группа',
                              related_name='timetable_group')
    subject = models.ForeignKey('student_performance.Subject', on_delete=models.CASCADE, verbose_name='Дисциплина',
                                related_name='timetable_subject')
    lecturer = models.ForeignKey('student_performance.Lecturer', on_delete=models.PROTECT, verbose_name='Преподаватель',
                                 related_name='timetable_lecturer')

    lesson_number = models.PositiveIntegerField(verbose_name='Номер пары', default=1)
    start_time = models.TimeField(verbose_name='Начало пары')
    end_time = models.TimeField(verbose_name='Конец пары')
    evenness = models.CharField(max_length=10 ,verbose_name='Четность недели', default='обе')
    day_of_the_week = models.CharField(max_length=15, verbose_name='День недели', )
    classroom = models.CharField(max_length=10, verbose_name='Аудитория', blank=True, null=True)

    def __str__(self):
        return f"{self.group}-{self.subject}-{self.lesson_number}"

    class Meta:
        verbose_name = 'Расписание занятий'
        verbose_name_plural = 'Расписание занятий'


class TimetableChanges(models.Model):
    group = models.ForeignKey('student_performance.Group', on_delete=models.CASCADE, verbose_name='Группа',
                              related_name='changes_group')
    subject = models.ForeignKey('student_performance.Subject', on_delete=models.CASCADE, verbose_name='Дисциплина',
                                related_name='changes_subject')
    lecturer = models.ForeignKey('student_performance.Lecturer', on_delete=models.PROTECT, verbose_name='Преподаватель',
                                 related_name='changes_lecturer')

    lesson_number = models.PositiveIntegerField(verbose_name='Номер пары', default=1)
    start_time = models.TimeField(verbose_name='Начало пары')
    end_time = models.TimeField(verbose_name='Конец пары')
    day_of_the_week = models.CharField(max_length=15, verbose_name='День недели', )
    classroom = models.CharField(max_length=10, verbose_name='Аудитория', blank=True, null=True)
    date = models.DateField(verbose_name='Дата', blank=True, null=True)

    class Meta:
        verbose_name = 'Расписание замен'
        verbose_name_plural = 'Расписание замен'

    def __str__(self):
        return f"{self.group}-{self.subject}-{self.lesson_number}"
