# Generated by Django 3.2.5 on 2021-07-06 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0002_alter_review_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='rating',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
