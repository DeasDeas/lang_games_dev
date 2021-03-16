from django.views.decorators.csrf import requires_csrf_token
from django.views.defaults import ERROR_404_TEMPLATE_NAME
from rest_framework import generics, viewsets
from rest_framework.decorators import permission_classes, api_view

from lgback.models import Picture, Set, Session, SessionInstance, PictureGameResult
from lgback.serializers import PictureSerializer, SetSerializer, SessionSerializer, ThemeSerializer, \
    SessionInstanceSerializer, PictureGameResultSerializer
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.shortcuts import render, redirect


def view_404(request, *args, **kwargs):
    # make a redirect to homepage
    # you can use the name of url or just the plain link
    return redirect("/") # or redirect('name-of-index-url')


def index(request):
    return render(request, "build/index.html")


class PictureList(generics.ListCreateAPIView):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer


class PictureDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer


class SetList(generics.ListCreateAPIView):
    queryset = Set.objects.all()
    serializer_class = SetSerializer


class SetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Set.objects.all()
    serializer_class = SetSerializer


class SessionViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

    def list(self, request, pk=None, *args, **kwarg):
        queryset = self.queryset.filter(owner=pk)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def sessions_for_unauthenticated(request, *args, **kwarg):
    queryset = Session.objects.all().filter(owner__isnull=True)
    serializer = SessionSerializer(queryset, many=True)

    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_sets_of_session(request, pk=None, *args, **kwarg):
    user_id = request.user.id

    lgback_session = Session.objects.all().filter(id=pk).values()
    is_session_private = lgback_session.get()["private"]
    session_owner = lgback_session.get()["owner_id"]

    queryset = Set.objects.all().filter(session=pk)
    serializer = SetSerializer(queryset, many=True)

    if is_session_private:
        return Response(serializer.data) if session_owner == user_id else Response(status=401)
    else:
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_picture_of_session(request, pk=None, *args, **kwarg):
    user_id = request.user.id

    lgback_session = Session.objects.all().filter(id=pk).values()
    is_session_private = lgback_session.get()["private"]
    session_owner = lgback_session.get()["owner_id"]

    queryset = Picture.objects.select_related('set__session').filter(set_id__session=pk)
    serializer = PictureSerializer(queryset, many=True)

    if is_session_private:
        return Response(serializer.data) if session_owner == user_id else Response(status=401)
    else:
        return Response(serializer.data)


@permission_classes([AllowAny])
class SessionList(generics.ListCreateAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer


@permission_classes([AllowAny])
class SessionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer


class ThemeList(generics.ListCreateAPIView):
    queryset = Session.objects.all()
    serializer_class = ThemeSerializer


class ThemeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Session.objects.all()
    serializer_class = ThemeSerializer


class SessionInstanceList(generics.ListCreateAPIView):
    queryset = SessionInstance.objects.all()
    serializer_class = SessionInstanceSerializer


class SessionInstanceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SessionInstance.objects.all()
    serializer_class = SessionInstanceSerializer


class PictureGameResultList(generics.ListCreateAPIView):
    queryset = PictureGameResult.objects.all()
    serializer_class = PictureGameResultSerializer


class PictureGameResultDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PictureGameResult.objects.all()
    serializer_class = PictureGameResultSerializer
