import NavBarCopy from "../components/NavbarCopy"
import RecipeCard from "../components/RecipeCard"
import InfoCard from "../components/InfoCard"
import PopUp from "../components/popup"
import { useLocation } from 'react-router-dom';


const MealPlanPage = () => {
  //Print all the matched recipes to the console in the matchedRecipes array
  console.log("TESTING")

  // Load MealMatcher results from "navigate("/mealplan", {state: {mealMatcherResults: mealMatcherResults}})"
  console.log("RESULTS LOADED")
  let MealMatcherResults = useLocation().state['prefs']
  //Pick 14 random recipes from prefs and display them in the RecipeCard component


  // Pick 14 random recipes from prefs and display them in the RecipeCard component
  const randomRecipes = MealMatcherResults.slice(0, 14);

  return (
    <>
      <NavBarCopy />

      <br></br>
      <br></br>

      <h1 className="text-4xl text-center">
        Your Meal Plan Has Been Generated!
      </h1>

      <br></br>
      <br></br>

      <div className="font-bold grid grid-cols-8 gap-4 ap-4 mx-10">
        <div></div>
        <div><InfoCard name="Monday" /></div>
        <div><InfoCard name="Tuesday" /></div>
        <div><InfoCard name="Wednesday" /></div>
        <div><InfoCard name="Thursday" /></div>
        <div><InfoCard name="Friday" /></div>
        <div><InfoCard name="Saturday" /></div>
        <div><InfoCard name="Sunday" /></div>

      </div>

      <br></br>

      <div className="grid grid-cols-8 gap-4 ap-4 mx-10">
        <div className="font-bold text-center my-10 text-xl ">Lunch</div>
        {randomRecipes.slice(0, 7).map((recipe, index) => (
          <div key={index}><RecipeCard name={recipe.name} img={recipe.imgurl}/></div>
        ))}
      </div>

      <br></br>

      <div className="grid grid-cols-8 gap-4 ap-4 mx-10">
        <div className="font-bold text-center my-10 text-xl ">Dinner</div>
        {randomRecipes.slice(7, 14).map((recipe, index) => (
          <div key={index}><RecipeCard name={recipe.name} img={recipe.imgurl}/></div>
        ))}
      </div>

    </>
  )















  //create a constant using returne of MealMatcher

  }

export default MealPlanPage