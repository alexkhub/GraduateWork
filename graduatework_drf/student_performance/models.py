from django.db import models

from django.contrib.auth.models import AbstractUser
from sortedm2m.fields import SortedManyToManyField
from autoslug import AutoSlugField


class Users(AbstractUser):
    phone = models.CharField(max_length=20, verbose_name="Телефон", blank=True)
    group = models.ForeignKey('Group', on_delete=models.PROTECT, verbose_name='Группа', blank=True, null=True)
    slug = AutoSlugField(populate_from='username', unique=True, db_index=True, verbose_name='URL', )
    birthday = models.DateField(verbose_name='Дата рождения', blank=True, null=True)
    address = models.CharField(max_length=150, blank=True, verbose_name='Адрес', null=True)
    user_photo = models.ImageField(upload_to='user_photo/%Y/%m/%d/', verbose_name='Аватарка', blank=True, null=True)

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Group(models.Model):
    name = models.CharField(max_length=100, verbose_name='Название группы')
    curs = models.IntegerField(default=1, verbose_name='Курс', blank=True, null=True)
    slug = models.SlugField(max_length=100, unique=True, db_index=True, verbose_name='URL', )

    class Meta:
        verbose_name = 'Группа'
        verbose_name_plural = 'Группы'

    def __str__(self):
        return self.name


class Subject(models.Model):
    subject_name = models.CharField(max_length=50, verbose_name="Название")
    subject_code = models.CharField(max_length=20, blank=True, null=True, verbose_name="Код предмета")
    description = models.TextField(verbose_name="Описание", blank=True, null=True)
    slug = models.SlugField(max_length=100, unique=True, db_index=True, verbose_name='URL', )

    class Meta:
        verbose_name = 'Предмет'
        verbose_name_plural = 'Предметы'

    def __str__(self):
        return f"{self.subject_name}-{self.subject_code}"


class Lecturer(models.Model):
    user = models.ForeignKey('Users', on_delete=models.PROTECT, verbose_name='Пользователь')
    groups = SortedManyToManyField('Group', verbose_name='Группы', blank=True)
    subjects = SortedManyToManyField('Subject', verbose_name='Предметы', blank=True)

    class Meta:
        verbose_name = 'Преподаватель'
        verbose_name_plural = 'Преподаватели'

    def __str__(self):
        return str(self.user)


class MeasurableTypesControl(models.Model):
    student = models.ForeignKey('Users', on_delete=models.PROTECT, verbose_name='Студент')
    subject = models.ForeignKey('Subject', on_delete=models.PROTECT, verbose_name='Предмет')
    lecturer = models.ForeignKey('Lecturer', on_delete=models.PROTECT, verbose_name='Преподаватель')
    cause = models.CharField(max_length=70, verbose_name='Причина', )
    points = models.PositiveIntegerField(verbose_name='Баллы', default=0)
    description = models.TextField(verbose_name='Описание', blank=True, null=True)
    date = models.DateField(auto_now_add=True, verbose_name="Дата")

    class Meta:
        verbose_name = 'Измеримые виды контроля'
        verbose_name_plural = 'Измеримые виды контроля'

    def __str__(self):
        return f"{self.student}-{self.subject}-{self.date}"


class OtherMeasurableTypesControl(models.Model):
    student = models.ForeignKey('Users', on_delete=models.PROTECT, verbose_name='Студент')
    subject = models.ForeignKey('Subject', on_delete=models.PROTECT, verbose_name='Предмет')
    lecturer = models.ForeignKey('Lecturer', on_delete=models.PROTECT, verbose_name='Преподаватель')
    cause = models.CharField(max_length=70, verbose_name='Причина', )
    points = models.PositiveIntegerField(verbose_name='Баллы', default=0)
    description = models.TextField(verbose_name='Описание', blank=True, null=True)
    date = models.DateField(auto_now_add=True, verbose_name="Дата")

    class Meta:
        verbose_name = 'Иные измеримые виды контроля'
        verbose_name_plural = 'Иные измеримые виды контроля'

    def __str__(self):
        return f"{self.student}-{self.subject}-{self.date}"




