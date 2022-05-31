import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import MyProject from "./components/MyProject/MyProject";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { Home, DesktopMac, AssignmentInd, CastForEducation } from "@material-ui/icons";

function App() {
  const [scrol, setScrol] = useState(false)
  window.onscroll = () => {
    setScrol(window.pageYOffset > 70 ? true : false);
    return () => (window.onscroll = null)
  }
  return (
    <div className="App">
      <NavBar />
      <div className="portfolio-container">
        <HeroSection />
        <AboutMe />
        <MyProject />
        <Resume />
        <Footer />
        <a className={!scrol ? "menue-icon right-one" : "menue-icon right-one one"} href="#Home"><Home/></a>
        <a className={!scrol ? "menue-icon right-tow" : "menue-icon right-tow tow"} href="#AboutMe"><AssignmentInd/></a>
        <a className={!scrol ? "menue-icon right-three" : "menue-icon right-three three"} href="#Projects"><DesktopMac/></a>
        <a className={!scrol ? "menue-icon right-four" : "menue-icon right-four four"} href="#Resume"><CastForEducation/></a>
      </div>
    </div>
  );
}

export default App;
