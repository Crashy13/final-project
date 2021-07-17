# Generated by Django 3.2.5 on 2021-07-17 13:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0010_auto_20210716_2312'),
        ('accounts', '0008_remove_profile_reviews'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='reviews',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='reviews.review'),
        ),
    ]
