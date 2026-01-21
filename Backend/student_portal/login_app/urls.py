# login_app/urls.py
from django.urls import path
from .views import (
    RegisterAPIView, LoginAPIView,
    ForgotPasswordRequestAPIView, ForgotPasswordConfirmAPIView,
    FaceLoginAPIView, home
)

urlpatterns = [
    path('', home, name='home'),
    path('register/', RegisterAPIView.as_view(), name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('forgot-password/', ForgotPasswordRequestAPIView.as_view(), name='forgot_password'),
    path('forgot-password/confirm/', ForgotPasswordConfirmAPIView.as_view(), name='forgot_password_confirm'),
    path('face-login/', FaceLoginAPIView.as_view(), name='face_login'),
]
