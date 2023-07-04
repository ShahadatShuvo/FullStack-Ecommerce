# Generated by Django 4.2.1 on 2023-07-04 00:02

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0024_alter_order_transaction_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='transaction_id',
            field=models.CharField(default=uuid.uuid4, max_length=100, unique=True),
        ),
    ]