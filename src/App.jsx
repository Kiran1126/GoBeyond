import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navigation/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer/Footer";
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

    const SocialLinks = [
      {
        url: "https://www.facebook.com/kiran.samanta.7568",
        network: "facebook"
      },
      {
        url: "https://www.instagram.com/i.__.am.__.kiran/?hl=en",
        network: "instagram"
      },
      {
        url: "https://www.linkedin.com/in/kiran-samanta-732604258/",
        network: "linkedin"
      },
      {
        url: "https://github.com/Kiran1126",
        network: "github"
      },
      {
        url: "https://discord.gg/hGhBXRvg",
        network: "discord"
      } 
    ]

    return (
      <div className="overflow-x-hidden grid place-content-center">
        {Loading ? <img src={loader} alt="Loading" /> : 
          <Router>
            <Navbar links={linksArr} />
              <Routes>
                <Route 
                  path="/"
                  element={
                    <>
                      <Banner />
                      <Footer icons={SocialLinks} />
                    </>
                  }
                />
                <Route 
                  path="/Home"
                  element={
                    <Navigate to="/" />
                  }
                />
                <Route 
                  path="/Footer"
                  element={
                    <Footer icons={SocialLinks} />
                  }
                />
              </Routes>
            </Router> 
          }
      </div>
    )
  };

export default App;