from django.contrib import admin
from .models import Headline, Contact, Team
from import_export.admin import ImportExportModelAdmin

# Register your models here.


@admin.register(Headline)
class AdminHeadline(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['id', 'created_at', 'text']
    ordering = ['created_at']


@admin.register(Contact)
class AdminContact(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['id', 'name', 'sender', 'email', 'phone',
                    'created_at', 'subject', 'message']
    ordering = ['name', 'email', 'phone', 'created_at']


@admin.register(Team)
class AdminTeam(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['id', 'name', 'email', 'job_title',
                    'portfolio_link', 'about', 'interests', 'img_preview',]
    ordering = ['name', 'email']
