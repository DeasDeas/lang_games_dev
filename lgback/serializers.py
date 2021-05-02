from rest_framework import serializers
from lgback.models import PictureItem, Set, Item, Theme
from django.contrib.auth.models import User


class PictureItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PictureItem
        fields = "__all__"
        read_only_fields = ['id', 'owner', 'date_created', 'date_redacted']


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = "__all__"
        read_only_fields = ['id', 'owner', 'date_created', 'date_redacted']


class ThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theme
        fields = "__all__"
        read_only_fields = ['id', 'owner', 'date_created', 'date_redacted']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class SetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Set
        fields = "__all__"
        read_only_fields = ['id', 'owner', 'date_created', 'date_redacted']

