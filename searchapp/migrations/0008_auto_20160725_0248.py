# -*- coding: utf-8 -*-
# Generated by Django 1.10a1 on 2016-07-24 21:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('searchapp', '0007_category_city'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='city',
            field=models.CharField(default='delhi', max_length=64, verbose_name='city'),
        ),
    ]
