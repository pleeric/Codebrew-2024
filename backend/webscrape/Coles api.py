from bs4 import BeautifulSoup
import json
import requests

prices = []
def scrap(url, pages):
    for i in range(pages):
        URL = f"{url}{i}"
        page = requests.get(URL)
        soup = BeautifulSoup(page.content, "html.parser")

        containers = soup.find_all("section", class_="sc-e8e1593b-3")

        for container in containers:
            # temp1 helps to format the product
            product_name_temp1 = container.find('h2',class_="LinesEllipsis").text
            product_name = product_name_temp1[6:].split('|')[0].rstrip(" ")

            if product_name_temp1.split('|')[1:]:
                try:
                    ppu = container.find("span", class_="price__value").text
                except:
                    ppu = "$0"
                prices.append({"product": product_name, "ppsu": f"{float(ppu[1:]):.4f}", "su": product_name_temp1.split('|')[1][-5:].lstrip(" ")})
            else:
                try:
                    ppu = container.find("div", class_="price__calculation_method").text
                except:
                    ppu = "$0"
                # get rid of any unnecessary stuff in the string
                ppu_split1 = ppu.split("|")
                ppu_split2 = ppu_split1[0].split()
                unit = ""
                measurement = ""
                for char in ppu_split2[-1]:
                    if char.isdigit():
                        measurement += char
                    if not char.isdigit():
                        unit += char
                # ppsu stands for price per one standard unit. su stands for the standard unit, e.g 1 kg, 1 g, 1 ml
                try:
                    if unit == 'L':
                        prices.append({"product": product_name, "ppsu": f"{float(ppu_split2[0][1:])/1000:.4f}", "su": 'mL'})
                    elif unit == 'kg':
                        prices.append({"product": product_name, "ppsu": f"{float(ppu_split2[0][1:])/1000:.4f}", "su": 'g'})
                    else:
                        prices.append({"product": product_name, "ppsu": f"{float(ppu_split2[0][1:])/int(measurement):.4f}", "su": unit})
                except:
                    prices.append({"product": product_name, "ppsu": 0, "su": unit})

# print("Loading...")
# coles prices of fruits and vegetables 
scrap("https://www.coles.com.au/browse/fruit-vegetables?filter_ColesBrands=all&filter_Brand=3955134709&page=", 39)
# print("step 1 done")
# coles prices of meat and seafood
scrap("https://www.coles.com.au/browse/meat-seafood?filter_ColesBrands=all&filter_Brand=3955134709&filter_Brand=1800418983&page=", 7)
# print("step 2 done")
# coles prices of drinks
scrap("https://www.coles.com.au/browse/drinks?filter_ColesBrands=all&filter_Brand=3955134709&filter_Brand=561658281&page=", 3)
# print("step 3 done")
# coles prices of pantry items
scrap("https://www.coles.com.au/browse/pantry?filter_ColesBrands=all&filter_Brand=3955134709&filter_Brand=546232673&filter_Brand=561658281&filter_Brand=753548098&page=", 22)
# print("step 4 done")
# coles prices of dairy
scrap("https://www.coles.com.au/browse/dairy-eggs-fridge?filter_ColesBrands=all&filter_Brand=3955134709&page=", 8)
# print("step 5 done")

with open("colesprices.json", "w") as f:
    json.dump(prices,f)

# print(prices)