from store.serializers import CouponSerializer
from store.models import Coupon
from rest_framework import generics


# Create your views here.

class CouponList(generics.ListCreateAPIView):
    queryset = Coupon.objects.all()
    serializer_class = CouponSerializer


class CouponDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coupon.objects.all()
    serializer_class = CouponSerializer
