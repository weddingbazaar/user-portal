# -*- coding: utf-8 -*-
# Generated by Django 1.10a1 on 2016-07-29 19:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('searchapp', '0011_vendorinfo_city'),
    ]

    operations = [
        migrations.AddField(
            model_name='vendorinfo',
            name='slug',
            field=models.SlugField(default='slug', max_length=150),
        ),
        migrations.AlterField(
            model_name='vendorinfo',
            name='business_name',
            field=models.CharField(default='Test', max_length=100),
        ),
    ]
