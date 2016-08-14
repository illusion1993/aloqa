import os
import dj_database_url

from core.env_utils import parse_emails

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('DJANGO_SECRET')

# Parse database configuration from $DATABASE_URL
DATABASES = {
    'default': dj_database_url.config()
}

# Logging and error reporting
ADMINS = parse_emails(os.environ.get('DJANGO_ADMINS'))
MANAGERS = parse_emails(os.environ.get('DJANGO_MANAGERS'))

# Mail
FROM_MAIL = os.environ.get('DJANGO_FROM_MAIL')

if 'SENDGRID_USERNAME' in os.environ:
    EMAIL_HOST_USER = os.environ.get('SENDGRID_USERNAME')
    EMAIL_HOST = 'smtp.sendgrid.net'
    EMAIL_PORT = 587
    EMAIL_USE_TLS = True
    EMAIL_HOST_PASSWORD = os.environ.get('SENDGRID_PASSWORD')
else:
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
