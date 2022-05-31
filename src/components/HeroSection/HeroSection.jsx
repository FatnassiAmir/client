import "./HeroSection.css";
import Typical from "react-typical";

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="hero-section-detail">
        <div className="hero-section-detail-container"> 
          <h2 className="hero-section-detail-name">
            Hi there, I'm <br />
            <span>Amir Fatnassi</span>
          </h2>
          <p style={{ color: "white" }}>
            {" "}
            Junior Developer{" "}
            <Typical
              className="typical"
              steps={[
                "Hello (❁´◡`❁)😃",
                500,
                "MERN Stack Dev 🎓",
                500,
                "full stack developer 💻",
                500,
              ]}
              loop={Infinity}
                wrapper="p"
            />
          </p>
          <p style={{ color: "white", marginTop: "10px" }}>building applications with front and back end operations.</p>
        </div>
      </div>
      <div className="hero-section-image">
        <div className="hero-section-image-container">
          <img src="/assets/fat.jpg" alt="" className="portfolio-pectuer" />
        </div>
      </div>
      <img src="/assets/shape-bg.png" alt="" className="wave" />  
    </div>
  );
};

export default HeroSection;
