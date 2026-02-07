import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navigation/Navbar";

const App = () => {

  //const [Loading, setLoading] = useState(false);

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
      <Router>
        <Navbar links={linksArr} />
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route 
              path="/"
              element={
                <Banner />
              }
            />
          </Routes>
        </div>
      </Router> 
    )
  };

export default App;