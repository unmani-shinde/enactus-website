import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaHome } from "react-icons/fa";

function NavigationBar() {

    const nav = useNavigate();
    const navButtons = [
        {name: 'Home', link:'/'},
        { name: "Projects", link: "/projects" },
        { name: "Teams", link: "/teams" },
        { name: "Contact Us", link: "/contact" },
        
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
        <nav class="lg:opacity-80 md:opacity-80 sm:opacity-100 max-sm:opacity-100 rounded shadow 2-xl flex items-center bg-gray-900 dark:bg-gray-900 fixed w-full h-20 z-20 top-0 start-0 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
     
      <button style={{marginLeft:"-1vh"}} data-collapse-toggle="navbar-sticky" type="button" class="mt-10 mb-1 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-amber-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div style={{marginLeft:"-1vh",marginRight:'8vh'}} class="flex items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-sticky">
    <ul class="overflow-list lg:w-full md:w-full sm:w-screen max-sm:w-screen sm:ml-0 flex flex-col items-center p-4 md:p-0  font-medium border border-gray-100 rounded-lg bg-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      
    {navButtons.map((navButton, index) => (
                    <li className="lg:border-0 md:border-0 sm:pt-3 sm:pb-3 sm:text-left max-sm:text-left sm:pl-2" key={index}>
                        <a href={`${navButton.link}`}
                            
                            className="lg:uppercase md:uppercase sm:capitalize max-sm:capitalize lg:text-white md:text-white sm:text-black max-sm:text-black opacity-100 lg:text-xl md:text-xl sm:text-lg max-sm:text-lg sm:font-semibold max-sm:font-semibold mr-8 lg:font-semibold md:font-semibold block rounded hover:bg-gray-100 md:hover:bg-transparent  dark:text-white dark:border-gray-700 enactus-navbar-options"
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
