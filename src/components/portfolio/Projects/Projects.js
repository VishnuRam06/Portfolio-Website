import React from "react";
import "./Projects.css";

import projectsIcon from '../../Assets/projects/project.png'

export const Projects = () => {
    return (
      <section className="container3">
        <h2 className="title3">Projects</h2>
        <div className="projects3">
            <div className="cardcontainer">
                <img
                    src={projectsIcon}
                    alt="projectsIcon"
                    className="cardimage"
                />
                <h3 className="cardtitle">vishkart E-commerce</h3>
                <p className="carddescription"> It allows users to browse through different product categories, view product details, add products to their cart..</p>
                <ul className="cardskills">
                    <li className="cardskill">Django</li>
                    <li className="cardskill">HTML/CSS</li>
                    <li className="cardskill">JavaScript</li>
                    <li className="cardskill">Bootstrap</li>
                    <li className="cardskill">MySQL</li>
                </ul>
                <div className="cardlinks">
                    <a href="/" className="cardlink">
                    Demo
                    </a>
                    <a href="https://github.com/VishnuRam06/vishkart-E-commerce.git" className="cardlink">
                    Source
                    </a>
                </div>
            </div>
            <div className="cardcontainer">
                <img
                    src={projectsIcon}
                    alt="projectsIcon"
                    className="cardimage"
                />
                <h3 className="cardtitle">Weather-App</h3>
                <p className="carddescription"> The Weather App is a web application that allows users to get weather information for a specific city</p>
                <ul className="cardskills">
                    <li className="cardskill">Django</li>
                    <li className="cardskill">React.js</li>
                    <li className="cardskill">Rest API</li>
                    <li className="cardskill">MySQL</li>
                </ul>
                <div className="cardlinks">
                    <a href="/" className="cardlink">
                    Demo
                    </a>
                    <a href="https://github.com/VishnuRam06/Weather-App.git" className="cardlink">
                    Source
                    </a>
                </div>
            </div>
            <div className="cardcontainer">
                <img
                    src={projectsIcon}
                    alt="projectsIcon"
                    className="cardimage"
                />
                <h3 className="cardtitle">Portfolio Website</h3>
                <p className="carddescription"> This website represents my portfolio, showcasing my skills and achievements.</p>
                <ul className="cardskills">
                    <li className="cardskill">HTML/CSS</li>
                    <li className="cardskill">React.js</li>
                </ul>
                <div className="cardlinks">
                    <a href="/" className="cardlink">
                    Demo
                    </a>
                    <a href="https://github.com/VishnuRam06/Portfolio-Website.git" className="cardlink">
                    Source
                    </a>
                </div>
            </div>
        </div>
      </section>
    );
  };
