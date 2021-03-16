from django.urls import path
from lgback import views


urlpatterns = [
    path('api/pictures/', views.PictureList.as_view()),
    path('api/picture/<pk>/', views.PictureDetail.as_view()),
    path('api/sets/', views.SetList.as_view()),
    path('api/set/<pk>/', views.SetDetail.as_view()),
    path('api/sessions/', views.SessionList.as_view()),
    path('api/session/<pk>/', views.SessionDetail.as_view()),
    path('api/themes/', views.ThemeList.as_view()),
    path('api/theme/<pk>/', views.ThemeDetail.as_view()),
    path('api/session-instances/', views.SessionInstanceList.as_view()),
    path('api/session-instance/<pk>/', views.SessionInstanceDetail.as_view()),
    path('api/picture-game-results/', views.PictureGameResultList.as_view()),
    path('api/picture-game-result/<pk>/', views.PictureGameResultDetail.as_view()),
    path('api/sessions/owner/<pk>/', views.SessionViewSet.as_view({'get': 'list'})),
    path('api/sessions/no-owner/', views.sessions_for_unauthenticated),
    path('api/session-id/<pk>/sets/', views.get_sets_of_session),
    path('api/session-id/<pk>/pictures/', views.get_picture_of_session),
    path('', views.index, name='index'),
]

handler404 = views.view_404
