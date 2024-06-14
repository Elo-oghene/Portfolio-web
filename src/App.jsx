import { useState,useEffect} from "react";
import React from "react";
import Hero from "./components/Hero";
const App = ()=>{
const [theme,setTheme] = useState("light")
useEffect(() => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [theme]);

const toggleTheme = () => {
  setTheme(theme === 'light' ? 'dark' : 'light');
};

  return(
    <div className="w-full h-[100vh] light:bg-white dark:bg-gray-900">
      <button
        className="absolute top-14 right-4 md:right-60 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <i className='bx bx-moon text-2xl'></i>
        ) : (
          <i className='bx bx-sun text-2xl'></i>
        )}
      </button>
      <Hero/>
    </div>
  )
}

export default App;