from django.urls import path
from . import views

urlpatterns = [
    path('', views.getPost, name="routes"),
    path('api/create/', views.getCreatePost, name="post_list"),
    path('api/postpage/<int:pk>/', views.getPostPage, name="post_page"),
    path('api/edit-post/<int:pk>/', views.getEditPost, name="post_page"),


    
]
