# login_app/views.py
import random
import string
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

from .models import LoginUser, ForgotPasswordOTP
from .serializers import (
    RegisterSerializer, LoginSerializer,
    ForgotPasswordRequestSerializer, ForgotPasswordConfirmSerializer,
    FaceLoginSerializer
)

def home(request):
    return HttpResponse("Welcome on My Project")


def generateOtp():
    return "".join(random.choices(string.digits, k=6))


def generateTokens(user):
    refresh = RefreshToken.for_user(user)
    return {
        "access": str(refresh.access_token),
        "refresh": str(refresh)
    }


class RegisterAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        if LoginUser.objects.filter(username=data["username"]).exists():
            return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)
        if LoginUser.objects.filter(email=data["email"]).exists():
            return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)

        user = serializer.save()
        return Response({"message": "User registered successfully", "user": user.username}, status=status.HTTP_201_CREATED)


class LoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data["username"]
        password = serializer.validated_data["password"]

        try:
            user = LoginUser.objects.get(username=username)
        except LoginUser.DoesNotExist:
            return Response({"error": "Invalid username"}, status=status.HTTP_400_BAD_REQUEST)

        if not user.check_password(password):
            return Response({"error": "Invalid password"}, status=status.HTTP_400_BAD_REQUEST)

        tokens = generateTokens(user)
        return Response({"message": "Login successful", "user": user.username, "tokens": tokens}, status=status.HTTP_200_OK)


class ForgotPasswordRequestAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = ForgotPasswordRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data["username"]
        try:
            user = LoginUser.objects.get(username=username)
        except LoginUser.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        otp = generateOtp()
        ForgotPasswordOTP.objects.create(user=user, otp=otp)
        # In production: send OTP via email/SMS. Here return for debug.
        return Response({"message": "OTP sent", "otp_debug": otp}, status=status.HTTP_200_OK)


class ForgotPasswordConfirmAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = ForgotPasswordConfirmSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data["username"]
        otp = serializer.validated_data["otp"]
        newPassword = serializer.validated_data["newPassword"]

        try:
            user = LoginUser.objects.get(username=username)
        except LoginUser.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        try:
            otpEntry = ForgotPasswordOTP.objects.get(user=user, otp=otp, isUsed=False)
        except ForgotPasswordOTP.DoesNotExist:
            return Response({"error": "Invalid or expired OTP"}, status=status.HTTP_400_BAD_REQUEST)

        user.set_password(newPassword)
        user.save()

        otpEntry.isUsed = True
        otpEntry.save()

        return Response({"message": "Password reset successful"}, status=status.HTTP_200_OK)


class FaceLoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = FaceLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        faceIdKey = serializer.validated_data["faceIdKey"]

        try:
            user = LoginUser.objects.get(faceIdKey=faceIdKey)
        except LoginUser.DoesNotExist:
            return Response({"error": "Face not  recognized"}, status=status.HTTP_404_NOT_FOUND)
