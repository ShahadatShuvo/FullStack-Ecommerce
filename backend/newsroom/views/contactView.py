# views.py
from rest_framework import generics
from rest_framework.generics import ListAPIView
from newsroom.serializers import ContactSerializer
from newsroom.models import Contact
from rest_framework.permissions import IsAuthenticated


class ContactCreateAPIView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class ContactSearchAPIView(ListAPIView):
    serializer_class = ContactSerializer

    def get_queryset(self):
        email = self.kwargs['email']
        queryset = Contact.objects.filter(sender__email=email)
        return queryset
