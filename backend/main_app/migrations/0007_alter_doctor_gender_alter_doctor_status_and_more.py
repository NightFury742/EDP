# Generated by Django 5.1.6 on 2025-05-04 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0006_bed_room_ward_remove_allotment_room_bed_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='gender',
            field=models.CharField(blank=True, choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')], max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='status',
            field=models.CharField(choices=[('active', 'Active'), ('on-leave', 'On-Leave'), ('retired', 'Retired'), ('inactive', 'Inactive')], default='active', max_length=20),
        ),
        migrations.AlterField(
            model_name='patient',
            name='gender',
            field=models.CharField(blank=True, choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')], max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='patient',
            name='status',
            field=models.CharField(choices=[('active', 'Active'), ('deceased', 'Deceased'), ('discharged', 'Discharged'), ('inactive', 'Inactive')], default='active', max_length=20),
        ),
    ]
