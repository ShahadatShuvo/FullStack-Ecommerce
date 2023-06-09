from django.db import models
from django.conf import settings


class Contact(models.Model):
    name = models.CharField(max_length=200)
    sender = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name="contacts")
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=20)
    subject = models.CharField(max_length=255)
    message = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return self.name
