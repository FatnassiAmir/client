import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-container-head" id="AboutMe">
        <h1 className="about-me-container-head-title">About Me</h1>
        <span className="about-me-container-head-sou-title">
          Why Choose Me?
        </span>
        <div className="line">
          <span className="line-one"></span>
          <span className="line-tow"></span>
          <span className="line-one"></span>
        </div>
      </div>
      <div className="about-me-container-body">
        <div className="about-me-container-body-photo_container">
          <img
            src="/assets/me.jpg"
            alt=""
            className="about-me-container-body-photo"
          />
        </div>
        <div className="about-me-container-body-dtail">
          <p className="desc">
            My name is amir fatnassi, I am 31 years old, I have a master degree
            in "Pilotage et réseaux industriels" from ISSAT university in 2018,
            I worked as senior maintenance technician for 3 years and I want to
            change my career path because now i found my passion, i found what i
            am good at. And day after day i become more confident in myself and
            proud of it because i am doing what i like the most, coding. My
            period of training, Full stack JS, was tough but amazing, i learned
            a lot. So that helped me to become a junior Full Stack JS Developer
          </p>
          <div>
            <h4>Here are a Few Highlights:</h4>
            <div className="item-list">
              <div className="dott"></div>
              <span>Full Stack web development</span>
            </div>
            <div className="item-list">
              <div className="dott"></div>
              <span>React Js and Node Js</span>
            </div>
            <div className="item-list">
              <div className="dott"></div>
              <span>Redux for State Mnanagement</span>
            </div>
            <div className="item-list">
              <div className="dott"></div>
              <span>Building REST API</span>
            </div>
            <div className="item-list">
              <div className="dott"></div>
              <span>Managing database</span>
            </div>
          </div>
          <div className="btn-container">
            <a className="about-me-btn projects" href="#Projects">
              {" "}
              My projects
            </a>
            <a className="about-me-btn resume" href="#Resume">
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
