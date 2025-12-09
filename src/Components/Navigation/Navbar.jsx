import { useState } from "react";
import Links from "./Links";

const navbar = ({ links }) => {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <section className="h-auto 100vw p-2 flex justify-around items-center bg-neutral-200">
      <div className="h-fulll w-fulll">
        <img className="h-18 w-24" src="Logo_GoBeyond.png" alt="logo" />
      </div>
      <ul className="flex gap-5">
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
        <button onClick={() => setDarkMode(!darkMode)}>
          <span className="material-symbols-outlined">
            {darkMode ? "sunny" : "dark_mode"}
          </span>
        </button>
      </div>
    </section>
  );
};

export default navbar;