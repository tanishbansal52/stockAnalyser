import datetime


def reducedate(userdate):
    return (userdate - datetime.timedelta(days=1)).strftime("%Y-%m-%d")
