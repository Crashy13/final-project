# Generated by Django 3.2.5 on 2021-07-14 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_alter_profile_friends'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=models.ImageField(blank=True, upload_to='profiles/'),
        ),
        migrations.DeleteModel(
            name='FriendRequest',
        ),
    ]
