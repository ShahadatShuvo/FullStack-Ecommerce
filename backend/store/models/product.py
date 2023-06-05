from django.db import models
from django.utils.html import mark_safe
from .category import Category


class Product(models.Model):
    title = models.CharField(max_length=100, null=True)
    # category = models.ForeignKey(
    #     Category, on_delete=models.CASCADE, null=True, blank=True)
    category = models.ManyToManyField(Category, null=True, blank=True)
    description = models.TextField()
    price = models.FloatField()
    stock = models.IntegerField()
    created_at = models.DateTimeField(
        auto_now_add=True, blank=True, null=True, editable=False)
    updated_at = models.DateTimeField(
        auto_now=True, blank=True, null=True, editable=False)
    image_url = models.ImageField(upload_to='products/', null=True, blank=True)

    def __str__(self):
        return self.title

    def img_preview(self):  # new
        try:
            return mark_safe(f'<img src = "{self.image_url.url}" width = "40"/>')
        except:
            pass
