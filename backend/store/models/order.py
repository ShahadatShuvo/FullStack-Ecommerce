from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
import uuid


class Order(models.Model):
    customer = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name="orders")
    transaction_id = models.CharField(
        max_length=100, unique=True, default=uuid.uuid4)
    applied_coupon = models.CharField(max_length=100, null=True)
    date_ordered = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False)
    shipping_address = models.TextField(null=True)
    ordered_products = models.TextField(null=True)

    def __str__(self):
        return self.customer.email
