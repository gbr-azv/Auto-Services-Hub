from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from backend.autoserviceshub.models import Customer
from backend.autoserviceshub.serializers.customer_serializers import CustomerSerializer

class CustomerPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100

class CustomerListView(generics.ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    pagination_class = CustomerPagination
