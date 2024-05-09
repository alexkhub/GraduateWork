from django.contrib.auth.hashers import make_password
from django.db import models

from django.contrib.auth.models import AbstractUser
from django.db.models.functions import Concat
from sortedm2m.fields import SortedManyToManyField
from autoslug import AutoSlugField


class Users(AbstractUser):
    phone = models.CharField(max_length=20, verbose_name="Телефон", blank=True)
    group = models.ForeignKey('Group', on_delete=models.PROTECT, verbose_name='Группа', blank=True, null=True)
    full_name = models.GeneratedField(
        expression=(Concat("first_name",  models.Value(" "), 'last_name')),
        output_field=models.CharField(verbose_name='Поное имя', max_length=100),
        db_persist=True
    )
    slug = AutoSlugField(populate_from='username', unique=True, db_index=True, verbose_name='URL', )
    birthday = models.DateField(verbose_name='Дата рождения', blank=True, null=True)
    address = models.CharField(max_length=150, blank=True, verbose_name='Адрес', null=True)
    user_photo = models.ImageField(upload_to='user_photo/%Y/%m/%d/', verbose_name='Аватарка', blank=True, null=True)
    term = models.PositiveSmallIntegerField(verbose_name='Семестр', default=1)

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return f"{self.full_name}"

    def save(self, *args, **kwargs):
        if self.password and not self.password.startswith(('pbkdf2_sha256$', 'bcrypt$', 'argon2')):
            self.password = make_password(self.password)

        super().save(*args, **kwargs)


class Group(models.Model):
    name = models.CharField(max_length=100, verbose_name='Название группы')
    curs = models.IntegerField(default=1, verbose_name='Курс', blank=True, null=True)
    study_plan_name = models.CharField(max_length=200, verbose_name='Учебный план', blank=True, null=True)
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
        return f"{self.subject_name}"


class Lecturer(models.Model):
    user = models.ForeignKey('Users', on_delete=models.PROTECT, verbose_name='Пользователь',
                             related_name='lecturer_user')
    groups = SortedManyToManyField('Group', verbose_name='Группы', blank=True)
    subjects = SortedManyToManyField('Subject', verbose_name='Предметы', blank=True)

    class Meta:
        verbose_name = 'Преподаватель'
        verbose_name_plural = 'Преподаватели'

    def __str__(self):
        return str(self.user)


class Student_Scores(models.Model):
    student = models.ForeignKey('Users', on_delete=models.PROTECT, verbose_name='Студент')
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE, verbose_name='Предмет', blank=True, null=True)
    lecturer = models.ForeignKey('Lecturer', on_delete=models.SET_NULL, verbose_name='Преподаватель', blank=True,
                                 null=True)
    cause = models.CharField(max_length=70, verbose_name='Причина', )
    points = models.CharField(verbose_name='Баллы/Пропуск', default='0' , max_length=2 )
    description = models.TextField(verbose_name='Описание', blank=True, null=True)
    date = models.DateField(auto_now_add=True, verbose_name="Дата")

    class Meta:
        verbose_name = 'Баллы студента'
        verbose_name_plural = 'Баллы студентов'

    def __str__(self):
        return f"{self.student}-{self.subject}-{self.date}"

    def save(self, *args, **kwargs):
        self.points = str(self.points).lower()

        super().save(*args, **kwargs)



class Exam_Grades(models.Model):
    user = models.ForeignKey('Users', on_delete=models.PROTECT, verbose_name='Студент')
    exam = models.ForeignKey('timetable.Exam', on_delete=models.PROTECT, verbose_name='Экзамен')
    points = models.PositiveIntegerField(verbose_name='Баллы', default=0)

    class Meta:
        verbose_name = 'Баллы за экзамены'
        verbose_name_plural = 'Баллы за экзамены'


class Overall_Performance(models.Model):
    student = models.ForeignKey('Users', on_delete=models.PROTECT, verbose_name='Студент')
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE, verbose_name='Предмет')
    student_scores = SortedManyToManyField('Student_Scores', verbose_name='Баллы студентов')
    exam_grades = models.ForeignKey('Exam_Grades', on_delete=models.CASCADE, verbose_name='Экзамен')
    overall_points = models.PositiveIntegerField(verbose_name='Общее число баллов', default=0)

    class Meta:
        verbose_name = 'Общая успеваемость'
        verbose_name_plural = 'Общая успеваемость'
