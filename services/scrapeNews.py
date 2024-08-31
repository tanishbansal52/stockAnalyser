from bs4 import BeautifulSoup
import urllib.request, urllib.parse, urllib.error
import ssl
import re
from . import sentimentAnalysis

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE


def getWebpage(url):
    try:
        html = urllib.request.urlopen(url, context=ctx).read()
        # html = html.decode('utf-8')
        soup = BeautifulSoup(html, 'html.parser')
        return soup
    except Exception as e:
        # print(f"Failed to request url: {url} with error {e}")
        return None


def getLinksFromWebpage(url):
    links = set()
    soup = getWebpage(url)
    for link in soup.find_all('a', attrs={'href': re.compile("^https://")}):
        links.add(link.get('href'))
        # print(link.get('href'))
    return links


def getTextOnWebpage(url):
    soup = getWebpage(url)
    body = soup.find('body')
    text = body.get_text()
    return text


def get_sentiments(stockName):
    sentiment = []
    # url = "https://finance.yahoo.com/quote/%s/" % stockName
    url = "https://www.google.com/finance/quote/%s:NASDAQ" % stockName
    articleStore = getLinksFromWebpage(url)
    for link in articleStore:
        try:
            text = getTextOnWebpage(link)
            # print(sentimentAnalysis.finbertSentiment(text))
            sentiment.append(sentimentAnalysis.finbertSentiment(text)[0]['score'])
        except Exception as e:
            # print(f"Failed to get text from webpage: {link} with error {e}")
            continue
    if sentiment:
        return sum(sentiment) / len(sentiment)
    else:
        return "Sentiment's length is 0"


# print(getSentiments("AAPL"))


# getWebpage("https://finance.yahoo.com/quote/AAPL/news")
