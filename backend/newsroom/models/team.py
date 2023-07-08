from django.db import models
from django.utils.html import mark_safe


class Team(models.Model):
    name = models.CharField(max_length=100)
    job_title = models.CharField(max_length=255, null=True, blank=True)
    portfolio_link = models.URLField(null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    about = models.TextField(null=True, blank=True)
    interests = models.TextField(null=True, blank=True)
    image_url = models.ImageField(upload_to='teams/', null=True, blank=True)
    facebook_link = models.URLField(null=True, blank=True)
    twitter_link = models.URLField(null=True, blank=True)
    linkedin_link = models.URLField(null=True, blank=True)
    instagram_link = models.URLField(null=True, blank=True)
    whatsapp_link = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.name

    def img_preview(self):  # new
        try:
            return mark_safe(f'<img src = "{self.image_url.url}" width = "40"/>')
        except:
            pass
