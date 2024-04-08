import "./Navbar.css";
import { useState } from "react";

import menuIcon from '../../Assets/nav/menuIcon.png'
import closeIcon from '../../Assets/nav/closeIcon.png'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className= "navbar">
            <a className="title" href="/">
            Vishnu Ram
            </a>
            <div className="menu">
                <img
                    className="menuBtn"
                    src={
                        menuOpen //check the condition
                        ? {closeIcon} //if true
                        : {menuIcon} //if false
                        }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)} //it will change the condition (false to true)or (true to false)
                />    
                <ul
                    className={`$"menuItems" $"menuOpen && menuOpen"`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Internship</a>
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