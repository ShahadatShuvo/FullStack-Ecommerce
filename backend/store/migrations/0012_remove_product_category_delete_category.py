# Generated by Django 4.2.1 on 2023-06-06 08:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0011_product_section'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='category',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]
