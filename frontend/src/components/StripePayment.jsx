import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

// Load your publishable key from environment or config
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_publishable_key_here');

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

    // Call backend to create payment intent
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include auth token if needed
      },
      body: JSON.stringify({ amount: 20 }) // amount in dollars
    });

    const paymentIntentResponse = await response.json();

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || paymentProcessing}>
        {paymentProcessing ? 'Processing...' : 'Pay $20'}
      </button>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {paymentSucceeded && <div style={{ color: 'green' }}>Payment succeeded!</div>}
    </form>
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
