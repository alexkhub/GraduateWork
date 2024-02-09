# Generated by Django 5.0.1 on 2024-02-09 07:28

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timetable', '0003_remove_timetablechanges_day_of_the_week_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exam',
            name='classroom',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='timetable.classroom', verbose_name='Аудитория'),
        ),
        migrations.AlterField(
            model_name='timetablechanges',
            name='classroom',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='timetable.classroom', verbose_name='Аудитория'),
        ),
        migrations.AlterField(
            model_name='timetableofclasses',
            name='classroom',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='timetable.classroom', verbose_name='Аудитория'),
        ),
    ]
