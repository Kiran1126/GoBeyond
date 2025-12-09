import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navigation/Navbar";

const App = () => {

    // This array of objects is used for the links given in the Navigation Panel
    const linksArr = [
      {
        title: "Home",
        icon: "home",
        url: "/Home"
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
        <Routes>
          <Route 
            path="/"
            element={
              <Banner />
            }
          />
        </Routes>
      </Router> 
    )
  };

export default App;