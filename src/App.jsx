import React, { useState, useEffect, useLayoutEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Splashscreen from "./components/Splashscreen";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [showScroll, setShowScroll] = useState(false);
  const [showsplash, setShowSplash] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 300) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  if (showsplash) {
    return <Splashscreen />;
  }

  return (
    <div className="w-full h-full light:bg-white dark:bg-gray-900 font-poppins">
      <button
        className="fixed top-14 right-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded z-50"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <i className="bx bx-moon text-2xl"></i>
        ) : (
          <i className="bx bx-sun text-2xl"></i>
        )}
      </button>
      <div className="flex flex-col gap-20 md:gap-20">
        <Hero data-aos="fade-up" />
        <Projects data-aos="fade-up" />
        <Skills data-aos="fade-down" />
        <Contact data-aos="fade-up" />
      </div>
      <button
        className={`scroll-to-top ${theme === "dark" ? "dark" : ""} ${showScroll ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <i className="bx bx-up-arrow-alt text-2xl"></i>
      </button>
    </div>
  );
};

export default App;
