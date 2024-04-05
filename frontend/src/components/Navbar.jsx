import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"

const NavBar = () => {

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
               <NavLink to="/login" className="text-white self-center font-bold mr-4 pt-1">
                  Log in
               </NavLink>
            </div>
        </div>
        </nav>


    /* IGNORE */
    // <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    // <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
    //         <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="MealMate Logo" /> {/* We need a logo */}
    //         <span className="self-center text-2xl font-bold whitespace-nowrap text-emerald-800">MealMate</span>
    //     </a>
    //     {/* <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
    //         <span className="sr-only">Open main menu</span>
    //         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
    //         </svg>
    //     </button> */}

    //     <div className="flex flex-row flex-nowrap justify-between justify-items-stretch flex-grow-1">
    //         <a href="/" className="self-start">
    //             Create Meal Plan
    //         </a>
    //         <div className="flex-grow-1"></div>
    //         <a href="/" className="self-end">
    //             Sign in
    //         </a>
    //     </div>

    //     {/* <div className="flex flex-wrap justify-between content-evenly             hidden w-full md:block md:w-auto" id="navbar-solid-bg">
    //     <a href="/" >
    //         Create Meal Plan
    //     </a>
    //     <ul className="flex flex-wrap justify-between content-evenly    font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
    //         <li>
    //         <a href="/" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Create Meal Plan</a>
    //         </li>
    //         <li>
    //         <a href="/" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign in</a>
    //         </li>
    //     </ul>
    //     </div> */}
    // </div>
    // </nav>
  )
}
export default NavBar