#!/bin/bash

# Food Delivery App - Vercel Serverless Deployment Script
# This script deploys the Django backend and React frontend to Vercel

set -e

echo "🚀 Starting Vercel serverless deployment..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed. Installing..."
    npm install -g vercel
fi

# Check if required environment variables are set
required_vars=("DATABASE_URL" "STRIPE_SECRET_KEY" "STRIPE_PUBLISHABLE_KEY" "SECRET_KEY")
for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        echo "❌ Error: $var environment variable is not set"
        exit 1
    fi
done

echo "✅ Environment variables check passed"

# Install Python dependencies
echo "📦 Installing Python dependencies..."
pip install -r requirements.txt

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Build frontend
echo "🏗️ Building frontend..."
cd frontend
npm run build
cd ..

# Deploy to Vercel
echo "☁️ Deploying to Vercel..."
vercel --prod

echo "✅ Deployment completed successfully!"
echo "🌐 Your app is now live at the URL shown above"
echo "📝 Don't forget to update your Stripe webhook URL with the new Vercel URL" 