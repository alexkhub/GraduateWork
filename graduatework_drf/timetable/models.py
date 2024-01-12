from django.db import models

# Create your models here.

class Exam(models.Model):
    group = models.ForeignKey('student_performance.Group', on_delete=models.CASCADE, verbose_name='Группа', related_name='group')
    subject = models.ForeignKey('student_performance.Subject', on_delete=models.CASCADE, verbose_name='Дисциплина', related_name='subject')
    lecturer = models.ForeignKey('student_performance.Lecturer', on_delete=models.PROTECT, verbose_name='Преподаватель', related_name='lecturer')
    start_date = models.DateTimeField(verbose_name='Начало экзамена')
    end_date = models.DateTimeField(verbose_name='Конец экзамена')
    classroom = models.CharField(max_length=10, verbose_name='Аудитория', blank=True, null=True)

    class Meta:
        verbose_name = 'Экзамен'
        verbose_name_plural = 'Экзамены'

    def __str__(self):
        return f"Экз {self.subject}-{self.group}"