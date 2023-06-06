from store.serializers import ProductSerializer
from store.models import Product
from rest_framework import generics
from rest_framework import permissions
from rest_framework.authentication import BasicAuthentication
from rest_framework import filters


# Create your views here.

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['id', 'price', 'stock',
                        'created_at', 'updated_at', 'category']
    search_fields = ['title', 'price', 'description']
    ordering_fields = ['price', 'stock', 'category']
    # authentication_classes = [BasicAuthentication]
    # permission_classes = [permissions.IsAuthenticated]


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
