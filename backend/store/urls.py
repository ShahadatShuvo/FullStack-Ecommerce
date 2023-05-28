from django.urls import path
from . import views


urlpatterns = [
    path("api/products/", views.ProductList.as_view()),
    path("api/customers/", views.CustomerList.as_view()),
    path("api/orders/", views.OrderList.as_view()),
]
