import NavBarCopy from "../components/NavbarCopy"
import RecipeCard from "../components/RecipeCard"

const MealPlanPage = () => {
  return (
    <>
        <NavBarCopy />
        
        <br></br>
        <br></br>


        <div class="grid grid-cols-7 gap-4 ap-4 mx-10">
          <div><RecipeCard name = "Beef Lasagna" /></div>
          <div><RecipeCard name = "Chicken Lasagna"/></div>
          <div><RecipeCard name = "Pork Lasagna"/></div>
          <div><RecipeCard name = "Duck Lasagna"/></div>
          <div><RecipeCard name = "Lamb Lasagna"/></div>
          <div><RecipeCard name = "Quail Lasagna"/></div>
          <div><RecipeCard name = "Venison Lasagna"/></div>
        </div>

        <br></br>
        <br></br>

        <div class="grid grid-cols-7 gap-4 ap-4 mx-10">
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