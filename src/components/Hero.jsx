import React, { useState } from "react";
import image from "/images/imagegirl.png"
import resumePDF from "../assets/resume.pdf"
import { Typewriter } from 'react-simple-typewriter';
const Hero = ()=>{
    const [showCursor, setShowCursor] = useState(true);
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Christopher_Tina_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return(
    <div className=" w-full px-8 flex flex-col md:flex-row items-center mt-20 justify-center pt-24 gap-10 md:gap-40" data-aos="fade-up">
        <div className="md:hidden w-[200px]` ">
            <img src={image}className="wavering-hover" alt="images goes here" />
        </div>
        <div className="w-full md:w-[300px] flex flex-col items-center justify-center gap-4 dark:text-white">
            <h1 className="font-bold text-[30px] text-center text-[#3c3c3c] dark:text-white">
            <Typewriter
            words={['CHRISTOPHER TINA']}
            loop={2}
            cursor={showCursor}
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={() => setTimeout(() => setShowCursor(false), 500)} 
          />
            </h1>
            <span className="text-lg tracking-wider text-[#3c3c3c] dark:text-white">FRONTEND DEVELOPER</span>
            <div className="flex gap-6">
                <a href="https://wa.me/2347080587195" target="_blank" rel="noopener noreferrer"><i class='bx bxl-whatsapp text-[30px]'></i></a>
                <a href="https://www.linkedin.com/in/Olokor"><i class='bx bxl-linkedin text-[30px]' ></i></a>
                <a href="https://github.com/Elo-oghene"><i class='bx bxl-github text-[30px]' ></i></a>
                
            </div>
            <p className="text-sm md:text-xl tracking-wider text-center text-[#3c3c3c] dark:text-white">With a passion for developing modern React web apps for commercial businesses.</p>
            <button className="bg-[#eb8346] px-8 py-3 rounded-lg text-white transition ease-in-out duration-200 hover:scale-105" onClick={handleDownload}>Resume</button>
        </div>


        {/* images goes here */}
        <div className="hidden md:flex w-[350px]">
            <img src={image} className="wavering-hover" alt="images goes here" />
        </div>
    </div>
  )
}

export default Hero;