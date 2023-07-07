# views.py
from rest_framework import generics
from store.serializers import ContactSerializer
from store.models import Contact


class ContactCreateAPIView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
