# Generated by Django 4.2.1 on 2023-07-03 23:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('store', '0022_delete_customuser'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='customer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='orders', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='order',
            name='ordered_products',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='shipping_address',
            field=models.TextField(null=True),
        ),
    ]