from django.shortcuts import render, get_object_or_404, redirect
from apps.category.models import Category

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions

from django.db.models.query_utils import Q
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate


from django.db import IntegrityError

from .models import Post
from .serializers import PostSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination
import json

# Create your views here.
class BookListView(APIView):
    def get(self, request, format=None):
        if Post.postobjects.all().exists():

            posts = Post.postobjects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})

        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
class BookListCategoryView(APIView):
    def get(self, request, category_id, format=None):
        if Post.postobjects.all().exists():

            category = Category.objects.get(id = category_id)

            posts = Post.postobjects.all().filter(category=category)

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})

        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class PostDetailView(APIView):
    def get(self, request, post_slug, format=None):
        post = get_object_or_404(Post, slug=post_slug)
        serializer = PostSerializer(post)
        return Response({'post': serializer.data}, status=status.HTTP_200_OK)

class SearchBookView(APIView):
    def get(self, request, search_term):
        matches = Post.postobjects.filter(
            Q(title__icontains = search_term) |
            Q(description__icontains = search_term) |
            Q(category__name__icontains = search_term)
        )

        paginator = MediumSetPagination()
        results = paginator.paginate_queryset(matches, request)
        serializer = PostSerializer(results, many=True)

        return Response({'filtered_posts': serializer.data}, status=status.HTTP_200_OK)

class AddBook(APIView):
    def post(self, request, format=None):
        body = json.loads(request.body)

        title = body.get('title')
        description = body.get('description')
        author = body.get('author')
        category_id = body.get('category')
        published = body.get('published')
        thumbnail = body.get('thumbnail')

        try:
            category = Category.objects.get(id=category_id)
        except Category.DoesNotExist:
            return Response({'error': 'Invalid category'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            Post.objects.create(
                title = title,
                slug = title,
                thumbnail = thumbnail,
                description = description,
                author = author,
                category = category,
                published = published,
            )
            return Response({'post': 'Post created successfully'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class ModifyBook(APIView):
    def post(self, request, format=None):
        body = json.loads(request.body)

        title = body.get('title')
        description = body.get('description')
        author = body.get('author')
        category_id = body.get('category')
        published = body.get('published')
        thumbnail = body.get('thumbnail')

        try:
            category = Category.objects.get(id=category_id)
        except Category.DoesNotExist:
            return Response({'error': 'Invalid category'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            Post.objects.update(
                title = title,
                slug = title,
                thumbnail = thumbnail,
                description = description,
                author = author,
                category = category,
                published = published,
            )
            return Response({'post': 'Post created successfully'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)



class DeleteBook(APIView):
    def post(self, request, format=None):
        body = json.loads(request.body)

        book_uuid = body.get('book_uuid')

        try:
            Post.objects.delete(
                book_uuid = book_uuid,
            )
            return Response({'post': 'Post delete successfuly'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class RegisterUser(APIView):
    def post(self, request, format=None):
        body = json.loads(request.body)

        email = body.get('email')
        username = body.get('username')
        first_name = body.get('firstname')
        last_name = body.get('lastname')
        password = body.get('password')

        if not email or not username or not password:
            return Response({'error': 'Email, username, and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        # Verificar si el correo electrónico ya está en uso
        if User.objects.filter(email=email).exists():
            return Response({'error': 'Email is already in use.'}, status=status.HTTP_400_BAD_REQUEST)

        # Crear el usuario
        try:
            user = User.objects.create_user(email=email, username=username, first_name=first_name, last_name=last_name, password=password)
        except IntegrityError:
            return Response({'error': 'Username is already in use.'}, status=status.HTTP_400_BAD_REQUEST)

        if user is not None:
            # Autenticar al usuario
            auth_user = authenticate(username=username, password=password)
            if auth_user:
                login(request, auth_user)
                return Response({'user_create': auth_user.id}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Authentication failed.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response({'error': 'Failed to create user.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class SignInUser(APIView):
    def post(self, request, format=None):
        body = json.loads(request.body)

        username = body.get('username')
        password = body.get('password')

        auth_user = authenticate(username=username, password=password)
        if auth_user:
            login(request, auth_user)
            return Response({'user_signin': auth_user.id, 'username': auth_user.username, 'is_superuser': auth_user.is_superuser}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Authentication failed.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class LogOut(APIView):
    def post(self, request, format=None):
        if request.user.is_authenticated:
            if logout(request):
                print(request.user)
                return Response({'user_logout': 'user logout correctly'}, status=status.HTTP_200_OK)
        else:
            return Response({'no user': 'no user founud'}, status=status.HTTP_202_ACCEPTED)
"""
class ModifyUser():
    def post(self, request, format=None):
        body = json.loads(request.body)

        email = body.get('email')
        username = body.get('username')
        first_name = body.get('firstname')
        last_name = body.get('lastname')
        password = body.get('password')

        # Verificar si el correo electrónico ya está en uso
        if User.objects.filter(email=email).exists:
            # Modifica el usuario
            try:
                user = User.objects.update(email=email, username=username, first_name=first_name, last_name=last_name, password=password)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

            if user is not None:
                # Autenticar al usuario
                auth_user = authenticate(username=username, password=password)
                if auth_user:
                    login(request, auth_user)
                    return Response({'user_create': auth_user.id}, status=status.HTTP_200_OK)
                else:
                    return Response({'error': 'Authentication failed.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            else:
                return Response({'error': 'Failed to create user.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        return Response({'error': 'Email failed.'}, status=status.HTTP_400_BAD_REQUEST)


class DeleteUser():
    def post(self, request, format=None):
        body = json.loads(request.body)

        email = body.get('email')

        try:



class ShowProfile():
    def post(self, request, format=None):


class ModifyProfile():
    def post(self, request, format=None):
"""