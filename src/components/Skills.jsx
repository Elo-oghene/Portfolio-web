import React from "react";

const Skills = () => {
  return (
    <div className="w-full px-8 flex flex-col items-center justify-center" data-aos="fade-up">
      <div className="text-center font-extrabold text-[30px] md:text-[40px] text-[#3c3c3c] dark:text-white">Skills</div>
      <div className="flex flex-wrap gap-8 mt-4 justify-center">
        <div className="flex items-center justify-center">
          <i className='bx bx-check text-[30px] dark:text-white'></i>
          <p className="text-[15px] md:text-[20px] ml-2 dark:text-white">HTML</p>
        </div>
        <div className="flex items-center justify-center">
          <i className='bx bx-check text-[30px] dark:text-white'></i>
          <p className="text-[15px] md:text-[20px] ml-2 dark:text-white">CSS</p>
        </div>
        <div className="flex items-center justify-center">  
          <i className='bx bx-check text-[30px] dark:text-white'></i>
          <p className="text-[15px] md:text-[20px] ml-2 dark:text-white">JavaScript</p>
        </div>
        <div className="flex items-center justify-center">
          <i className='bx bx-check text-[30px] dark:text-white'></i>
          <p className="text-[15px] md:text-[20px] ml-2 dark:text-white">TypeScript</p>
        </div>
        <div className="flex items-center justify-center">
          <i className='bx bx-check text-[30px] dark:text-white'></i>
          <p className="text-[15px] md:text-[20px] ml-2 dark:text-white">Node</p>
        </div>
        <hr className="w-full  border-[#3c3c3c] dark:border-white my-8" />
      </div>

      <div className="flex flex-wrap gap-8 mt-4 justify-center">
        <div className="flex items-center justify-center">
          <i className='bx bx-check text-[30px] dark:text-white'></i>
          <p className="text-[15px] md:text-[20px] ml-2 dark:text-white">React</p>
        </div>
        <div className="flex items-center justify-center">
          <i className='bx bx-check text-[30px] dark:text-white'></i>
          <p className="text-[15px] md:text-[20px] ml-2 dark:text-white">Angular</p>
        </div>
        <div className="flex items-center justify-center">
          <i className='bx bx-check text-[30px] dark:text-white'></i>
          <p className="text-[15px] md:text-[20px] ml-2 dark:text-white">Vue</p>
        </div>
        <div className="flex items-center justify-center">
          <i className='bx bx-check text-[30px] dark:text-white'></i>
          <p className="text-[15px] md:text-[20px] ml-2 dark:text-white">Tailwind Css</p>
        </div>
        <hr className="w-full border-[#3c3c3c] dark:border-white my-8" />
      </div>

      <div className="flex flex-wrap gap-8 mt-4 justify-center">
        {/* <div className="flex items-center justify-center">
          <i className='bx bx-check text-[30px] dark:text-white'></i>
          <p className="text-[15px] md:text-[20px] ml-2 dark:text-white">Redux</p>
        </div> */}
        {/* <div className="flex items-center justify-center">
          <i className='bx bx-check text-[30px] dark:text-white'></i>
          <p className="text-[15px] md:text-[20px] ml-2 dark:text-white">Webpack</p>
        </div>
        <div className="flex items-center justify-center">
          <i className='bx bx-check text-[30px] dark:text-white'></i>
          <p className="text-[15px] md:text-[20px] ml-2 dark:text-white">Git</p>
        </div>
        <div className="flex items-center justify-center">
          <i className='bx bx-check text-[30px] dark:text-white'></i>
          <p className="text-[15px] md:text-[20px] ml-2 dark:text-white">Gest</p>
        </div>
        <div className="flex items-center justify-center">
          <i className='bx bx-check text-[30px] dark:text-white'></i>
          <p className="text-[15px] md:text-[20px] ml-2 dark:text-white">Bootsrap</p>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
