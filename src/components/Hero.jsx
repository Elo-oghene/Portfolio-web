import React from "react";
import image from "../assets/Hero-image.png"
const Hero = ()=>{
  return(
    <div className=" w-full md:h-[500px] flex flex-col md:flex-row items-center justify-center pt-24 gap-10 md:gap-40">
        <div className="md:hidden">
            <img src="src/assets/Hero-image.png" alt="images goes here" />
        </div>
        <div className="w-full md:w-[300px] flex flex-col items-center justify-center gap-4 dark:text-white">
            <h1 className="font-bold text-[30px]">CHRISTOPHER TINA</h1>
            <span className="text-lg tracking-wider">FRONTEND DEVELOPER</span>
            <div className="flex gap-6">
                <i class='bx bxl-twitter text-[35px]'></i>
                <i class='bx bxl-github text-[35px]' ></i>
                <i class='bx bxl-linkedin text-[35px]' ></i>
            </div>
            <p className="text-xl tracking-wider text-center">With a passion for developing modern React web apps for commercial businesses.</p>
            <button className="bg-[#0987F2] px-4 py-3 rounded-xl text-white">Resume</button>
        </div>


        {/* images goes here */}
        <div className="hidden md:flex">
            <img src="src/assets/Hero-image.png" alt="images goes here" />
        </div>
    </div>
  )
}

export default Hero;