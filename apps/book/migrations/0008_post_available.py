# Generated by Django 4.2.6 on 2023-11-09 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("book", "0007_alter_post_slug"),
    ]

    operations = [
        migrations.AddField(
            model_name="post",
            name="available",
            field=models.BooleanField(default=True),
        ),
    ]