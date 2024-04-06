import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"

import HomePage from "./pages/HomePage";
import CreateMealPlanPage from "./pages/CreateMealPlanPage";
import LogInPage from "./pages/LogInPage";
import NotFoundPage from "./pages/NotFoundPage";
import MealPlanPage from "./pages/MealPlanPage";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/">
    <Route index element={<HomePage />}/>
    <Route path="/createmealplan" element={<CreateMealPlanPage />}/>
    <Route path="/login" element={<LogInPage />}/>
    <Route path="/mealplan" element={<MealPlanPage />}/>
    <Route path="*" element={<NotFoundPage />}/>
  </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}
export default App