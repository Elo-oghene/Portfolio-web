import React from "react";
import pic1 from "../../public/images/tie.png"
import pic2 from "../../public/images/calculator.png"
import pic3 from "../../public/images/grocery-cart.png"
import pic4 from "../../public/images/hat.png"


const Projects = ()=>{
    return(
        <div className="w-full lg:px-40 px-8 flex flex-col gap-10" data-aos="fade-up">
            <h1 className="text-center font-extrabold text-[30px] md:text-[40px] text-[#3c3c3c] dark:text-white">PROJECTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                <a href="https://github.com/Elo-oghene/Afloat-boat" className="flex items-center justify-center">
                <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-white flex items-center justify-center dark:bg-white rounded-lg">
                    <img
                        className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-lg object-contain transition ease-in-out duration-200 hover:scale-105"
                        src={pic1}
                        alt="Project 1"
                    />
                </div>
                </a>
                <a href="https://github.com/Elo-oghene/Afloat-boat" className="flex items-center justify-center">
                <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-white flex items-center justify-center dark:bg-white rounded-lg">
                    <img
                        className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-lg object-contain transition ease-in-out duration-200 hover:scale-105"
                        src={pic2}
                        alt="Project 1"
                    />
                </div>
                </a>
                <a href="https://github.com/Elo-oghene/Afloat-boat" className="flex items-center justify-center transition ease-in-out duration-200 hover:scale-105">
                <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-white flex items-center justify-center dark:bg-white rounded-lg">
                    <img
                        className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-lg object-contain"
                        src={pic3}
                        alt="Project 1"
                    />
                </div>
                </a>
                <a href="https://github.com/Elo-oghene/Afloat-boat" className="flex items-center justify-center transition ease-in-out duration-200 hover:scale-105">
                <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-white flex items-center justify-center dark:bg-white rounded-lg">
                    <img
                        className="w-[150px] md:w-[200px] h-[200px] md:h-[200px]rounded-lg object-contain"
                        src={pic4}
                        alt="Project 1"
                    />
                </div>
                </a>
            </div>
        </div>
    )
}
export default Projects;