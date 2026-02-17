import GoBeyond_Dark from "./../../assets/Logo/GoBeyond_Dark.png"
import GoBeyond_Light from "./../../assets/Logo/GoBeyond.png"
import { useState, useEffect } from "react";
import Links from "./Links";

const Navbar = ({ links }) => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDarkMode(saved);
  }, []);

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <section className="absolute top-0 h-auto w-screen p-1 z-10 flex justify-around items-center transition-colors duration-500 ease-in-out bg-transparent text-gray-900 dark:bg-gray-900 dark:text-amber-50">
      <div className="h-fulll w-fulll">
        <img className="h-16 w-20" src = {
          darkMode ? GoBeyond_Dark : GoBeyond_Light
        } alt="logo" />
      </div>
      <ul className="flex gap-10 dark:text-amber-50">
        {
          links.map((temp, index) => (
            <li key={index}>
              <Links
                Title={temp.title}
                Icon={temp.icon}
                Url={temp.url}
              />
            </li>
          ))
        }
      </ul>
      <div>
        <button className="cursor-pointer dark:text-amber-50" onClick={() => setDarkMode(!darkMode)}>
          <span className="material-symbols-outlined">
            {darkMode ? "sunny" : "dark_mode"}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Navbar;