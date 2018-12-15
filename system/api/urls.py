from django.urls import include, path, re_path
from rest_auth.registration.views import RegisterView
from .views import ConfirmEmailView

urlpatterns = [
    path('users/', include('users.urls')),
    re_path(r'^rest-auth/registration/account-confirm-email/(?P<key>[-:\w]+)/$', ConfirmEmailView.as_view(), name='account_confirm_email'),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/', include('rest_auth.urls')),

]
