import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/NavStyle.css";

const EnactusNavBar = () => {
    const nav = useNavigate();

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY <10) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    
    const navButtons = [
        { name: "PROJECTS", link: "/projects" },
        { name: "ACTIVITIES", link: "/activities" },
        { name: "TEAMS", link: "/teams" },
        { name: "SPONSOR US", link: "/sponsors" },
    ];

    return (
        <div style={{ width: "100%" }} className={`navbar ${colorChange ? "colorChange" : ""}`}>

            <ul style={{backgroundColor:'transparent'}}className='enactus-navbar'>
                {navButtons.map((navButton, index) => {
                    return (
                        <li key={index}>
                            <button
                                className="enactus-navbar-options"
                                onClick={() => {
                                    nav(`${navButton.link}`);
                                }}
                            >
                                {navButton.name}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default EnactusNavBar;
