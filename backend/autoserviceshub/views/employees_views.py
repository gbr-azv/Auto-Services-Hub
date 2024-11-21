from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.decorators  import action

from backend.autoserviceshub.models import Employee
from backend.autoserviceshub.serializers.employees_serializers import EmployeeSerializer

class EmployeePagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100

class EmployeeViewSet(viewsets.ViewSet):
    pagination_class = EmployeePagination

    def create(self, request):

        """Create a new employee."""

        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request):

        """List all employees with pagination."""

        employees = Employee.objects.all().order_by('id')
        paginator = self.pagination_class()
        page = paginator.paginate_queryset(employees, request)
        serializer = EmployeeSerializer(page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def retrieve(self, request, pk=None):

        """Retrieve a specific employee by ID."""

        employee = get_object_or_404(Employee, id=pk)
        serializer = EmployeeSerializer(employee)
        return Response(serializer.data)

    def update(self, request, pk=None):

        """Update a specific employee by ID."""

        employee = get_object_or_404(Employee, id=pk)
        serializer = EmployeeSerializer(employee, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):

        """Delete a specific employee by ID."""

        employee = get_object_or_404(Employee, id=pk)
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 
    
    @action(detail=True, methods=['get'], url_path='details')
    def details(self, request, pk=None):

        """Retrieve detailed information for a employee."""

        employee = get_object_or_404(Employee, id=pk)
        serializer = EmployeeSerializer(employee)
        return Response({'employee_details': serializer.data})
