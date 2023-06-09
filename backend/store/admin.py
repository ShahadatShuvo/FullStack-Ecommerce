from django.contrib import admin
from .models import Product, Order, Category, Coupon
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


@admin.register(Order)
class AdminOrder(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['customer', 'transaction_id',
                    'date_ordered', 'complete', 'applied_coupon', 'shipping_address', 'ordered_products']


@admin.register(Category)
class AdminCategory(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['name', 'description', 'img_preview']
    ordering = ['name']


@admin.register(Coupon)
class AdminCoupon(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['code', 'discount',
                    'active', 'created_at', 'updated_at']
    ordering = ['discount', 'created_at', 'updated_at']
