from . import get_stock_details
import pandas as pd

TIME = "3mo"


def retrieveChartData(stockName):
    data = get_stock_details.get_stock_history(stockName, TIME)
    thirty_day_prices = data["Close"].to_list()
    thirty_day_dates = [a.date().strftime('%Y-%m-%d') for a in data.index]
    chartData = {'dates': thirty_day_dates, 'prices': thirty_day_prices}
    return chartData


def organiseChartData(stockName, sector=None):
    complete = dict(main=retrieveChartData(stockName))
    sectorETFs = {'Technology': ["XLK", "VGT"]}
    for etf in sectorETFs[sector]:
        complete[etf] = retrieveChartData(etf)
    return complete
