import React, { useState, useEffect } from "react";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Splashscreen from "./components/Splashscreen";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [showScroll, setShowScroll] = useState(false);
  const [showsplash,setShowSpash] = useState(true)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowSpash(false)
    },3000)
    return ()=> clearTimeout(timer);
  },[])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 300) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  if(showsplash){
    return(
      <Splashscreen/>
    )
  }

  return (
    <div className="w-full h-full light:bg-white dark:bg-gray-900 font-poppins">
      <button
        className="absolute top-14 right-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <i className='bx bx-moon text-2xl'></i>
        ) : (
          <i className='bx bx-sun text-2xl'></i>
        )}
      </button>
      <div className="flex flex-col gap-20 md:gap-20">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <button
        className={`scroll-to-top ${theme === 'dark' ? 'dark' : ''} ${showScroll ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        <i className='bx bx-up-arrow-alt text-2xl'></i>
      </button>
    </div>
  );
};

export default App;
