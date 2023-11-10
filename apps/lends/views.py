from apps.lends.serializers import LendSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Lend, Post
from rest_framework.pagination import PageNumberPagination
from django.contrib.auth import get_user_model

import json
from datetime import datetime, timedelta


class LendsView(APIView):
    def get(self, request, format=None):
        if Lend.objects.all().exists():
            lends = Lend.objects.all()

            result = []

            for lend in lends:
                item = {}
                item['lend_uuid'] = lend.lend_uuid
                item['user'] = lend.user
                item['book'] = lend.book
                item['lend_date'] = lend.lend_date
                item['expire_date'] = lend.expire_date
                result.append(item)

            return Response({'Lends': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No lends found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class AddLend(APIView):
    def post(self, request, format=None):
        body = json.loads(request.body)

        username = body.get('username')
        book_uuid = body.get('uuid')

        lend_date = datetime.now().date()
        expire_date = lend_date + timedelta(days=30)

        try:
            book = Post.objects.get(book_uuid=book_uuid)
            User = get_user_model()

            # Obtener el usuario utilizando el nombre de usuario
            user = User.objects.get(username=username)

            Lend.objects.create(
                user = user,
                book = book,
                lend_date = lend_date,
                expire_date = expire_date,
            )

            book.available = False
            book.save()

            return Response({'lend': 'Lend created successfully'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)