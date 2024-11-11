from django.db import models

class Role(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class ServiceCategory(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class ServiceOrderStatus(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Employee(models.Model):
    name = models.CharField(max_length=100)
    social_security_number = models.CharField(max_length=50, unique=True)
    date_of_birth = models.DateField()
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Customer(models.Model):
    name = models.CharField(max_length=100)
    social_security_number = models.CharField(max_length=50, unique=True)
    date_of_birth = models.DateField()
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    date_of_registration = models.DateField(auto_now_add=True)
    date_of_last_service = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.name

class Vehicle(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    license_plate = models.CharField(max_length=50, unique=True)
    brand = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    vehicle_type = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    year = models.IntegerField()
    date_of_last_service = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.brand} {self.model} ({self.license_plate})"

class Service(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    estimated_time = models.TimeField()
    category = models.ForeignKey(ServiceCategory, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class Part(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    brand = models.CharField(max_length=50)
    quantity_in_stock = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class ServiceOrder(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    date_of_service = models.DateField()
    total_cost = models.DecimalField(max_digits=10, decimal_places=2)
    observations = models.TextField(null=True, blank=True)
    status = models.ForeignKey(ServiceOrderStatus, on_delete=models.CASCADE)

    def __str__(self):
        return f"Order {self.id} - {self.customer.name}"

class ServicePart(models.Model):
    service_order = models.ForeignKey(ServiceOrder, on_delete=models.CASCADE)
    part = models.ForeignKey(Part, on_delete=models.CASCADE)
    quantity_used = models.IntegerField()

    def __str__(self):
        return f"{self.quantity_used} x {self.part.name} for Order {self.service_order.id}"
