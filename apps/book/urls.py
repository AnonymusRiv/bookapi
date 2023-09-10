from django.urls import path
from .views import *

urlpatterns = [
    path('', BookListView.as_view()),
    path('category/<category_id>', BookListCategoryView.as_view()),
    path('<post_slug>', PostDetailView.as_view()),
    path('search/<str:search_term>', SearchBookView.as_view()),
    path('addbook/', AddBook.as_view()),
    path('register/', RegisterUser.as_view()),
    path('signin/', SignInUser.as_view()),
    path('isuser/', IsUser.as_view()),
]