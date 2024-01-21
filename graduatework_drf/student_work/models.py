from autoslug import AutoSlugField
from django.db import models

# Create your models here.


class Quest(models.Model):
    quest_name = models.CharField(max_length=100, verbose_name='Задание')
    subject = models.ForeignKey('student_performance.Subject', on_delete=models.CASCADE, verbose_name='Дисциплина',
                                related_name='quest_subject')
    lecturer = models.ForeignKey('student_performance.Lecturer', on_delete=models.PROTECT, verbose_name='Преподаватель',
                                 related_name='quest_lecturer')
    group = models.ForeignKey('student_performance.Group', on_delete=models.CASCADE, verbose_name='Группа',
                              related_name='quest_group')
    description = models.TextField(verbose_name='Описание', blank=True, null=True)
    file_link = models.FileField(upload_to='quest/%Y/%m/%d/', blank=True, null=True)
    date_added = models.DateField(auto_now_add=True, blank=True, verbose_name='Дата Добавления')
    date_pass = models.DateField(auto_now_add=True, blank=True, verbose_name='Дата сдачи')
    slug = AutoSlugField(populate_from='quest_name', unique=True, db_index=True, verbose_name='URL', )

    class Meta:
        verbose_name = 'Задание'
        verbose_name_plural = 'Задания'

    def __str__(self):
        return f"{self.quest_name}-{self.date_added}"


class UserQuest(models.Model):
    status = models.BooleanField(default=True, verbose_name='Статус')
    quest = models.ForeignKey('Quest', on_delete=models.PROTECT, verbose_name='Задание')
    user = models.ForeignKey('student_performance.Users', on_delete=models.CASCADE, verbose_name='Студент',
                             related_name='user_quest_student')
    comment = models.TextField(verbose_name='Комментарий', blank=True, null=True)
    file_link = models.FileField(upload_to='user_quest/%Y/%m/%d/', blank=True, null=True)
    date_added = models.DateField(auto_now_add=True, blank=True)

    class Meta:
        verbose_name = 'Готовая работа'
        verbose_name_plural = 'Готовые работы'

    def __str__(self):
        return f"{self.user}-{self.quest}-{self.date_added}"