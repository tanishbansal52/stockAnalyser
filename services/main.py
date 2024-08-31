import json
from . import get_stock_details, scrapeNews


def request_sentiment(stockName):
    return scrapeNews.get_sentiments(stockName)

def request_stock_info(stockName):
    return get_stock_details.stock_info(stockName)

def get_current_stock_price(stockName):
    return get_stock_details.get_current_price(stockName)

# Function to print JSON data
def printjson(jsonData):
    return print(json.dumps(jsonData, indent=4, sort_keys=True))
