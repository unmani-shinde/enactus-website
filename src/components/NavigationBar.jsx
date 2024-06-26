import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaHome } from "react-icons/fa";

function NavigationBar() {

    const nav = useNavigate();
    const navButtons = [
        {name: 'HOME', link:'/'},
        { name: "PROJECTS", link: "/projects" },
        { name: "TEAMS", link: "/teams" },
        { name: "CONTACT US", link: "/contact" },
        
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
        <nav class="opacity-80 rounded shadow 2-xl flex items-center bg-gray-900 dark:bg-gray-900 fixed w-full h-20 z-20 top-0 start-0 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
     
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="flex items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      
    {navButtons.map((navButton, index) => (
                    <li key={index}>
                        <a href={`${navButton.link}`}
                            style={{color:'white'}}
                            className="opacity-100 text-xl mr-8 font-semibold block  text-white rounded hover:bg-gray-100 md:hover:bg-transparent  dark:text-white dark:border-gray-700 enactus-navbar-options"
                        >
                            {navButton.name}
                        </a>
                    </li>
                ))}
      
    </ul>
  </div>
  </div>
</nav>
    );
}

export default NavigationBar;
