from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer
from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return render(request, 'home.html')


def aboutus(request):
    return HttpResponse('Welcome to my about us page')


def contactus(request):
    return render(request, 'contact.html')


def adventures(request):
    return render(request, 'adventures.html')


def courseDetails(request, coursedetails):
    return HttpResponse(coursedetails)




class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer