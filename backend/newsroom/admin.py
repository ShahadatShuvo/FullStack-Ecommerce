from django.contrib import admin
from .models import Headline
from import_export.admin import ImportExportModelAdmin

# Register your models here.


@admin.register(Headline)
class HeadlineContact(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['id', 'created_at', 'text']
    ordering = ['created_at']
