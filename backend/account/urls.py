from django.urls import path
from . import views


urlpatterns = [
    # user jwt endpoints
    path('refresh-token/', views.RefreshTokenView.as_view(), name='refresh-token'),

    path('register/', views.UserRegistrationView.as_view(), name='register'),
    path('login/', views.UserLoginView.as_view(), name='login'),
    path('profile/', views.UserProfileView.as_view(), name='profile'),
    path('profile/update/', views.UpdateUserProfileView.as_view(),
         name='update-profile'),
    path('change-password/', views.UserChangePasswordView.as_view(),
         name='change-password'),
    path('reset-password/', views.SendPasswordResetEmailView.as_view(),
         name='reset-password'),
    path('reset-password/<uid>/<token>/',
         views.UserPasswordResetView.as_view(), name='reset-password-confirm'),
]
