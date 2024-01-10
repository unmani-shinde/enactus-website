import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/NavStyle.css";

const EnactusNavBar = () => {
    const nav = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [navColor, setNavColor] = useState(false);

	const changeColor = () => {
		if (window.scrollY >= 200) {
			setNavColor(true);
		} else {
			setNavColor(false);
		}
	};

	window.addEventListener("scroll", changeColor);
   
    
    

    const navButtons = [
        { name: "PROJECTS", link: "/projects" },
        { name: "ACTIVITIES", link: "/activities" },
        { name: "TEAMS", link: "/teams" },
        { name: "SPONSOR US", link: "/sponsors" },
    ];

    return (
        <div style={{ width: "100%", backgroundColor:'transparent' }}>
            <ul style={{ backgroundColor: 'inherit' }} className='enactus-navbar'>
                {navButtons.map((navButton, index) => (
                    <li key={index}>
                        <button
                            style={{color:navColor?'black':'white'}}
                            className="enactus-navbar-options"
                            onClick={() => {
                                nav(`${navButton.link}`);
                            }}
                        >
                            {navButton.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EnactusNavBar;
