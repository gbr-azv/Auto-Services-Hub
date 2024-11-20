from rest_framework import serializers
from backend.autoserviceshub.models import ServiceOrder

class ServiceOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceOrder
        fields = '__all__'
