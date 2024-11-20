from rest_framework import serializers
from backend.autoserviceshub.models import ServicePart

class ServicePartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicePart
        fields = '__all__'
