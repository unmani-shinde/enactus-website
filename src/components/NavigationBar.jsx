import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaHome } from "react-icons/fa";

function NavigationBar() {

    const nav = useNavigate();
    const navButtons = [
        {name: 'HOME', link:'/'},
        { name: "PROJECTS", link: "/projects" },
        { name: "ACTIVITIES", link: "/activities" },
        { name: "TEAMS", link: "/teams" },
        { name: "SPONSOR US", link: "/sponsors" },
        
    ];

    const [color, setColor] = useState(false);

	const changeColor = () => {
		if (window.scrollY >= 50) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	window.addEventListener("scroll", changeColor);

    return (
        <div style={{ width: "100%", backgroundColor:color?"yellow":'black',display:'flex',flexDirection:'column' }}>

            <ul style={{ backgroundColor: 'inherit' }} className='enactus-navbar'>
                {navButtons.map((navButton, index) => (
                    <li key={index}>
                        <button
                            style={{color:'white'}}
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
}

export default NavigationBar;
