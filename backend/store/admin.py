from django.contrib import admin
from .models import Product, Customer, Order
from import_export.admin import ImportExportModelAdmin

# Register your models here.


@admin.register(Product)
class AdminProduct(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['title', 'price', 'stock', 'img_preview']


@admin.register(Customer)
class AdminCustomer(admin.ModelAdmin):
    list_display = ['user', 'phone', 'email']


@admin.register(Order)
class AdminOrder(ImportExportModelAdmin, admin.ModelAdmin):
    def get_customer(self, obj):
        return obj.customer.user.username

    list_display = [get_customer, 'date_ordered', 'complete', 'transaction_id']
