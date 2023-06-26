from django.urls import path
from . import views


urlpatterns = [
    # product endpoints
    path("api/products/", views.ProductList.as_view()),
    path("api/product/<str:pk>/", views.ProductDetail.as_view()),
    path('api/products/new-arrival/', views.NewArrivals.as_view(),
         name='last_updated_products'),

    # order endpoints
    path("api/orders/", views.OrderList.as_view()),

    # users endpoints
    #     path("api/users/", views.UserList.as_view(), name="account-list"),
    #     path("api/user/<str:pk>/", views.UserDetail.as_view()),

    #     path('api/user/register/', views.CustomUserRegisterView.as_view(),
    #          name='user-register'),
    #     path('api/user/login/', views.CustomUserLoginView.as_view(),
    #          name='user-login'),
    #     path('api/user/logout/', views.CustomUserLogoutView.as_view(),
    #          name='user-logout'),
    #     path('api/user/reset-password/', views.CustomUserPasswordResetView.as_view(),
    #          name='user-password-reset'),
    #     path('api/user/reset-password/confirm/<str:uidb64>/<str:token>/',
    #          views.CustomUserPasswordResetConfirmView.as_view(), name='api_password_reset_confirm'),

    # category endpoints
    path('api/category/<str:category_name>/',
         views.CategoryProductListView.as_view(), name='category-product-list'),

    # cupon endpoints
    path('api/cupons/', views.CuponList.as_view(), name='cupon-list'),
    path('api/cupon/<str:pk>/', views.CuponDetail.as_view(), name='cupon-detail'),
]
