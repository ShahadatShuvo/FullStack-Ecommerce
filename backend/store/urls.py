from django.urls import path
from . import views


urlpatterns = [
    path("api/products/", views.ProductList.as_view()),
    path("api/product/<str:pk>/", views.ProductDetail.as_view()),

    # path("api/categories/", views.CategoryList.as_view()),

    path("api/customers/", views.CustomerList.as_view()),
    path("api/orders/", views.OrderList.as_view()),

    path("api/users/", views.UserList.as_view(), name="account-list"),
    path("api/user/create/", views.UserCreate.as_view(), name="account-create"),
    path("api/user/<str:pk>/", views.UserDetail.as_view(), name="account-detail"),
]
