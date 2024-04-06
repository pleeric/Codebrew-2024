import requests
import json


website = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
ingredientsstored = 20

recipes = []

for i in range(52772,53000):
    try:
        # Update website of recipe
        recipewebsite = website + str(i)

        # Get recipe data from website 
        recipewebsite=requests.get(recipewebsite).json()

        # Extract recipe data
            # Recipe Name
        recipewebsite=recipewebsite['meals'][0]

        name = recipewebsite['strMeal']
        #print(name)
            # Recipe ingredients
        ingredients = {}
        for i in range(1,ingredientsstored+1): 
            ingno = "strIngredient" + str(i)
            ingam = "strMeasure"+str(i)
            if recipewebsite[ingno]:
                ingredients[recipewebsite[ingno]]=recipewebsite[ingam]

        img = recipewebsite["strMealThumb"]   
        cuisine = recipewebsite["strArea"] 

        if cuisine in ["American", "British", "Canadian", "Dutch", "Irish", "Italian", "Jamaican", "Mexican", "Spanish"]:
            cuisine = "Western"
        elif cuisine in ["Chinese", "Filipino", "Indian", "Japanese", "Korean", "Malaysian", "Thai", "Vietnamese"]:
            cuisine = "Asian"
        else:
            cuisine = "Middle-eastern"


        #Add vegan and gluten-free attributes to recipes
        vegan = True
        gluten_free = True
        for ingredient in ingredients:
            for ing in ingredient.split():
                if ing.capitalize() in ["Chicken", "Beef", "Pork", "Fish", "Egg", "Milk", "Cheese"]:
                    vegan = False
                if ing.capitalize() in ["Flour", "Bread", "Pasta", "Noodles"]:
                    gluten_free = False

                
        recipes.append({'id':i, "name": name, "ingredients": ingredients, "imgurl":img, "cuisine":cuisine, "vegan":vegan, "glutenfree":gluten_free})


    except:
        next



with open("recipedata.json", "w") as f:
    json.dump(recipes,f)
