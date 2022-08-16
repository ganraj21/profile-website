import React from "react";
import Typewriter from "typewriter-effect";
import "./Frontpage.css";
function Frontpage() {
  return (
    <>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="#">
                  <i className="fas fa fa-facebook-square"></i>
                </a>
                <a href="https://github.com/ganraj21">
                  <i className="fas fa fa-github"></i>
                </a>
                <a href="#">
                  <i className="fas fa fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/ganesh-ghadge-a330a421a/">
                  <i className="fas fa fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/ganraj_21">
                  <i className="fas fa fa-twitter"></i>
                </a>
              </div>
            </div>

            <div className="profile-details-name">
              <span className="primary-text">
                Hello, I'M <span className="highlighted-text">Ganesh</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: [
                        "I'm a Competitive Programmer 🔴",
                        "MERN Developer",
                        "Enthusiastic Dev",
                        "I'm a React Developer 🔄",
                        "I'm a Youtuber",
                      ],
                    }}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Knack of building applications with front and back end
                  operations.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">Hire Me</button>
              <a href="profile_img.png" download="../Image/profile_img.png">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frontpage;