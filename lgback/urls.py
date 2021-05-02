from django.urls import path
from lgback import views


urlpatterns = [
    path('api/pictures/', views.PictureItemList.as_view()),
    path('api/pictures/<pk>/', views.PictureItemDetail.as_view()),
    path('api/sets/', views.SetList.as_view()),
    path('api/sets/<pk>/', views.SetDetail.as_view()),
    path('api/items/', views.ItemList.as_view()),
    path('api/items/<pk>/', views.ItemDetail.as_view()),
    path('api/themes/', views.ThemeList.as_view()),
    path('api/themes/<pk>/', views.ThemeDetail.as_view()),
    path('', views.index, name='index'),
]

handler404 = views.view_404
