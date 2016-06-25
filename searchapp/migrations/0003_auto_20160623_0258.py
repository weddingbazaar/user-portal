# -*- coding: utf-8 -*-
# Generated by Django 1.10a1 on 2016-06-22 21:28
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('searchapp', '0002_vendorinfo_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('boutique', models.BooleanField()),
                ('fashiondesigner', models.BooleanField()),
                ('groomwear', models.BooleanField()),
                ('lehengasaree', models.BooleanField()),
                ('lingerie', models.BooleanField()),
                ('jewellery', models.BooleanField()),
                ('astrologer', models.BooleanField()),
                ('pundit', models.BooleanField()),
                ('temple', models.BooleanField()),
                ('beautyparlour', models.BooleanField()),
                ('diet', models.BooleanField()),
                ('gym', models.BooleanField()),
                ('makeup', models.BooleanField()),
                ('mehendi', models.BooleanField()),
                ('nailartist', models.BooleanField()),
                ('spa', models.BooleanField()),
                ('eventmanagement', models.BooleanField()),
                ('liveperformer', models.BooleanField()),
                ('weddingplanner', models.BooleanField()),
                ('luxurycar', models.BooleanField()),
                ('taxi', models.BooleanField()),
                ('tenthouse', models.BooleanField()),
                ('banquets', models.BooleanField()),
                ('farmhouse', models.BooleanField()),
                ('hotel', models.BooleanField()),
                ('travelagent', models.BooleanField()),
                ('band', models.BooleanField()),
                ('choreo', models.BooleanField()),
                ('disco', models.BooleanField()),
                ('dj', models.BooleanField()),
                ('singer', models.BooleanField()),
                ('caterers', models.BooleanField()),
                ('confectionery', models.BooleanField()),
                ('fireworks', models.BooleanField()),
                ('invitationcard', models.BooleanField()),
                ('florists', models.BooleanField()),
                ('loan', models.BooleanField()),
                ('maidservent', models.BooleanField()),
                ('photographer', models.BooleanField()),
                ('gift', models.BooleanField()),
                ('accessories', models.BooleanField()),
                ('detective', models.BooleanField()),
                ('matrimonialagent', models.BooleanField()),
                ('cookinginstructor', models.BooleanField()),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='vendorinfo',
            name='category',
        ),
        migrations.AddField(
            model_name='category',
            name='vendor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='searchapp.VendorInfo'),
        ),
    ]