import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import ApiService from '../utils/api';

// Load your publishable key from environment or config
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_publishable_key_here');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPaymentProcessing(true);
    setErrorMessage('');
    setPaymentSucceeded(false);

    if (!stripe || !elements) {
      setErrorMessage('Stripe has not loaded yet.');
      setPaymentProcessing(false);
      return;
    }

    try {
      // Call backend to create payment intent using the API service
      const paymentIntentResponse = await ApiService.createPaymentIntent(20); // amount in dollars

      if (paymentIntentResponse.error) {
        setErrorMessage(paymentIntentResponse.error);
        setPaymentProcessing(false);
        return;
      }

      const clientSecret = paymentIntentResponse.clientSecret;

      // Confirm card payment using Stripe.js
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        }
      });

      if (result.error) {
        setErrorMessage(result.error.message);
        setPaymentProcessing(false);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          setPaymentSucceeded(true);
          setPaymentProcessing(false);
        }
      }
    } catch (error) {
      setErrorMessage(error.message || 'Payment failed. Please try again.');
      setPaymentProcessing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Payment Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border border-gray-300 rounded-md p-3">
          <CardElement 
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={!stripe || paymentProcessing}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {paymentProcessing ? 'Processing...' : 'Pay $20'}
        </button>
        
        {errorMessage && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
            {errorMessage}
          </div>
        )}
        
        {paymentSucceeded && (
          <div className="text-green-600 text-sm bg-green-50 p-3 rounded-md">
            Payment succeeded! Your order has been confirmed.
          </div>
        )}
      </form>
    </div>
  );
};

const StripePayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripePayment;
