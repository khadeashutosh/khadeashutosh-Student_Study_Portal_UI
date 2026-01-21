# login_app/serializers.py
from rest_framework import serializers
from .models import LoginUser

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = LoginUser
        fields = ['username', 'email', 'password', 'faceIdKey']

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = LoginUser.objects.create(**validated_data)
        if password:
            user.set_password(password)
            user.save()
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)


class ForgotPasswordRequestSerializer(serializers.Serializer):
    username = serializers.CharField()


class ForgotPasswordConfirmSerializer(serializers.Serializer):
    username = serializers.CharField()
    otp = serializers.CharField()
    newPassword = serializers.CharField()


class FaceLoginSerializer(serializers.Serializer):
    faceIdKey = serializers.CharField()
