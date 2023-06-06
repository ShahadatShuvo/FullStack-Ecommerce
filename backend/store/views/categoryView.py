from store.models import Category
from store.serializers.categorySerializer import CategorySerializer
from rest_framework import generics
from rest_framework import permissions
from rest_framework.authentication import BasicAuthentication
from rest_framework import filters


# Create your views here.

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['id', 'name', 'description']
    search_fields = ['id', 'name', 'description']
    ordering_fields = ['name']
    # authentication_classes = [BasicAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
