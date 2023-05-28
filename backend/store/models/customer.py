from django.db import models
from django.contrib.auth.models import User


class Customer(models.Model):
    user = models.OneToOneField(
        User, null=True, blank=True, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15, null=True)
    email = models.EmailField()

    def __str__(self):
        return self.user.username
