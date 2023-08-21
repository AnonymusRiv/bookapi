from django.urls import path
from .views import *

urlpatterns = [
    path('', BookListView.as_view()),
    path('<post_slug>/', PostDetailView.as_view())
]