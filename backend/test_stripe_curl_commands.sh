#!/bin/bash

# Replace with your backend URL and auth token if needed
BASE_URL="http://localhost:8000/api"
AUTH_TOKEN="your_auth_token_here"

echo "Testing create-payment-intent endpoint..."

curl -X POST "$BASE_URL/create-payment-intent" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Token $AUTH_TOKEN" \\
  -d '{"amount": 20}' \

echo -e "\n\nTesting stripe-webhook endpoint (simulate webhook event)..."

# Sample payload for payment_intent.succeeded event (simplified)
WEBHOOK_PAYLOAD='{
  "id": "evt_test_webhook",
  "object": "event",
  "type": "payment_intent.succeeded",
  "data": {
    "object": {
      "id": "pi_test_intent",
      "object": "payment_intent",
      "amount": 2000,
      "currency": "usd",
      "status": "succeeded"
    }
  }
}'

curl -X POST "$BASE_URL/stripe-webhook" \\
  -H "Content-Type: application/json" \\
  -d "$WEBHOOK_PAYLOAD"

echo -e "\nDone."
