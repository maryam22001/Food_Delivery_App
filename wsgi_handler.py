import os
import sys
from django.core.wsgi import get_wsgi_application

# Add the project directory to the Python path
sys.path.insert(0, os.path.dirname(__file__))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

application = get_wsgi_application()

def handler(event, context):
    """
    AWS Lambda handler function
    """
    from django.core.management import execute_from_command_line
    
    # Run migrations on cold start
    if not hasattr(handler, '_migrated'):
        try:
            execute_from_command_line(['manage.py', 'migrate', '--run-syncdb'])
            handler._migrated = True
        except Exception as e:
            print(f"Migration error: {e}")
    
    # Handle the request
    from awsgi import response
    return response(application, event, context)