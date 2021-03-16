from rest_framework import serializers
from lgback.models import Picture, Set, Session, Theme, SessionInstance, PictureGameResult
from django.contrib.auth.models import User


class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = ['id', 'src', 'word', 'pos', 'set', 'theme', 'owner']


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ['id', 'name', 'owner', 'private']


class ThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theme
        fields = ['id', 'name', 'owner']


class SessionInstanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SessionInstance
        fields = ['id', 'user', 'session', 'status']


class PictureGameResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = PictureGameResult
        fields = ['session_instance', 'set', 'picture', 'correct']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class SetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Set
        fields = ['id', 'name', 'max_size', 'theme', 'session', 'owner', 'repeatable']
