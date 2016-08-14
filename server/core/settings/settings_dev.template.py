SECRET_KEY = '<SOMESECRETKEY>'

DATABASES = {
     'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': '<Database Name>',                      # Or path to database file if using sqlite3.
        'USER': '<Database User>',                      # Not used with sqlite3.
        'PASSWORD': '<Database Password>',                  # Not used with sqlite3.
        'HOST': 'localhost',                      # Set to empty string for localhost. Not used with sqlite3.
        'PORT': '5432',                      # Set to empty string for default. Not used with sqlite3.
    }
}

########## EMAIL CONFIGURATION
# SAMPLE CONFIGURATION FOR GMAIL SETUP
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_PORT = 587
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = '<Gmail Address>'
EMAIL_HOST_PASSWORD = '<Gmail Password>'
DEFAULT_FROM_EMAIL = 'Aloqa <abc@gmail.com>'
EMAIL_USE_TLS = True
########## END EMAIL CONFIGURATION

########## MANAGER CONFIGURATION
# See: https://docs.djangoproject.com/en/dev/ref/settings/#admins
ADMINS = (
    ('Your Name', 'your_email@example.com'),
)

MANAGERS = ADMINS
########## END MANAGER CONFIGURATION
