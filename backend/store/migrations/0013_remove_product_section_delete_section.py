# Generated by Django 4.2.1 on 2023-06-06 08:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0012_remove_product_category_delete_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='section',
        ),
        migrations.DeleteModel(
            name='Section',
        ),
    ]