# Generated by Django 3.2.5 on 2021-07-12 14:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('wishlists', '0003_auto_20210708_1914'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='wishlist',
            name='platform',
        ),
        migrations.AddField(
            model_name='wishlist',
            name='background_image',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='wishlist',
            name='is_owned',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.AddField(
            model_name='wishlist',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='wishlist',
            name='name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
