# Generated by Django 3.2.5 on 2021-07-08 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wishlists', '0002_remove_wishlist_screenshot'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='wishlist',
            name='description',
        ),
        migrations.AddField(
            model_name='wishlist',
            name='platform',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
