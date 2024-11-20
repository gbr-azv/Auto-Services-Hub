from rest_framework import serializers
from backend.autoserviceshub.models import Service

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
