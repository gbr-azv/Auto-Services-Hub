from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.decorators  import action

from backend.autoserviceshub.models import ServicePart
from backend.autoserviceshub.serializers.service_parts_serializers import ServicePartSerializer

class ServicePartPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100

class ServicePartViewSet(viewsets.ViewSet):
    pagination_class = ServicePartPagination

    def create(self, request):

        """Create a new service part."""

        serializer = ServicePartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request):

        """List all service_parts with pagination."""

        service_parts = ServicePart.objects.all().order_by('id')
        paginator = self.pagination_class()
        page = paginator.paginate_queryset(service_parts, request)
        serializer = ServicePartSerializer(page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def retrieve(self, request, pk=None):

        """Retrieve a specific service_part by ID."""

        service_part = get_object_or_404(ServicePart, id=pk)
        serializer = ServicePartSerializer(service_part)
        return Response(serializer.data)

    def update(self, request, pk=None):

        """Update a specific service_part by ID."""

        service_part = get_object_or_404(ServicePart, id=pk)
        serializer = ServicePartSerializer(service_part, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):

        """Delete a specific service_part by ID."""

        service_part = get_object_or_404(ServicePart, id=pk)
        service_part.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 
    
    @action(detail=True, methods=['get'], url_path='details')
    def details(self, request, pk=None):

        """Retrieve detailed information for a service_part."""

        service_part = get_object_or_404(ServicePart, id=pk)
        serializer = ServicePartSerializer(service_part)
        return Response({'service_part_details': serializer.data})
