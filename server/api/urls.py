from django.conf.urls import url, include
from django.views.decorators.csrf import csrf_exempt

from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token

# from .views import UserViewSet

router = DefaultRouter()
# router.register(r'users', UserViewSet)

urlpatterns = router.urls

urlpatterns += [
    url(r'^login/$', csrf_exempt(obtain_auth_token)),
    url(r'^auth/', include('rest_auth.urls')),
    url(r'^auth/register/', include('rest_auth.registration.urls')),
    url(r'^account/', include('allauth.urls')),
]
