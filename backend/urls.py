"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from backend.autoserviceshub.views.customer_views import CustomerViewSet
from backend.autoserviceshub.views.vehicle_views import VehicleViewSet
from backend.autoserviceshub.views.employees_views import EmployeeViewSet
from backend.autoserviceshub.views.services_views import ServiceViewSet
from backend.autoserviceshub.views.parts_views import PartViewSet
from backend.autoserviceshub.views.service_orders_views import ServiceOrderViewSet

router = DefaultRouter()
router.register(r'customers', CustomerViewSet, basename='customer')
router.register(r'vehicles', VehicleViewSet, basename='vehicle')
router.register(r'employees', EmployeeViewSet, basename='employee')
router.register(r'services', ServiceViewSet, basename='service')
router.register(r'parts', PartViewSet, basename='part')
router.register(r'service-orders', ServiceOrderViewSet, basename='service_order')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]
