from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.decorators  import action

from backend.autoserviceshub.models import Part
from backend.autoserviceshub.serializers.parts_serializers import PartSerializer

class PartPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100

class PartViewSet(viewsets.ViewSet):
    pagination_class = PartPagination

    def create(self, request):

        """Create a new part."""

        serializer = PartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request):

        """List all parts with pagination."""

        parts = Part.objects.all().order_by('id')
        paginator = self.pagination_class()
        page = paginator.paginate_queryset(parts, request)
        serializer = PartSerializer(page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def retrieve(self, request, pk=None):

        """Retrieve a specific part by ID."""

        part = get_object_or_404(Part, id=pk)
        serializer = PartSerializer(part)
        return Response(serializer.data)

    def update(self, request, pk=None):

        """Update a specific part by ID."""

        part = get_object_or_404(Part, id=pk)
        serializer = PartSerializer(part, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):

        """Delete a specific part by ID."""

        part = get_object_or_404(Part, id=pk)
        part.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 
    
    @action(detail=True, methods=['get'], url_path='details')
    def details(self, request, pk=None):

        """Retrieve detailed information for a part."""

        part = get_object_or_404(Part, id=pk)
        serializer = PartSerializer(part)
        return Response({'part_details': serializer.data})
