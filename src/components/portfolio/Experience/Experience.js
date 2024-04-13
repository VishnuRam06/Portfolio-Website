import React from "react";
import "./Experience.css";

import bootstrapIcon from '../../Assets/skills/bootstrap.png'
import cssIcon from '../../Assets/skills/css.png'
import djangoIcon from '../../Assets/skills/django.png'
import flaskIcon from '../../Assets/skills/flask.png'
import htmlIcon from '../../Assets/skills/html.png'
import javascriptIcon from '../../Assets/skills/javascript.png'
import mysqlIcon from '../../Assets/skills/mysql.png'
import pythonIcon from '../../Assets/skills/python.png'
import reactIcon from '../../Assets/skills/react.png'



export const Experience = () => {
    return (
      <section className="container2">
        <div className="title2">
            <p>Skills</p>
        </div>
        <div>
            <div className="skills">
                <div className="skillImageContainer"> 
                    <img src={htmlIcon} alt="htmlIcon" />
                </div>
                <p>HTML</p>
            </div>
            <div className="skills">
                <div className="skillImageContainer"> 
                    <img src={cssIcon} alt="Css" />
                </div>
                <p>CSS</p>
            </div>
            <div className="skills">
                <div className="skillImageContainer"> 
                    <img src={bootstrapIcon} alt="bootstrap" />
                </div>
                <p>Bootstrap</p>
            </div>
            <div className="skills">
                <div className="skillImageContainer"> 
                    <img src={pythonIcon} alt="pythonIcon" />
                </div>
                <p>Python</p>
            </div>
            <div className="skills">
                <div className="skillImageContainer"> 
                    <img src={javascriptIcon} alt="javascriptIcon" />
                </div>
                <p>JavaScript</p>
            </div>
            <div className="skills">
                <div className="skillImageContainer"> 
                    <img src={mysqlIcon} alt="mysqlIcon" />
                </div>
                <p>MySql</p>
            </div>
            <div className="skills">
                <div className="skillImageContainer"> 
                    <img src={reactIcon} alt="reactIcon" />
                </div>
                <p>React</p>
            </div>
            <div className="skills">
                <div className="skillImageContainer"> 
                    <img src={djangoIcon} alt="djangoIcon" />
                </div>
                <p>Django</p>
            </div>
            <div className="skills">
                <div className="skillImageContainer"> 
                    <img src={flaskIcon} alt="flaskIcon" />
                </div>
                <p>Flask</p>
            </div>
        </div>
      </section>
    );
  };