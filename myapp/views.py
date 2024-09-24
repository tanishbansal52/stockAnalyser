from django.shortcuts import render
from django.http import JsonResponse
from .models import stocks
import services.chartDataGenerator
import services.main
from datetime import date

# Create your views here.
def base(request):
    return render(request, "base.html")

def get_sentiment(request):
    stock_name = request.GET.get("companyName")
    try:
        stock_data = stocks.objects.get(name=stock_name)
        date_stored = stock_data.date_last_accessed.strftime("%Y-%m-%d")
        print(date.today,date_stored)
        today = date.today().strftime("%Y-%m-%d")
        if today > date_stored:
            sentiment = services.main.request_sentiment(stock_name)
            stock_data.sentiment = sentiment
            stock_data.date_last_accessed = today
            stock_data.save()
        else:
            sentiment = stock_data.sentiment
    except stocks.DoesNotExist:
        sentiment = services.main.request_sentiment(stock_name)
        stock = stocks(name=stock_name,sentiment=sentiment)
        stock.save()
    return JsonResponse({'sentiment': sentiment})

def get_stock_info(request):
    stock_name = request.GET.get("companyName")
    info = services.main.request_stock_info(stock_name)
    return JsonResponse({'info':info})

def charting(request):
    stock_name = request.GET.get("companyName")
    sector = request.GET.get("sector")
    past_data = services.chartDataGenerator.organiseChartData(stock_name,sector)
    return JsonResponse({'past':past_data})