from django.db import models
from django.utils.html import mark_safe


class Category(models.Model):
    name = models.CharField(max_length=100,  primary_key=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='category/', null=True, blank=True)

    def __str__(self):
        return self.name

    def img_preview(self):  # new
        try:
            return mark_safe(f'<img src = "{self.image.url}" width = "40"/>')
        except:
            pass
