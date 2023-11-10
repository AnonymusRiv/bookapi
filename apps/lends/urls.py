from django.urls import path
from .views import *

urlpatterns = [
    path('', LendsView.as_view()),
    path('addlend/', AddLend.as_view()),
]
