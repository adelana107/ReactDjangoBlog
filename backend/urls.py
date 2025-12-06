from django.urls import path
from . import views

urlpatterns = [
    path('', views.getPost, name="routes"),
    path('api/create/', views.createPost, name="post_list"),
    path('api/postpage/<int:pk>/', views.getPostPage, name="post_page")
    
]
