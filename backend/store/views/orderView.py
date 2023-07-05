from store.serializers import OrderSerializer
from store.models import Order
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


# Create your views here.

class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderSearchView(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        customer_email = self.kwargs['customer_email']
        # Filter orders by customer email
        queryset = Order.objects.filter(customer__email=customer_email)
        return queryset
