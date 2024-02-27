# Generated by Django 5.0.1 on 2024-02-08 18:19

import autoslug.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timetable', '0002_classroom'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='timetablechanges',
            name='day_of_the_week',
        ),
        migrations.AlterField(
            model_name='classroom',
            name='slug',
            field=autoslug.fields.AutoSlugField(editable=False, populate_from='get_url', unique=True, verbose_name='URL'),
        ),
        migrations.AlterField(
            model_name='timetableofclasses',
            name='day_of_the_week',
            field=models.CharField(choices=[('пн', 'понедельник'), ('вт', 'вторник'), ('ср', 'среда'), ('чт', 'четверг'), ('пт', 'пятница'), ('сб', 'суббота')], max_length=30, verbose_name='День недели'),
        ),
        migrations.AlterField(
            model_name='timetableofclasses',
            name='evenness',
            field=models.CharField(choices=[('четная', 'четная'), ('нечетная', 'нечетная'), ('совмещенная', 'совмещенная')], default='совмещенная', max_length=30, verbose_name='Четность недели'),
        ),
    ]