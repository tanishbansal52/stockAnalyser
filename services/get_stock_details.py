import yfinance as yf
from . import extraFuncs
import pandas as pd
import datetime

def get_current_price(name):
    stockHistory = get_stock_history(name)
    stockHistory.to_json("%s_history.json" % name, orient='table')
    # if there is already a json file:
    # stockHistory = pd.read_json("%shistory.json" % stockName, orient='table')
    day = datetime.date.today()
    while True:
        try:
            dayStats = stockHistory.loc[day]
            break
        except KeyError:
            day = extraFuncs.reducedate(day)
    currentPrice = dayStats["Close"]
    return currentPrice

def get_stock_history(name, length = "max"):
    return yf.Ticker(name).history(period=length)

def stock_info(name):
    return yf.Ticker(name).info
