from store.serializers import CuponSerializer
from store.models import Cupon
from rest_framework import generics


# Create your views here.

class CuponList(generics.ListCreateAPIView):
    queryset = Cupon.objects.all()
    serializer_class = CuponSerializer


class CuponDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cupon.objects.all()
    serializer_class = CuponSerializer
