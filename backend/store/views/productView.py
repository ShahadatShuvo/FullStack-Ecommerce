from store.serializers import ProductSerializer
from store.models import Product
from rest_framework import generics
from rest_framework import permissions
from rest_framework.authentication import BasicAuthentication
from django_filters.rest_framework import DjangoFilterBackend


# Create your views here.

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'price', 'stock', 'created_at', 'updated_at']

    # authentication_classes = [BasicAuthentication]
    # permission_classes = [permissions.IsAuthenticated]


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
