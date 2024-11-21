from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.decorators  import action

from backend.autoserviceshub.models import Vehicle
from backend.autoserviceshub.serializers.vehicle_serializers import VehicleSerializer

class VehiclePagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100

class VehicleViewSet(viewsets.ViewSet):
    pagination_class = VehiclePagination

    def create(self, request):

        """Create a new vehicle."""

        serializer = VehicleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def list(self, request):

        """List all vehicles with pagination."""

        vehicles = Vehicle.objects.all().order_by('id')
        paginator = self.pagination_class()
        page = paginator.paginate_queryset(vehicles, request)
        serializer = VehicleSerializer(page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def retrieve(self, request, pk=None):

        """Retrieve a specific vehicle by ID."""

        vehicle = get_object_or_404(Vehicle, id=pk)
        serializer = VehicleSerializer(vehicle)
        return Response(serializer.data)

    def update(self, request, pk=None):

        """Update a specific vehicle by ID."""

        vehicle = get_object_or_404(Vehicle, id=pk)
        serializer = VehicleSerializer(vehicle, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):

        """Delete a specific vehicle by ID."""

        vehicle = get_object_or_404(Vehicle, id=pk)
        vehicle.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 
    
    @action(detail=True, methods=['get'], url_path='details')
    def details(self, request, pk=None):

        """Retrieve detailed information for a vehicle."""

        vehicle = get_object_or_404(Vehicle, id=pk)
        serializer = VehicleSerializer(vehicle)
        return Response({'vehicle_details': serializer.data})
