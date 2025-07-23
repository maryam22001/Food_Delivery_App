from django.urls import path
from .views import test_checkout
urlpatterns = [path('test/', test_checkout, name='test_checkout')]