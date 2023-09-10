from django.db import models
import uuid

# Create your models here.
class Lends(models.Model):

    lend_uuid = models.UUIDField(default=uuid.uuid4, unique=True)
    user = models.EmailField(max_length=255)
    lend_date = models.DateField()
    expire_date = models.DateField()
