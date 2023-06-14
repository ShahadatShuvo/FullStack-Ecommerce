from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.html import mark_safe
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from store.managers import CustomUserManager

# Create your models here.


class CustomUser(AbstractBaseUser, PermissionsMixin):

    # Gender choices
    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    )

    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    phone_number = models.CharField(max_length=15, blank=True)
    country = models.CharField(max_length=50, blank=True)
    state = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=50, blank=True)
    zip_code = models.CharField(max_length=10, blank=True)
    date_joined = models.DateTimeField(default=timezone.now)
    last_login = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    image_url = models.ImageField(upload_to='users/', null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    # Add related_name to avoid clashes with auth.User model
    # groups = models.ManyToManyField(
    #     'auth.Group',
    #     related_name='custom_users',
    #     blank=True,
    #     help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
    #     verbose_name='groups',
    # )
    # user_permissions = models.ManyToManyField(
    #     'auth.Permission',
    #     related_name='custom_users',
    #     blank=True,
    #     help_text='Specific permissions for this user.',
    #     verbose_name='user permissions',
    # )

    def __str__(self):
        return self.email

    def img_preview(self):  # new
        try:
            return mark_safe(f'<img src = "{self.image_url.url}" width = "40"/>')
        except:
            pass
