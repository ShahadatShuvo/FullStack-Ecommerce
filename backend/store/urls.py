from django.urls import path
from . import views


urlpatterns = [
    # headline endpoints
    path("api/headlines/", views.HeadlineList.as_view()),


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
    path('api/coupons/', views.CouponList.as_view(), name='coupon-list'),
    path('api/coupon/<str:pk>/', views.CouponDetail.as_view(), name='coupon-detail'),

    # contact endpoints
    path('api/contact/create/', views.ContactCreateAPIView.as_view(),
         name='contact-create'),

]
