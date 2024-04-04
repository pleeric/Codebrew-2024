import requests

URL = "https://www.coles.com.au/browse/fruit-vegetables?filter_ColesBrands=all&filter_Brand=3955134709&page="
page = requests.get(URL)

print(page.text)