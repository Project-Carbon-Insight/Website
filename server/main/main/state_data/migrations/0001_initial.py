# Generated by Django 5.1 on 2024-08-30 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Statewise_dailyusage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('States', models.CharField(max_length=40)),
                ('Regions', models.CharField(max_length=50)),
                ('latitude', models.DecimalField(decimal_places=8, max_digits=12)),
                ('longitude', models.DecimalField(decimal_places=8, max_digits=12)),
                ('Dates', models.CharField(max_length=25)),
                ('Usage', models.DecimalField(decimal_places=8, max_digits=12)),
            ],
        ),
    ]
