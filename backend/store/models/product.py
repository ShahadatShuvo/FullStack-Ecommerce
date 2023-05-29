from django.db import models
from django.utils.html import mark_safe


class Product(models.Model):
    title = models.CharField(max_length=100, null=True)
    description = models.TextField()
    price = models.FloatField()
    stock = models.IntegerField()
    image_url = models.ImageField(upload_to='products/', null=True, blank=True)

    def __str__(self):
        return self.title

    def img_preview(self):  # new
        try:
            return mark_safe(f'<img src = "{self.image_url.url}" width = "40"/>')
        except:
            pass
