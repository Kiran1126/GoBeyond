import { useState } from "react";
import Links from "./Links";

const Navbar = ({ links }) => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className="absolute top-0 h-auto w-screen p-1 z-10 flex justify-around items-center bg-transparent">
      <div className="h-fulll w-fulll">
        <img className="h-16 w-20" src="Logo_GoBeyond.png" alt="logo" />
      </div>
      <ul className="flex gap-10">
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
        <button className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
          <span className="material-symbols-outlined">
            {darkMode ? "sunny" : "dark_mode"}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Navbar;