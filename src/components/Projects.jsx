import React from "react";

const Projects = ()=>{
    return(
        <div className="w-full lg:px-40 px-8 flex flex-col gap-10">
            <h1 className="text-center font-extrabold text-[40px] dark:text-white">PROJECTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                <a href="https://github.com/Elo-oghene/Afloat-boat" className="flex items-center justify-center">
                <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-white flex items-center justify-center dark:bg-white rounded-lg">
                    <img
                        className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-lg object-contain transition ease-in-out duration-200 hover:scale-105"
                        src="public/images/tie.png"
                        alt="Project 1"
                    />
                </div>
                </a>
                <a href="https://github.com/Elo-oghene/Afloat-boat" className="flex items-center justify-center">
                <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-white flex items-center justify-center dark:bg-white rounded-lg">
                    <img
                        className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-lg object-contain transition ease-in-out duration-200 hover:scale-105"
                        src="public/images/grocery-cart.png"
                        alt="Project 1"
                    />
                </div>
                </a>
                <a href="https://github.com/Elo-oghene/Afloat-boat" className="flex items-center justify-center transition ease-in-out duration-200 hover:scale-105">
                <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-white flex items-center justify-center dark:bg-white rounded-lg">
                    <img
                        className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-lg object-contain"
                        src="public/images/calculator.png"
                        alt="Project 1"
                    />
                </div>
                </a>
                <a href="https://github.com/Elo-oghene/Afloat-boat" className="flex items-center justify-center transition ease-in-out duration-200 hover:scale-105">
                <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-white flex items-center justify-center dark:bg-white rounded-lg">
                    <img
                        className="w-[150px] md:w-[200px] h-[200px] md:h-[200px]rounded-lg object-contain"
                        src="public/images/hat.png"
                        alt="Project 1"
                    />
                </div>
                </a>
            </div>
        </div>
    )
}
export default Projects;