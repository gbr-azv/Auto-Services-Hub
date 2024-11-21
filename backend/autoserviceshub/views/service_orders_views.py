from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.decorators  import action

from backend.autoserviceshub.models import ServiceOrder
from backend.autoserviceshub.serializers.service_orders_serializers import ServiceOrderSerializer

class ServiceOrderPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100

class ServiceOrderViewSet(viewsets.ViewSet):
    pagination_class = ServiceOrderPagination

    def list(self, request):

        """List all service_orders with pagination."""

        service_orders = ServiceOrder.objects.all().order_by('id')
        paginator = self.pagination_class()
        page = paginator.paginate_queryset(service_orders, request)
        serializer = ServiceOrderSerializer(page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def retrieve(self, request, pk=None):

        """Retrieve a specific service_order by ID."""

        service_order = get_object_or_404(ServiceOrder, id=pk)
        serializer = ServiceOrderSerializer(service_order)
        return Response(serializer.data)

    def update(self, request, pk=None):

        """Update a specific service_order by ID."""

        service_order = get_object_or_404(ServiceOrder, id=pk)
        serializer = ServiceOrderSerializer(service_order, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):

        """Delete a specific service_order by ID."""

        service_order = get_object_or_404(ServiceOrder, id=pk)
        service_order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 
    
    @action(detail=True, methods=['get'], url_path='details')
    def details(self, request, pk=None):

        """Retrieve detailed information for a service_order."""

        service_order = get_object_or_404(ServiceOrder, id=pk)
        serializer = ServiceOrderSerializer(service_order)
        return Response({'service_order_details': serializer.data})
