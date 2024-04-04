from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import json

uri = "mongodb+srv://elee0116:elee0116@codebrew2024.jnbrc9k.mongodb.net/?retryWrites=true&w=majority&appName=Codebrew2024"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
    quit

#for db_info in client.list_database_names():
#    print(db_info)

recipesdb = client['RecipeDB']
recipes = recipesdb['recipes']
ingredients = recipesdb['ingredients']


recipedata=json.load(open(r'Recipescrape.json'))
ingredientdata=json.load(open(r'colesprices.json'))


recipes.insert_many(recipedata)
ingredients.insert_many(ingredientdata)


