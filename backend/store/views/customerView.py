from store.serializers import CustomerSerializer
from store.models import Customer
from rest_framework import generics


# Create your views here.

class CustomerList(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
