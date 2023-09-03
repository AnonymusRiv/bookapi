from django.db import models
from django.db.models.query import QuerySet
import uuid
from apps.category.models import Category

# Create your models here.
def book_directory_path(instance, filename):
    return 'book/{0}/{1}'.format(instance.title, filename)

class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')
    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    book_uuid = models.UUIDField(default=uuid.uuid4, unique=True)
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    thumbnail = models.ImageField(upload_to=book_directory_path)
    description = models.TextField()
    author = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    published = models.DateField()
    status = models.CharField(max_length=10, choices=options, default='draft')

    objects = models.Manager()
    postobjects = PostObjects()

    class Meta:
        ordering = ('-title',)

    def __str__(self):
        return self.title

    def get_thumbnail(self):
        if self.thumbnail:
            return self.thumbnail.url
        return ''