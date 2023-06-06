from rest_framework import serializers
from store.models import Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

    def display_categories(self, obj):
        return ", ".join([str(category) for category in obj.category.all()])
