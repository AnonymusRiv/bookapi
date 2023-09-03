# Generated by Django 4.2.3 on 2023-09-01 09:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("book", "0003_remove_post_status"),
    ]

    operations = [
        migrations.AddField(
            model_name="post",
            name="status",
            field=models.CharField(
                choices=[("draft", "Draft"), ("published", "Published")],
                default="draft",
                max_length=10,
            ),
        ),
    ]
