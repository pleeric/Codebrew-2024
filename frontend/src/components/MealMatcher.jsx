import recipedata from "../recipedata.json"
import { Navigate } from "react-router-dom";

const MealMatcher = (foodPrefs) => {
    console.log("Matching Meal")
    const vegan = foodPrefs.vegan
    const glutenFree = foodPrefs.glutenFree
    const westernCuisine = foodPrefs.cuisine.westernCuisine
    const asianCuisine = foodPrefs.cuisine.asianCuisine
    const middleeastCuisine = foodPrefs.cuisine.middleeastCuisine

    let matchedRecipes = []

    for (let i = 0; i < recipedata.length; i++) {
        const recipe = recipedata[i]
        if (vegan && recipe.vegan === vegan && !matchedRecipes.includes(recipe)) {
            matchedRecipes.push(recipe)
        }
        if (glutenFree && recipe.glutenfree === glutenFree && !matchedRecipes.includes(recipe)) {
            matchedRecipes.push(recipe)
        }
        if (westernCuisine && recipe.cuisine === "Western" && !matchedRecipes.includes(recipe)) {
            matchedRecipes.push(recipe)
        }
        if (asianCuisine && recipe.cuisine === "Asian" && !matchedRecipes.includes(recipe)) {
            matchedRecipes.push(recipe)
        }
        if (middleeastCuisine && recipe.cuisine === "Middle-eastern" && !matchedRecipes.includes(recipe)) {
            matchedRecipes.push(recipe)
        }
    }

    //Parse the matched recipes to the MealPlanPage which will display them into grids
    return (matchedRecipes)
}


export default MealMatcher
