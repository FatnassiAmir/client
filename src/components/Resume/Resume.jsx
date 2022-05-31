import "./Resume.css";
import { BarChart, DesktopMac, EmojiSymbols, School } from "@material-ui/icons";
import { useState } from "react";

const Resume = () => {
  const [active, setActive] = useState("one");
  return (
    <div className="resume-container" id="Resume">
      <div className="about-me-container-head">
        <h1 className="about-me-container-head-title">Resume</h1>
        <span className="about-me-container-head-sou-title">
          My formal Bio Details
        </span>
        <div className="line">
          <span className="line-one"></span>
          <span className="line-tow"></span>
          <span className="line-one"></span>
        </div>
      </div>
      <div className="resume-sou-container">
        <div className="resume-sou-container-minu">
          <div className="motif"></div>
          <div className="resume-sou-container-minu-items">
            <div
              className={
                active === "one"
                  ? "resume-sou-container-minu-item active"
                  : "resume-sou-container-minu-item"
              }
              onClick={() => setActive("one")}
            >
              <a href="#one" className="link">
                <School className="minue-itel-icon" />
                <span className="minue-item">Education</span>
              </a>
            </div>
            <div
              className={
                active === "tow"
                  ? "resume-sou-container-minu-item active"
                  : "resume-sou-container-minu-item"
              }
              onClick={() => setActive("tow")}
            >
              <a href="#tow" className="link">
                <DesktopMac className="minue-itel-icon" />
                <span className="minue-item">Programming Skills</span>
              </a>
            </div>
            <div
              className={
                active === "three"
                  ? "resume-sou-container-minu-item active"  
                  : "resume-sou-container-minu-item"
              }
              onClick={() => setActive("three")}
            >
              <a href="#three" className="link">
                <BarChart className="minue-itel-icon" />
                <span className="minue-item">Projects</span>
              </a>
            </div>
            <div
              className={
                active === "four"
                  ? "resume-sou-container-minu-item active"
                  : "resume-sou-container-minu-item"
              }
              onClick={() => setActive("four")}
            >
              <a href="#four" className="link">
                <EmojiSymbols className="minue-itel-icon" />
                <span className="minue-item">Interests</span>
              </a>
            </div>
          </div>
        </div>
        <div className="resume-sou-container-show">
          <div className="content" id="one">
            <div className="content-item">
              <div className="content-item-head">
                <div className="content-item-head-tit">
                  <div className="dot"></div>
                  <span className="content-item-head-title">
                    GoMyCode, sousse
                  </span>
                </div>
                <div className="content-item-head-date">2021</div>
              </div>
              <span className="content-item-body">
                Formation professionnelle Certifiée en FULL-STACK JAVASCRIPT
              </span>
            </div>
            <div className="content-item">
              <div className="content-item-head">
                <div className="content-item-head-tit">
                  <div className="dot"></div>
                  <span className="content-item-head-title">
                    ISSAT, kairouan
                  </span>
                </div>
                <div className="content-item-head-date">2016-2018</div>
              </div>
              <span className="content-item-body">
              Master Professionnel en Pilotage et réseau industriel 
              </span>
            </div>
            <div className="content-item">
              <div className="content-item-head">
                <div className="content-item-head-tit">
                  <div className="dot"></div>
                  <span className="content-item-head-title">
                    ISSAT, kairouan
                  </span>
                </div>
                <div className="content-item-head-date">2014-2016</div>
              </div>
              <span className="content-item-body">
                License fondamentale en Electrique, Electronique et Automatique
              </span>
            </div>
            <div className="content-item">
              <div className="content-item-head">
                <div className="content-item-head-tit">
                  <div className="dot"></div>
                  <span className="content-item-head-title">
                    Dar Amen, kairouan
                  </span>
                </div>
                <div className="content-item-head-date">2011</div>
              </div>
              <span className="content-item-body">
                Baccalauréat Section Informatique Mention Bien
              </span>
            </div>
          </div>

          <div className="content toww" id="tow">
            <div className="content-skils-container">
              <div className="content-skils-container-title">
                <div className="dot"></div>
                <span className="content-item-head-title">JavaScript</span>
              </div>
              <div className="content-skils-container-body">
                <div className="content-skils-container-body-value"></div>
              </div>
            </div>
            <div className="content-skils-container">
              <div className="content-skils-container-title">
                <div className="dot"></div>
                <span className="content-item-head-title">Node JS</span>
              </div>
              <div className="content-skils-container-body">
                <div className="content-skils-container-body-value"></div>
              </div>
            </div>
            <div className="content-skils-container">
              <div className="content-skils-container-title">
                <div className="dot"></div>
                <span className="content-item-head-title">HTML</span>
              </div>
              <div className="content-skils-container-body">
                <div className="content-skils-container-body-value"></div>
              </div>
            </div>
            <div className="content-skils-container">
              <div className="content-skils-container-title">
                <div className="dot"></div>
                <span className="content-item-head-title">Mongo Db</span>
              </div>
              <div className="content-skils-container-body">
                <div className="content-skils-container-body-value"></div>
              </div>
            </div>
            <div className="content-skils-container">
              <div className="content-skils-container-title">
                <div className="dot"></div>
                <span className="content-item-head-title">React JS</span>
              </div>
              <div className="content-skils-container-body">
                <div className="content-skils-container-body-value"></div>
              </div>
            </div>
            <div className="content-skils-container">
              <div className="content-skils-container-title">
                <div className="dot"></div>
                <span className="content-item-head-title">Express JS</span>
              </div>
              <div className="content-skils-container-body">
                <div className="content-skils-container-body-value"></div>
              </div>
            </div>
            <div className="content-skils-container">
              <div className="content-skils-container-title">
                <div className="dot"></div>
                <span className="content-item-head-title">CSS</span>
              </div>
              <div className="content-skils-container-body">
                <div className="content-skils-container-body-value"></div>
              </div>
            </div>
            <div className="content-skils-container">
              <div className="content-skils-container-title">
                <div className="dot"></div>
                <span className="content-item-head-title">Mongoose</span>
              </div>
              <div className="content-skils-container-body">
                <div className="content-skils-container-body-value"></div>
              </div>
            </div>
            <div className="content-skils-container">
              <div className="content-skils-container-title">
                <div className="dot"></div>
                <span className="content-item-head-title">Redux</span>
              </div>
              <div className="content-skils-container-body">
                <div className="content-skils-container-body-value"></div>
              </div>
            </div>
            <div className="content-skils-container">
              <div className="content-skils-container-title">
                <div className="dot"></div>
                <span className="content-item-head-title">Bootstrap</span>
              </div>
              <div className="content-skils-container-body">
                <div className="content-skils-container-body-value"></div>
              </div>
            </div>
            <div className="content-skils-container">
              <div className="content-skils-container-title">
                <div className="dot"></div>
                <span className="content-item-head-title">Sass</span>
              </div>
              <div className="content-skils-container-body">
                <div className="content-skils-container-body-value"></div>
              </div>
            </div>
            <div className="content-skils-container">
              <div className="content-skils-container-title">
                <div className="dot"></div>
                <span className="content-item-head-title">Material ui</span>
              </div>
              <div className="content-skils-container-body">
                <div className="content-skils-container-body-value"></div>
              </div>
            </div>
          </div>

          <div className="content" id="three">
            <div className="content-item">
              <div className="content-item-head">
                <div className="content-item-head-tit">
                  <div className="dot"></div>
                  <span className="content-item-head-title">
                    Personal Portfolio Website
                  </span>
                </div>
                <div className="content-item-head-date">2021-2022</div>
              </div>
              <span className="content-item-body">
                Technologies Used: React JS, Bootsrap <br/>  A Personal Portfolio
                website to showcase all my details and projects at one place.
              </span>
            </div>
            <div className="content-item">
              <div className="content-item-head">
                <div className="content-item-head-tit">
                  <div className="dot"></div>
                  <span className="content-item-head-title">Netflix Clone</span>
                </div>
                <div className="content-item-head-date">2021-2022</div>
              </div>
              <span className="content-item-body">
                Technologies Used: React Js, Mongo DB, Express Js, Node Js. <br/>  Netflix clone. The clone focuses on simulating the front end of Netflix
              </span>
            </div>
            <div className="content-item">
              <div className="content-item-head">
                <div className="content-item-head-tit">
                  <div className="dot"></div>
                  <span className="content-item-head-title">
                    Social App
                  </span>
                </div>
                <div className="content-item-head-date">2021-2022</div>
              </div>
              <span className="content-item-body">
                Technologies Used: Mongo DB, Epress Js, React Js, Node JS.<br/> 
                With all advanced Social Media features, such as Authentication, 
                create, edit, delete and save posts, like and dislike 
                on other people's posts, search and filter for friends
              </span>
            </div>
          </div>

          <div className="content" id="four">
            <div className="content-item">
              <div className="content-item-head">
                <div className="content-item-head-tit">
                  <div className="dot"></div>
                  <span className="content-item-head-title">Teaching</span>
                </div>
              </div>
              <span className="content-item-body">
                Apart from being a tech enthusiast and a code writer, i also
                love to teach people what i know simply because i believe in
                sharing.
              </span>
            </div>
            <div className="content-item">
              <div className="content-item-head">
                <div className="content-item-head-tit">
                  <div className="dot"></div>
                  <span className="content-item-head-title">Music</span>
                </div>
              </div>
              <span className="content-item-body">
                Listening to soothing music is something i can never compromise
                with, skimming through Spotify's pop songs charts is at times
                the best stress reliever that i can get my hands on.
              </span>
            </div>
            <div className="content-item">
              <div className="content-item-head">
                <div className="content-item-head-tit">
                  <div className="dot"></div>
                  <span className="content-item-head-title">
                    Competitive Gaming
                  </span>
                </div>
              </div>
              <span className="content-item-body">
                I like to challenge my reflexes a lot while competing in
                football games, pushing the rank and having interactive gaming
                sessions excites me the most.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
