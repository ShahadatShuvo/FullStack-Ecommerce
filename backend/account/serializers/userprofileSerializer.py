from rest_framework import serializers
from account.models import User


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'gender',
                  'phone_number', 'country', 'state', 'city', 'zip_code', 'date_of_birth', 'created_at', 'image_url']
