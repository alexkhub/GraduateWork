# Generated by Django 5.0.1 on 2024-01-29 13:48

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_performance', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lecturer',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='lecturer_user', to=settings.AUTH_USER_MODEL, verbose_name='Пользователь'),
        ),
    ]
