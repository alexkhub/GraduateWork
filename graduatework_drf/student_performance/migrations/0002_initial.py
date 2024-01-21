# Generated by Django 5.0.1 on 2024-01-21 13:11

import django.db.models.deletion
import sortedm2m.fields
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('student_performance', '0001_initial'),
        ('timetable', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='exam_grades',
            name='exam',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='timetable.exam', verbose_name='Экзамен'),
        ),
        migrations.AddField(
            model_name='exam_grades',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Студент'),
        ),
        migrations.AddField(
            model_name='users',
            name='group',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='student_performance.group', verbose_name='Группа'),
        ),
        migrations.AddField(
            model_name='lecturer',
            name='groups',
            field=sortedm2m.fields.SortedManyToManyField(blank=True, help_text=None, to='student_performance.group', verbose_name='Группы'),
        ),
        migrations.AddField(
            model_name='lecturer',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь'),
        ),
        migrations.AddField(
            model_name='measurabletypescontrol',
            name='lecturer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='student_performance.lecturer', verbose_name='Преподаватель'),
        ),
        migrations.AddField(
            model_name='measurabletypescontrol',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Студент'),
        ),
        migrations.AddField(
            model_name='othermeasurabletypescontrol',
            name='lecturer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='student_performance.lecturer', verbose_name='Преподаватель'),
        ),
        migrations.AddField(
            model_name='othermeasurabletypescontrol',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Студент'),
        ),
        migrations.AddField(
            model_name='overall_performance',
            name='exam_grades',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='student_performance.exam_grades', verbose_name='Экзамен'),
        ),
        migrations.AddField(
            model_name='overall_performance',
            name='measurable_types_control',
            field=sortedm2m.fields.SortedManyToManyField(help_text=None, to='student_performance.measurabletypescontrol', verbose_name='Измеримые виды контроля'),
        ),
        migrations.AddField(
            model_name='overall_performance',
            name='other_measurable_types_control',
            field=sortedm2m.fields.SortedManyToManyField(help_text=None, to='student_performance.othermeasurabletypescontrol', verbose_name='Иные измеримые виды контроля'),
        ),
        migrations.AddField(
            model_name='overall_performance',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Студент'),
        ),
        migrations.AddField(
            model_name='overall_performance',
            name='subject',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='student_performance.subject', verbose_name='Предмет'),
        ),
        migrations.AddField(
            model_name='othermeasurabletypescontrol',
            name='subject',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='student_performance.subject', verbose_name='Предмет'),
        ),
        migrations.AddField(
            model_name='measurabletypescontrol',
            name='subject',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='student_performance.subject', verbose_name='Предмет'),
        ),
        migrations.AddField(
            model_name='lecturer',
            name='subjects',
            field=sortedm2m.fields.SortedManyToManyField(blank=True, help_text=None, to='student_performance.subject', verbose_name='Предметы'),
        ),
    ]
