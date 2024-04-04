import requests
import json
import threading



website = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

for i in range(52772,53000):
    
    try:

        meal = website + str(i)

        meal=requests.get(meal).json()
        mealname = meal['meals'][0]['strMeal']
        print(meal['meals'][0]['strMeal'])
    except:
        next