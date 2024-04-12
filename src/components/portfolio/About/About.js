import React from "react";
import "./About.css";

import heroIcon from '../../Assets/about/2.png'
import cursorIcon from '../../Assets/about/cursorIcon.png'
import serverIcon from '../../Assets/about/serverIcon.png'
import uilIcon from '../../Assets/about/uiIcon.png'

export const About = () => {
    return (
      <section className="container1">
        <h2 className="title1">About</h2>
            <div className="content1">
                <img
                src={heroIcon}
                alt="Me sitting with a laptop"
                className="aboutImage1"
                />
                <ul className="aboutItems1">
                    <li className="aboutItem1">
                        <img src={cursorIcon} alt="Cursor icon" />
                        <div>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with experience in building responsive
                                and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className="aboutItem1">
                        <img src={serverIcon} alt="Server icon" />
                        <div>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimised back-end systems
                                and APIs
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
      </section>
    );
  };