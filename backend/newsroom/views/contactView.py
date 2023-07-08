# views.py
from rest_framework import generics
from newsroom.serializers import ContactSerializer
from newsroom.models import Contact


class ContactCreateAPIView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
