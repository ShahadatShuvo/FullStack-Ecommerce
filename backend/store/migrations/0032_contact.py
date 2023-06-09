# Generated by Django 4.2.1 on 2023-07-07 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0031_order_applied_coupon'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=100)),
                ('phone', models.CharField(max_length=20)),
                ('subject', models.CharField(max_length=255)),
                ('message', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
    ]
