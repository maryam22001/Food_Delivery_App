"""
WSGI config for backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/wsgi/
"""

import os
import sys
from django.core.wsgi import get_wsgi_application

# Add the project directory to the Python path
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

application = get_wsgi_application()

# Vercel serverless function handler
def handler(request, context):
    """
    Vercel serverless function handler
    """
    from django.core.management import execute_from_command_line
    from django.db import connection
    
    # Run migrations on cold start only
    if not hasattr(handler, '_migrated'):
        try:
            print("Running migrations on cold start...")
            execute_from_command_line(['manage.py', 'migrate', '--run-syncdb'])
            handler._migrated = True
            print("Migrations completed successfully")
        except Exception as e:
            print(f"Migration error: {e}")
    
    # Close database connections to prevent connection pool exhaustion
    try:
        connection.close()
    except:
        pass
    
    # Handle the request using Django
    return application(request, context)
