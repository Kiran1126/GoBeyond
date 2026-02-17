import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navigation/Navbar";
import loader from "./assets/Sandy Loading.gif"

const App = () => {

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  });

    // This array of objects is used for the links given in the Navigation Panel
    const linksArr = [
      {
        title: "Home",
        icon: "home",
        url: "/"
      },
      {
        title: "About",
        icon: "info",
        url: "/About"
      },
      {
        title: "Pages",
        icon: "pages",
        url: "/Pages"
      },
      {
        title: "Explore",
        icon: "explore",
        url: "/Explore"
      },
      {
        title: "Blog",
        icon: "news",
        url: "/Blog"
      },
      {
        title: "Contact",
        icon: "call",
        url: "/Contact"
      }
    ];

    return (
      <div className="overflow-x-hidden grid place-content-center h-screen w-screen">
        {Loading ? <img src={loader} alt="Loading" /> : 
          <Router>
            <Navbar links={linksArr} />
              <Routes>
                <Route 
                  path="/"
                  element={
                    <Banner />
                  }
                />
              </Routes>
            </Router> 
          }
      </div>
    )
  };

export default App;