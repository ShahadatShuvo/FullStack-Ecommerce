from rest_framework import serializers
from account.models import User


class UpdateUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'gender',
                  'phone_number', 'country', 'state', 'city', 'zip_code', 'date_of_birth', 'image_url']
