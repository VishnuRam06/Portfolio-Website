import React from "react";
import "./Hero.css";

import heroIcon from '../../Assets/hero/1.png'
// import heroIcon from '../../Assets/hero/vish.jpg'


export const Hero = () => {
    return (
        // <img src={heroIcon}></img>
        <section className="container">
            <div className="content">
                <h1 className="title">Hi, I'm Your Vishnu</h1>
                <p className="description">
                    I'm a full-stack developer with 4-months of Internship experience using React and
                    Python.<br/>
                    Reach out if you'd like to know more!
                </p>
                <a href="mailto:vishnuramm0612@email.com" className="contactBtn">
                    Contact Me
                </a>
            </div>
            <img
                src= {heroIcon}
                alt="Hero image of me"
                className="heroImg"
            />
        </section>
    );
  };