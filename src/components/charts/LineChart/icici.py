import time
import urllib
from breeze_connect import BreezeConnect


api_key = "677367S3p85g07_9)5n173598d65Y0E5"
secret_key = "5e95lE368&2U2n651a6I77c+9K1e3227"
api_session = "1366834"

breeze = BreezeConnect(api_key=api_key)

print("https://api.icicidirect.com/apiuser/login?api_key="+urllib.parse.quote_plus(api_key))


breeze.generate_session(api_secret=secret_key,
                      session_token=api_session)

breeze.ws_connect()

def on_ticks(ticks):
    print("Ticks: {}".format(ticks))
    time.sleep(5)

breeze.on_ticks = on_ticks

breeze.subscribe_feeds(exchange_code="NSE", stock_code="YESBAN", product_type="options", expiry_date="26-June-2022", strike_price="650", right="Put", get_exchange_quotes=True, get_market_depth=False)
#
# breeze.subscribe_feeds(stock_token="4.1!108094")
#
# breeze.unsubscribe_feeds(exchange_code="NFO", stock_code="ICIBAN", product_type="options", expiry_date="26-May-2022", strike_price="650", right="Put", get_exchange_quotes=True, get_market_depth=False)
#
# breeze.unsubscribe_feeds(stock_token="4.1!108094")


