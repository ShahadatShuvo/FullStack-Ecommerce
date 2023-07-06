from django.db import models


class Coupon(models.Model):
    code = models.CharField(max_length=50, unique=True, primary_key=True)
    discount = models.FloatField()
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.code
