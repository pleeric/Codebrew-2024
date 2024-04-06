import { useState } from "react"
import { useNavigate } from "react-router-dom"


const CreateMealPlanForm = () => {

  const [vegan, setVegan] = useState(false)
  const [glutenFree, setglutenFree] = useState(false)
  const [westernCuisine, setWesternCuisine] = useState(false)
  const [asianCuisine, setAsianCuisine] = useState(false)
  const [africanCuisine, setAfricanCuisine] = useState(false)
  const [budget, setBudget] = useState("< $5 a meal")

  const handleOnChangeVegan = () => {
    setVegan(!vegan);
  };

  const handleOnChangeGlutenFree = () => {
    setglutenFree(!glutenFree);
  };

  const handleOnChangeWesternCuisine = () => {
    setWesternCuisine(!westernCuisine);
  };

  const handleOnChangeAsianCuisine = () => {
    setAsianCuisine(!asianCuisine);
  };

  const handleOnChangeAfricanCuisine = () => {
    setAfricanCuisine(!africanCuisine);
  };
  
  const onRadioButtonChange = (e) => {
    // console.log(e.target.value)
    setBudget(e.target.value);
  };

  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()

    const foodPreferences = {
        vegan: vegan,
        glutenFree: glutenFree,
        cuisine: {
            westernCuisine,
            asianCuisine,
            africanCuisine,
        },
        budget: budget,
    }

    return navigate("/mealplan")
  }

  return (
    <>
    <div className="flex flex-col flex-nowrap justify-center justify-items-center self-stretch	" >
    <form onSubmit={submitForm} className="max-w-sm mx-auto pt-20 pb-20">
    
        <h1 className="text-4xl font-black pb-10 text-nowrap">Create Your Meal Plan</h1>

        {/* Dietary preferences */}
        <h1 className="text-2xl font-bol pb-3 text-nowrap">Dietary preferences</h1>
        <fieldset>
        <legend className="sr-only">Dietary preferences checkboxes</legend>

            <div className="flex items-center mb-4">
                <input value={vegan} onChange={handleOnChangeVegan} 
                id="checkbox-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vegan</label>
            </div>

            <div className="flex items-center mb-4">
                <input value={glutenFree} onChange={handleOnChangeGlutenFree} 
                id="checkbox-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="checkbox-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gluten Free</label>
            </div>

        </fieldset>

        {/* Cuisines */}
        <h1 className="text-2xl font-bol pt-4 text-nowrap">Cuisines</h1>
        <h1 className="text-sm font-thin text-gray-600 pb-2 text-nowrap">Selected cuisines will be prioritised</h1>
        <fieldset>
        <legend className="sr-only">Cuisines checkboxes</legend>

            <div className="flex items-center mb-4">
                <input value={westernCuisine} onChange={handleOnChangeWesternCuisine} 
                id="checkbox-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Western</label>
            </div>

            <div className="flex items-center mb-4">
                <input value={asianCuisine} onChange={handleOnChangeAsianCuisine} 
                id="checkbox-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="checkbox-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asian</label>
            </div>

            <div className="flex items-center mb-4">
                <input value={africanCuisine} onChange={handleOnChangeAfricanCuisine} 
                id="checkbox-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="checkbox-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">African</label>
            </div>
        </fieldset>
        

        {/* Cost */}
        <h1 className="text-2xl font-bol pt-7 pb-2.5 text-nowrap">Weekly Budget</h1>
        <fieldset>
            <legend className="sr-only">Weekly Budget radio buttons</legend>

            <div className="flex items-center mb-4">
                <input onChange={onRadioButtonChange}
                defaultChecked id="budget-option-1" type="radio" name="budget" value="< $5 a meal" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="budget-option-1" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    &lt; $5 a meal 
                </label>
            </div>

            <div className="flex items-center mb-4">
                <input onChange={onRadioButtonChange}
                id="budget-option-2" type="radio" name="budget" value="$5 to $10 a meal" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="budget-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                   $5 to $10 a meal
                </label>
            </div>

            <div className="flex items-center mb-4">
                <input onChange={onRadioButtonChange}
                id="budget-option-3" type="radio" name="budget" value="> $10 a meal" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="budget-option-3" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                 &gt; $10 a meal
                </label>
            </div>
        </fieldset>

        {/* Submit */}
        <button type="submit" className="text-white mt-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

    </form>
    </div>  
    </>
  )
}
export default CreateMealPlanForm