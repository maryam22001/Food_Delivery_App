from django.urls import path
from . import views

urlpatterns = [
    # Authentication
    path('auth/signup', views.signup, name='signup'),
    path('auth/signin', views.signin, name='signin'),
    path('auth/validate', views.validate_token, name='validate_token'),
    path('auth/signout', views.signout, name='signout'),
    
    # User
    path('user/profile', views.user_profile, name='user_profile'),
    path('user/orders', views.user_orders, name='user_orders'),
    
    # Restaurants and Menu
    path('restaurants', views.RestaurantListView.as_view(), name='restaurants'),
    path('categories', views.CategoryListView.as_view(), name='categories'),
    path('restaurants/<int:restaurant_id>/menu', views.MenuItemListView.as_view(), name='menu_items'),
    
    # Payments
    path('test-checkout', views.test_checkout, name='test_checkout'),
]