import React from 'react';

const RecipeCard = ({ name, img }) => {
    return (
        <div className="max-w-md bg-green-100 border border-green-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 recipe-card">
            <a href="#">
                <img className="rounded-t-lg" src={img} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-small text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View Recipe
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default RecipeCard;
