import { useState } from "react";
import "./MyProject.css";

const MyProject = () => {
  const [slid, setSlid] = useState(0);
  const handelSlid = (way) => {
    way === "left"
      ? setSlid(slid > 0 ? slid - 1 : 2)
      : setSlid(slid < 2 ? slid + 1 : 0);
  };
  return (
    <div className="my-projects-container" id="Projects">
      <div
        className="about-me-container-head"
        style={{
          zIndex: "999",
          position: "absolute",
          top: "10px",
          color: "white",
        }}
      >
        <h2
          className="about-me-container-head-title"
          style={{ color: "white", fontWeight: "500" }}
        >
          My Projects
        </h2>
        <span className="about-me-container-head-sou-title">
          My formal Bio Details
        </span>
        <div className="line">
          <span className="line-one"></span>
          <span className="line-tow"></span>
          <span className="line-one"></span>
        </div>
      </div>
      <div
        className="my-projects-slider"
        style={{ transform: `translateX(-${slid * 100}vw)` }}
      >
        <div className="my-projects-slider-container">
          <div className="my-porjects-slider-content">
            <div className="slider-content-left">
              <div className="project-information">
                <h1 className="project-information-title">Netflex Clon</h1>
                <div>
                  <h3>Technologies :</h3>
                  <div className="item-list">
                    <div className="dott"></div>
                    <span>FRONTEND : React JS, sass</span>
                  </div>
                  <div className="item-list">
                    <div className="dott"></div>
                    <span>BACKEND : Node JS , express JS</span>
                  </div>
                  <div className="item-list">
                    <div className="dott"></div>
                    <span>DATABASE : mongobd</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-content-right">
              <div className="slider-content-right1">
                <img
                  src="/assets/Capture1.png"
                  alt=""
                  className="progect-image"
                />
              </div>
              <div className="slider-content-right2">
                <div className="slider-content-right2-row">
                  <img
                    src="/assets/Capture3.png"
                    alt=""
                    className="progect-image2"
                  />
                </div>
                <div className="slider-content-right2-row">
                <video
                  src="/assets/NetFlix-App.mp4"
                  // autoPlay
                  progress
                  controls
                  className="progect-image2"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-projects-slider-container">
          <div className="my-porjects-slider-content">
            <div className="slider-content-left">
              <div className="project-information">
                <h1 className="project-information-title">Admin Dashbord</h1>
                <div>
                  <h3>Technologies :</h3>
                  <div className="item-list">
                    <div className="dott"></div>
                    <span>FRONTEND : React JS, css</span>
                  </div>
                  <div className="item-list">
                    <div className="dott"></div>
                    <span>BACKEND : Node JS , express JS</span>
                  </div>
                  <div className="item-list">
                    <div className="dott"></div>
                    <span>DATABASE : mongobd</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-content-right">
              <div className="slider-content-right1">
                <img
                  // src="/assets/Capture6.png"
                  src="/assets/Capture5.png"
                  alt=""
                  className="progect-image"
                />
              </div>
              <div className="slider-content-right2">
                <div className="slider-content-right2-row">
                  <img
                    src="/assets/Capture4.png"
                    alt=""
                    className="progect-image2"
                  />
                </div>
                <div className="slider-content-right2-row">
                <video
                  src="/assets/Admin_Dash.mp4"
                  // autoPlay
                  progress
                  controls
                  className="progect-image2"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-projects-slider-container">
          <div className="my-porjects-slider-content">
            <div className="slider-content-left">
              <div className="project-information">
                <h1 className="project-information-title">social App</h1>
                <div>
                  <h3>Technologies :</h3>
                  <div className="item-list">
                    <div className="dott"></div>
                    <span>FRONTEND : React JS, css, socket io</span>
                  </div>
                  <div className="item-list">
                    <div className="dott"></div>
                    <span>BACKEND : Node JS, express JS, socket io</span>
                  </div>
                  <div className="item-list">
                    <div className="dott"></div>
                    <span>DATABASE : mongobd</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-content-right">
              <div className="slider-content-right1">
                <img
                  src="/assets/cap1.png"
                  alt=""
                  className="progect-image"
                />
              </div>
              <div className="slider-content-right2">
                <div className="slider-content-right2-row">
                  <img
                    src="/assets/cap2.png"
                    alt=""
                    className="progect-image2"
                  />
                </div>
                <div className="slider-content-right2-row">
                <video
                  src="/assets/Social-App.mp4"
                  // autoPlay
                  progress
                  controls
                  className="progect-image2"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/shape-bg.png" alt="" className="wave" />
      <img
        src="/assets/arrow.png"
        alt=""
        className="arrow-left"
        onClick={() => handelSlid("left")}
      />
      <img
        src="/assets/arrow.png"
        alt=""
        className="arrow-right"
        onClick={() => handelSlid()}
      />
    </div>
  );
};

export default MyProject;
