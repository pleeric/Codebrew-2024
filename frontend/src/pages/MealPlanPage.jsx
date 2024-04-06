import NavBarCopy from "../components/NavbarCopy"
import RecipeCard from "../components/RecipeCard"
import InfoCard from "../components/InfoCard"

const MealPlanPage = () => {
  return (
    <>
        <NavBarCopy />
        
        <br></br>
        <br></br>

        <h1 class="text-4xl text-center">
          Your Meal Plan Has Been Generated!
        </h1>

        <br></br>
        <br></br>

        <div class="font-bold grid grid-cols-8 gap-4 ap-4 mx-10">
          <div></div>
          <div><InfoCard name = "Monday" /></div>
          <div><InfoCard name = "Tuesday"/></div>
          <div><InfoCard name = "Wednesday"/></div>
          <div><InfoCard name = "Thursday"/></div>
          <div><InfoCard name = "Friday"/></div>
          <div><InfoCard name = "Saturday"/></div>
          <div><InfoCard name = "Sunday"/></div>
        </div>

        <br></br>

        <div class="grid grid-cols-8 gap-4 ap-4 mx-10">
          <div class="font-bold text-center my-10 text-xl ">Lunch</div>
          <div><RecipeCard name = "Beef Lasagna" /></div>
          <div><RecipeCard name = "Chicken Lasagna"/></div>
          <div><RecipeCard name = "Pork Lasagna"/></div>
          <div><RecipeCard name = "Duck Lasagna"/></div>
          <div><RecipeCard name = "Lamb Lasagna"/></div>
          <div><RecipeCard name = "Quail Lasagna"/></div>
          <div><RecipeCard name = "Venison Lasagna"/></div>
        </div>

        <br></br>

        <div class="grid grid-cols-8 gap-4 ap-4 mx-10">
          <div class="font-bold text-center my-10 text-xl ">Dinner</div>
          <div><RecipeCard name = "A Pasta"/></div>
          <div><RecipeCard name = "B Pasta"/></div>
          <div><RecipeCard name = "C Pasta"/></div>
          <div><RecipeCard name = "D Pasta"/></div>
          <div><RecipeCard name = "E Pasta"/></div>
          <div><RecipeCard name = "F Pasta"/></div>
          <div><RecipeCard name = "G Pasta"/></div>
        </div>

    </>
  )
}

export default MealPlanPage