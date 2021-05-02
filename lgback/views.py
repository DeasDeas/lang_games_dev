from rest_framework import generics
from rest_framework.response import Response
from lgback.models import PictureItem, Set, Item
from lgback.serializers import PictureItemSerializer, SetSerializer, ItemSerializer, ThemeSerializer
from lgback.permissions import AuthorOnly, IsAdminUserCustom as IsAdminUser
from django.shortcuts import render, redirect
from lgback.filters import ItemFilter, SetFilter, PictureItemFilter
from rest_framework.filters import OrderingFilter
from django.db.models import Q
from django.contrib.auth.models import User
from rest_framework_filters.backends import RestFrameworkFilterBackend


class ListCreateAPIViewMixin(generics.ListCreateAPIView):
    def post(self, request, *args, **kwargs):
        response = super().post(request)
        queryset = self.get_queryset()
        queryset.filter(id=response.data['id']).update(owner=self.request.user.id)
        return Response(self.serializer_class(queryset.get(id=response.data['id'])).data)


class PictureItemList(ListCreateAPIViewMixin):
    queryset = PictureItem.objects.all()
    serializer_class = PictureItemSerializer

    filter_class = PictureItemFilter
    filter_backends = (OrderingFilter, RestFrameworkFilterBackend)
    ordering_fields = ('pos_picture', 'pos_word')

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        user = self.request.user
        is_staff = User.objects.all().get(id=user.id).is_staff
        if not is_staff:
            queryset = queryset.filter(Q(set__item__owner=user.id) | Q(set__item__private=False))
        serializer = PictureItemSerializer(queryset, many=True)
        return Response(serializer.data)


class PictureItemDetail(generics.RetrieveUpdateDestroyAPIView, AuthorOnly):
    permission_classes = [IsAdminUser | AuthorOnly]
    queryset = PictureItem.objects.all()
    serializer_class = PictureItemSerializer


class SetList(ListCreateAPIViewMixin):
    queryset = Set.objects.all()
    serializer_class = SetSerializer

    filter_class = SetFilter
    filter_backends = (OrderingFilter, RestFrameworkFilterBackend)
    ordering_fields = ('date_created', 'date_redacted')

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        user = self.request.user
        is_staff = User.objects.all().get(id=user.id).is_staff
        if not is_staff:
            queryset = queryset.filter(Q(item__owner=user.id) | Q(item__private=False))
        serializer = SetSerializer(queryset, many=True)
        return Response(serializer.data)


class SetDetail(generics.RetrieveUpdateDestroyAPIView, AuthorOnly):
    permission_classes = [IsAdminUser | AuthorOnly]

    queryset = Set.objects.all()
    serializer_class = SetSerializer


class ItemList(ListCreateAPIViewMixin):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    filter_class = ItemFilter
    filter_backends = (OrderingFilter, RestFrameworkFilterBackend)
    ordering_fields = ('date_created', 'date_redacted')

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        user = self.request.user
        is_staff = User.objects.all().get(id=user.id).is_staff
        if not is_staff:
            queryset = queryset.filter(Q(owner=user.id) | Q(private=False))
        serializer = ItemSerializer(queryset, many=True)
        return Response(serializer.data)


class ItemDetail(generics.RetrieveUpdateDestroyAPIView, AuthorOnly):
    permission_classes = [IsAdminUser | AuthorOnly]

    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class ThemeList(ListCreateAPIViewMixin):
    queryset = Item.objects.all()
    serializer_class = ThemeSerializer

    filter_backends = (OrderingFilter, )
    ordering_fields = ('date_created', 'date_redacted')


class ThemeDetail(generics.RetrieveUpdateDestroyAPIView, AuthorOnly):
    permission_classes = [IsAdminUser | AuthorOnly]

    queryset = Item.objects.all()
    serializer_class = ThemeSerializer


def index(request):
    return render(request, "build/index.html")


def view_404(request, *args, **kwargs):
    return redirect("/")
