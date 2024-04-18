import React from "react";
import "./contact.css";

import emailIcon from '../../Assets/contact/emailIcon.png'
import githubIcon from '../../Assets/contact/githubIcon.png'
import linkedinIcon from '../../Assets/contact/linkedinIcon.png'

export const Contact = () => {
    return (
      <footer className="container4" id="contact">
        <div className="text4">
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className="links4">
          <li className="link4">
            <img src={emailIcon} alt="Email icon" />
            <a href="mailto:vishnuramm0612@email.com">vishnuramm0612@gmail.com</a>
          </li>
          <li className="link4">
            <img
              src={linkedinIcon}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/vishnu-ram-8999b123a/" target="blank">vishnu ram</a>
          </li>
          <li className="link4">
            <img src= {githubIcon} alt="Github icon" />
            <a href="https://github.com/VishnuRam06" target="blank" > VishnuRam06</a>
          </li>
        </ul>
      </footer>
    );
  };