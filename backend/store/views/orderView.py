from store.serializers import OrderSerializer
from store.models import Order
from rest_framework import generics


# Create your views here.

class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
