# views.py
from rest_framework import generics
from store.serializers import HeadlineSerializer
from store.models import Headline


class HeadlineList(generics.ListCreateAPIView):
    queryset = Headline.objects.all()
    serializer_class = HeadlineSerializer
