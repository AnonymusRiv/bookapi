from .models import *
from rest_framework import serializers

class LendSerializer(serializers.ModelSerializer):

    class Meta:
        model=Lend
        fields=[
            'lend_uuid',
            'user',
            'book',
            'lend_date',
            'expire_date',
        ]