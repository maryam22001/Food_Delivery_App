from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .models import Restaurant, Category, MenuItem, Order, UserProfile
from .serializers import (
    SignUpSerializer, SignInSerializer, UserProfileSerializer,
    RestaurantSerializer, CategorySerializer, MenuItemSerializer, OrderSerializer
)
import os
import stripe

stripe.api_key = os.getenv('STRIPE_SECRET_KEY')

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    serializer = SignUpSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'user': {
                'id': user.id,
                'name': f"{user.first_name} {user.last_name}".strip() or user.username,
                'email': user.email,
                'token': token.key
            }
        }, status=status.HTTP_201_CREATED)
    return Response({'message': 'Registration failed', 'errors': serializer.errors}, 
                   status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def signin(request):
    serializer = SignInSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'user': {
                'id': user.id,
                'name': f"{user.first_name} {user.last_name}".strip() or user.username,
                'email': user.email,
                'token': token.key
            }
        })
    return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def validate_token(request):
    return Response({
        'valid': True,
        'user': {
            'id': request.user.id,
            'name': f"{request.user.first_name} {request.user.last_name}".strip() or request.user.username,
            'email': request.user.email
        }
    })

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def signout(request):
    try:
        request.user.auth_token.delete()
    except:
        pass
    return Response({'message': 'Successfully signed out'})

class RestaurantListView(generics.ListAPIView):
<<<<<<< HEAD
    queryset = Restaurant.objects.filter(is_active=True)
    serializer_class = RestaurantSerializer
    permission_classes = [AllowAny]

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

class MenuItemListView(generics.ListAPIView):
    serializer_class = MenuItemSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        restaurant_id = self.kwargs.get('restaurant_id')
        return MenuItem.objects.filter(restaurant_id=restaurant_id, is_available=True)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    try:
        profile = UserProfile.objects.get(user=request.user)
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data)
    except UserProfile.DoesNotExist:
        return Response({'message': 'Profile not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_orders(request):
    orders = Order.objects.filter(user=request.user).order_by('-created_at')
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)

def test_checkout(request):
    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        line_items=[{
            'price_data': {
                'currency': 'usd',
                'product_data': {'name': 'Test Food Order'},
                'unit_amount': 2000,
            },
            'quantity': 1,
        }],
        mode='payment',
        success_url='http://localhost:5173/success',
        cancel_url='http://localhost:5173/cancel',
    )
=======
>>>>>>> 9bf9788 (Add user authentication and profile management: update API routes, models, and frontend components)
    return Response({'url': session.url})