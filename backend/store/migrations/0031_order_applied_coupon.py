# Generated by Django 4.2.1 on 2023-07-06 05:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0030_remove_order_applied_coupon'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='applied_coupon',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='store.coupon'),
        ),
    ]
