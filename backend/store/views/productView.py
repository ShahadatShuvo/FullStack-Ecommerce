from store.serializers import ProductSerializer
from store.models import Product
from rest_framework import generics


# Create your views here.

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
