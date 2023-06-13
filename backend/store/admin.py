from django.contrib import admin
from .models import Product, Customer, Order, Category, Cupon
from import_export.admin import ImportExportModelAdmin


# Register your models here.


@admin.register(Product)
class AdminProduct(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['title', 'price', 'display_categories', 'created_at',
                    'updated_at', 'stock', 'img_preview']
    # list_filter = ['price', 'stock']
    search_fields = ['title', 'description']
    readonly_fields = ['img_preview']

    def display_categories(self, obj):
        return ", ".join([str(category) for category in obj.category.all()])


@admin.register(Customer)
class AdminCustomer(admin.ModelAdmin):
    list_display = ['user', 'phone', 'email']


@admin.register(Order)
class AdminOrder(ImportExportModelAdmin, admin.ModelAdmin):
    def get_customer(self, obj):
        return obj.customer.user.username

    list_display = [get_customer, 'date_ordered', 'complete', 'transaction_id']


@admin.register(Category)
class AdminCategory(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['name', 'description', 'img_preview']
    ordering = ['name']


@admin.register(Cupon)
class AdminCupon(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['code', 'discount', 'active', 'created_at', 'updated_at']
    ordering = ['discount', 'created_at', 'updated_at']
