from django.urls import path
from .views import *

urlpatterns = [
    path('', BookListView.as_view()),
    path('category/<category_id>', BookListCategoryView.as_view()),
    path('<post_slug>', PostDetailView.as_view()),
    path('search/<str:search_term>', SearchBookView.as_view()),
]