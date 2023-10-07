from django.urls import path
from . import views

urlpatterns  = [
    path('', views.getData),
    path('create_user/', views.create_user),
    path('update_user/<int:id>/', views.update_user),
    path('delete_user/<int:id>/', views.delete_user),

    path('files/', views.FileUploadView.as_view())
]