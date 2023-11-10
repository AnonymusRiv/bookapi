from django.db import models
import uuid
from apps.book.models import Post
from django.contrib.auth.models import User

# Create your models here.
class Lend(models.Model):

    lend_uuid = models.UUIDField(default=uuid.uuid4, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Post, on_delete=models.CASCADE)
    lend_date = models.DateField()
    expire_date = models.DateField()

    def __str__(self):
        return self.book
