from django.shortcuts import render
from django.http import JsonResponse
import services.chartDataGenerator
import services.main

# Create your views here.
def base(request):
    return render(request, "base.html")

def get_sentiment(request):
    stock_name = request.GET.get("companyName")
    sentiment = pythonCode.main.request_sentiment(stock_name)
    return JsonResponse({'sentiment': sentiment})

def get_stock_info(request):
    stock_name = request.GET.get("companyName")
    info = pythonCode.main.request_stock_info(stock_name)
    return JsonResponse({'info':info})

def charting(request):
    stock_name = request.GET.get("companyName")
    sector = request.GET.get("sector")
    past_data = pythonCode.chartDataGenerator.organiseChartData(stock_name,sector)
    return JsonResponse({'past':past_data})