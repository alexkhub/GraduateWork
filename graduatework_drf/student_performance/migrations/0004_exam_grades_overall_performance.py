# Generated by Django 5.0.1 on 2024-01-19 10:51

import django.db.models.deletion
import sortedm2m.fields
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_performance', '0003_delete_exam'),
        ('timetable', '0003_alter_timetablechanges_day_of_the_week_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Exam_Grades',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('points', models.PositiveIntegerField(default=0, verbose_name='Баллы')),
                ('exam', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='timetable.exam', verbose_name='Экзамен')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Студент')),
            ],
            options={
                'verbose_name': 'Баллы за экзамены',
                'verbose_name_plural': 'Баллы за экзамены',
            },
        ),
        migrations.CreateModel(
            name='Overall_Performance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exam_grades', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='student_performance.exam_grades', verbose_name='Экзамен')),
                ('measurable_types_control', sortedm2m.fields.SortedManyToManyField(help_text=None, to='student_performance.measurabletypescontrol', verbose_name='Измеримые виды контроля')),
                ('other_measurable_types_control', sortedm2m.fields.SortedManyToManyField(help_text=None, to='student_performance.othermeasurabletypescontrol', verbose_name='Иные измеримые виды контроля')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Студент')),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='student_performance.subject', verbose_name='Предмет')),
            ],
            options={
                'verbose_name': 'Общая успеваемость',
                'verbose_name_plural': 'Общая успеваемость',
            },
        ),
    ]