import salad from "../assets/healthy-green-goddess-salad-4.jpg"

const Hero = ({ title = "Simplify your meals", subtitle = "Generate a 7-day meal plan with MealMate"}) => {
  return (
    <div>
        <section className="bg-green-600 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                {title}
            </h1>
            <p className="my-4 text-xl text-white">
                {subtitle}
            </p>
            <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 mt-5 rounded-full">
                Create an account
            </button>
            </div>
        </div>
        </section>

        <section className="bg-white dark:bg-gray-900 ml-20 mr-20 mt-16">
        <div className="flex flex-row flex-nowrap justify-between justify-items-stretch">
            <div className="flex-auto">
            <   h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">100+ recipes  <br /> 10+ cuisines</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Affordable and easy-to-make recipes to allow you to focus on enjoying flavorful meals without spending hours in the kitchen.</p>
                <button className="bg-white hover:bg-gray-700 hover:text-white text-black border-2 border-slate-600 font-bold py-2 px-4 mt-5 rounded-full">
                    Create an account
                </button>
            </div>
            <div className="flex-auto ml-20">
                <div className="hidden md:mt-0 md:col-span-5 md:flex max-w-65">
                    <img src={salad} alt="mockup"/>
                </div> 
            </div>
        </div>


        <div className="grid px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ml-10 mr-10 pl-5 pl-5">
            <div className="mr-auto place-self-center lg:col-span-6">
                
            </div>
                           
        </div>
        </section>

    </div>
  )
}
export default Hero