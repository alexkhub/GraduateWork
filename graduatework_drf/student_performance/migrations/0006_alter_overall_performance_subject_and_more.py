# Generated by Django 5.0.1 on 2024-02-22 13:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_performance', '0005_users_term'),
    ]

    operations = [
        migrations.AlterField(
            model_name='overall_performance',
            name='subject',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='student_performance.subject', verbose_name='Предмет'),
        ),
        migrations.AlterField(
            model_name='student_scores',
            name='lecturer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='student_performance.lecturer', verbose_name='Преподаватель'),
        ),
        migrations.AlterField(
            model_name='student_scores',
            name='subject',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='student_performance.subject', verbose_name='Предмет'),
        ),
    ]
