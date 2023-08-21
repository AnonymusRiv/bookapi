from rest_framework import serializers
from .models import Post
from apps.category.serializers import CategorySerializer

class PostSerializer(serializers.ModelSerializer):
    thumbnail = serializers.CharField(source = 'get_thumbnail')
    category = CategorySerializer()

    class Meta:
        model=Post
        fields=[
            'book_uuid',
            'title',
            'slug',
            'thumbnail',
            'description',
            'category',
            'author',
            'published',
            'status',
        ]