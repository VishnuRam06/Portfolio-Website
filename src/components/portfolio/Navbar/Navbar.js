import "./Navbar.css";
import React, { useState } from "react";

import menuIcon from '../../Assets/nav/menuIcon.png'
import closeIcon from '../../Assets/nav/closeIcon.png'

export const Navbars = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="titlee" href="/">
        Vishnu Ram
      </a>
      <div className="menu" 
      onClick={() => setMenuOpen(!menuOpen)} //it will change the condition (false to true)or (true to false)
      > 
        <img
          className="menuBtn" 
          src={menuOpen ? closeIcon : menuIcon} //check the condition as true or false
          alt="menu-button"
        />
        <ul 
        className={`menuItems ${menuOpen && "menuOpen"}`} // if menuOpen is true the string "menuOpen" is added to the class name
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


