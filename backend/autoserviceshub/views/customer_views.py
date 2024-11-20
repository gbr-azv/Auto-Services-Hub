from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.decorators  import action

from backend.autoserviceshub.models import Customer
from backend.autoserviceshub.serializers.customer_serializers import CustomerSerializer

class CustomerPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100

class CustomerViewSet(viewsets.ViewSet):
    pagination_class = CustomerPagination

    def list(self, request):

        """List all customers with pagination."""

        customers = Customer.objects.all().order_by('id')
        paginator = self.pagination_class()
        page = paginator.paginate_queryset(customers, request)
        serializer = CustomerSerializer(page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def retrieve(self, request, pk=None):

        """Retrieve a specific customer by ID."""

        customer = get_object_or_404(Customer, id=pk)
        serializer = CustomerSerializer(customer)
        return Response(serializer.data)

    def update(self, request, pk=None):

        """Update a specific customer by ID."""

        customer = get_object_or_404(Customer, id=pk)
        serializer = CustomerSerializer(customer, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):

        """Delete a specific customer by ID."""

        customer = get_object_or_404(Customer, id=pk)
        customer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 
    
    @action(detail=True, methods=['get'], url_path='details')
    def details(self, request, pk=None):

        """Retrieve detailed information for a customer."""

        customer = get_object_or_404(Customer, id=pk)
        serializer = CustomerSerializer(customer)
        return Response({'customer_details': serializer.data})
