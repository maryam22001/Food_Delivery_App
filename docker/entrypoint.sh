#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting Food Delivery App..."

# Wait for database to be ready (if using external database)
if [ -n "$DATABASE_URL" ]; then
    echo "⏳ Waiting for database to be ready..."
    python manage.py wait_for_db --timeout=30
fi

# Run database migrations
echo "🗄️ Running database migrations..."
python manage.py migrate --noinput

# Collect static files
echo "📦 Collecting static files..."
python manage.py collectstatic --noinput

# Create superuser if environment variables are set
if [ -n "$DJANGO_SUPERUSER_EMAIL" ] && [ -n "$DJANGO_SUPERUSER_PASSWORD" ]; then
    echo "👤 Creating superuser..."
    python manage.py createsuperuser --noinput || true
fi

# Start supervisor (which manages nginx and django)
echo "🔄 Starting services..."
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf 