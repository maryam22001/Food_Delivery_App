from django.shortcuts import render

# Create your views here.
import os, stripe
from django.http import JsonResponse

stripe.api_key = os.getenv('STRIPE_SECRET_KEY')

def test_checkout(request):
    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        line_items=[{
            'price_data': {
                'currency': 'egp',
                'product_data': {'name': 'Test Shawarma'},
                'unit_amount': 2000,
            },
            'quantity': 1,
        }],
        mode='payment',
        success_url='https://example.com/success',
        cancel_url='https://example.com/cancel',
    )
    return JsonResponse({'url': session.url})