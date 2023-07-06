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
    path('api/search/orders/<str:customer_email>/',
         views.OrderSearchView.as_view(), name='order-search'),

    # category endpoints
    path('api/category/<str:category_name>/',
         views.CategoryProductListView.as_view(), name='category-product-list'),

    # cupon endpoints
    path('api/cupons/', views.CuponList.as_view(), name='cupon-list'),
    path('api/cupon/<str:pk>/', views.CuponDetail.as_view(), name='cupon-detail'),
]
