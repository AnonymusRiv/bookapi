from django.urls import path
from .views import *

urlpatterns = [
    path('', BookListView.as_view()),
    path('category/<category_id>', BookListCategoryView.as_view()),
    path('<post_slug>', PostDetailView.as_view()),
    path('search/<str:search_term>', SearchBookView.as_view()),
    path('addbook/', AddBook.as_view()),
    path('modifybook/', ModifyBook.as_view()),
    path('deletebook/', DeleteBook.as_view()),
    path('register/', RegisterUser.as_view()),
    path('signin/', SignInUser.as_view()),
    path('logout/', LogOut.as_view()),
]

"""
    path('modifyuser/<user>', ModifyUser.as_view()),    # Este es para el usuario administrador
    path('deleteuser/', DeleteUser.as_view()),          # Este es para el usuario administrador y el usuario registrado
    path('showprofile/', ShowProfile.as_view()),        # Este es para el usuario registrado
    path('modifyprofile/', ModifyProfile.as_view()),    # Este es para el usuario registrado
    """
