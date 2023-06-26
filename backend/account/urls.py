from django.urls import path
from . import views


urlpatterns = [
    # user jwt endpoints
    path('register/', views.UserRegistrationView.as_view(), name='register'),
    path('login/', views.UserLoginView.as_view(), name='login'),
]
