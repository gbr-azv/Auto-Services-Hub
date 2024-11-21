from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.decorators  import action

from backend.autoserviceshub.models import Service
from backend.autoserviceshub.serializers.services_serializers import ServiceSerializer

class ServicePagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100

class ServiceViewSet(viewsets.ViewSet):
    pagination_class = ServicePagination

    def create(self, request):

        """Create a new service."""

        serializer = ServiceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def list(self, request):

        """List all services with pagination."""

        services = Service.objects.all().order_by('id')
        paginator = self.pagination_class()
        page = paginator.paginate_queryset(services, request)
        serializer = ServiceSerializer(page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def retrieve(self, request, pk=None):

        """Retrieve a specific employee by ID."""

        employee = get_object_or_404(Service, id=pk)
        serializer = ServiceSerializer(employee)
        return Response(serializer.data)

    def update(self, request, pk=None):

        """Update a specific employee by ID."""

        employee = get_object_or_404(Service, id=pk)
        serializer = ServiceSerializer(employee, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):

        """Delete a specific employee by ID."""

        employee = get_object_or_404(Service, id=pk)
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 
    
    @action(detail=True, methods=['get'], url_path='details')
    def details(self, request, pk=None):

        """Retrieve detailed information for a employee."""

        employee = get_object_or_404(Service, id=pk)
        serializer = ServiceSerializer(employee)
        return Response({'service_details': serializer.data})
