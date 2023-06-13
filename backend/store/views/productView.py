from store.serializers import ProductSerializer
from store.models import Product
from store.models import Category
from rest_framework import generics
from rest_framework import permissions
from rest_framework.authentication import BasicAuthentication
from rest_framework import filters
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'price', 'description']
    ordering_fields = ['price', 'stock', 'category']
    filterset_fields = ['id', 'price', 'stock',
                        'created_at', 'updated_at', 'category']
    # authentication_classes = [BasicAuthentication]
    # permission_classes = [permissions.IsAuthenticated]


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class CategoryProductListView(APIView):
    def get(self, request, category_name):
        try:
            category = Category.objects.get(name=category_name)
            products = category.product_set.all()
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data)
        except Category.DoesNotExist:
            return Response({'error': 'Category not found'}, status=404)


class NewArrivals(APIView):
    def get(self, request):
        products = Product.objects.order_by('-updated_at')[:8]
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
