from rest_framework import serializers
from newsroom.models import Headline


class HeadlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Headline
        fields = '__all__'
