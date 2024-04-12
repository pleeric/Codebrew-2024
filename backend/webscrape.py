import requests
from bs4 import BeautifulSoup
import json
import sqlite3
import ClothingClassifier
#import ColourClassifier

urls = [https://hellofresh.com.au/menus/2024-W15]
def scrape_products(urls):
    """ Loads link(s) of websites and scrapes clothing information

    Args:
        url (str[]): Array of URL's of websites to scrape

    Returns:
        _type_: dict{}
    """

    data=[]
    for url in urls:
        # Send a GET request to the URL
        response = requests.get(url)

        # Parse the HTML content of the page
        soup = BeautifulSoup(response.text, 'html.parser')
          
        # Find all product items on the page
        product_items = soup.find_all('li',class_='css-1uzpf0u')

        for product_item in product_items:
            
            # Product id
            product_id = product_item['id']
            print
            # TODO: Product price

            # Image URL
            product_image_url = product_item.find('img')['src']
            product_type = 5#ClothingClassifier.typeclassify_image_from_url(product_image_url)
            #product_colour = ColourClassifier.colourclassify_image_from_url(product_image_url)

            # Page URL
            # Currently using myer 
            # TODO: make product page url link compatible with all url's
            product_page_url = "https://www.myer.com.au"+product_item.find('a')['href']

            # Format and add data            
            data.append({"id":product_id,"pageurl":product_page_url,"imageurl":product_image_url,"type":product_type})


    return data




# Call the function to initiate scraping
#Colours are manually coded into the json file (for now)

data = scrape_products(urls=urls)
with open("clothingdata.json","w") as f:
    json.dump(data,f)


#TODO: AI for colour classification (AI may not be needed) and make init file
#TODO: Load data to main program
#TODO: optimize?