# views.py
from rest_framework import generics
from newsroom.serializers import HeadlineSerializer
from newsroom.models import Headline


class HeadlineList(generics.ListCreateAPIView):
    queryset = Headline.objects.all()
    serializer_class = HeadlineSerializer
