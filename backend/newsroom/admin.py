from django.contrib import admin
from .models import Headline, Contact
from import_export.admin import ImportExportModelAdmin

# Register your models here.


@admin.register(Headline)
class HeadlineContact(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['id', 'created_at', 'text']
    ordering = ['created_at']


@admin.register(Contact)
class AdminContact(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['id', 'name', 'email', 'phone',
                    'created_at', 'subject', 'message']
    ordering = ['name', 'email', 'phone', 'created_at']
