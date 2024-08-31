from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path("", TemplateView.as_view(template_name='index.html'), name="home"),
    path("getSentiment/", views.get_sentiment, name="get_sentiment"),
    path("getInfo/", views.get_stock_info, name="get_info"),
    path("chart/", views.charting, name="chart")
]
