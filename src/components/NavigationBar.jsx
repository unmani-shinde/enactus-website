import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaHome } from "react-icons/fa";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function NavigationBar() {

    const nav = useNavigate();
    const navButtons = [
        {name: 'Home', link:'/'},
        { name: "Projects", link: "/projects" },
        { name: "Teams", link: "/teams" },
        { name: "Contact Us", link: "/contact" },
        
    ];

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (

        <>
        <nav className="opacity-100  bg-black flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className=" flex lg:flex-1 md:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Enactus VJTI</span>
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
            </a>
          </div>
          <div className="flex lg:hidden md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="bg-black hidden lg:flex md:flex lg:gap-x-12 md:gap-x-12">
            {navButtons.map((item) => (
              <a key={item.name} href={item.link} className="enactus-navbar-options text-xl uppercase font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex md:flex lg:flex-1 md:flex-1 lg:justify-end md:justify-end">
            {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </nav>
        <Dialog className="z-50 lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Enactus VJTI</span>
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                /> */}
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navButtons.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base text-white font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
            
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        
        
        
        </>





//         <nav class="lg:opacity-80 md:opacity-80 sm:opacity-100 max-sm:opacity-100 rounded shadow 2-xl flex items-center bg-gray-900 dark:bg-gray-900 fixed w-full h-20 z-20 top-0 start-0 dark:border-gray-600">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
//   <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
     
//       <button style={{marginLeft:"-1vh"}} data-collapse-toggle="navbar-sticky" type="button" class="mt-10 mb-1 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-amber-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//   </div>
//   <div style={{marginLeft:"-1vh",marginRight:'8vh'}} class="flex items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-sticky">
//     <ul class="overflow-list lg:w-full md:w-full sm:w-screen max-sm:w-screen sm:ml-0 flex flex-col items-center p-4 md:p-0  font-medium border border-gray-100 rounded-lg bg-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      
//     {navButtons.map((navButton, index) => (
//                     <li className="lg:border-0 md:border-0 sm:pt-3 sm:pb-3 sm:text-left max-sm:text-left sm:pl-2" key={index}>
//                         <a href={`${navButton.link}`}
                            
//                             className="lg:uppercase md:uppercase sm:capitalize max-sm:capitalize lg:text-white md:text-white sm:text-black max-sm:text-black opacity-100 lg:text-xl md:text-xl sm:text-lg max-sm:text-lg sm:font-semibold max-sm:font-semibold mr-8 lg:font-semibold md:font-semibold block rounded hover:bg-gray-100 md:hover:bg-transparent  dark:text-white dark:border-gray-700 enactus-navbar-options"
//                         >
//                             {navButton.name}
//                         </a>
                       
//                     </li>
//                 ))}
      
//     </ul>
//   </div>
//   </div>
// </nav>
    );
}

export default NavigationBar;
