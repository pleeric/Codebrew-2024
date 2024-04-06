import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"

const NavBarCopy = () => {

  return (
        <nav className="border-b-2 border-green-200 bg-green-600 dark:bg-green-600 dark:border-gray-700">
        <div className="flex flex-row flex-nowrap justify-between justify-items-stretch">
            <NavLink to="/" className="flex flex-row flex-nowrap justify-between justify-items-stretch">
                <img src={logo} className="h-14 p-1.5 ml-2" alt="MealMate Logo" /> {/* We need a logo */}
                <span className="self-center text-3xl font-bold whitespace-nowrap text-white flex-grow-1 pt-1">MealMate</span>
            </NavLink>
            <div className="flex-auto flex-grow flex flex-row flex-nowrap justify-end justify-items-stretch">
               {/* <a href="/" className={"text-white self-center ml-4 pt-1"}>
                   Create Meal Plan
               </a> */}
               <NavLink to="/" className="text-white self-center font-bold mr-4 pt-1">
                  Log out
               </NavLink>
            </div>
        </div>
        </nav>
  )
}
export default NavBarCopy