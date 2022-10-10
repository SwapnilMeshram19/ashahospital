import React from "react";
import AshaLogo from '../assets/AshaLogo.png'
export const Navbar = () => {
  return (
    <div className="sticky h-auto border-2 top-0 z-10 flex justify-between bg-white text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700">
      <div className=" flex flex-1 justify-between">
        <img src={AshaLogo} className="p-2 ml-20"/>
        <ul className="absolute right-0 z-10 w-auto list-style-none mr-auto flex ">
          <li className="p-2 ">
            <a
              className="p-0 text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 focus:text-gray-700"
              href="#"
            >
              About Us
            </a>
          </li>
          <li className=" p-2">
            <a
              className="p-0 text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 focus:text-gray-700"
              href="#"
            >
              Career
            </a>
          </li>
          <li className="p-2">
            <a
              className="p-0 text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 focus:text-gray-700"
              href="#"
            >
              Enquiry Now
            </a>
          </li>
          <li className="p-2">
            <a
              className="p-0 text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 focus:text-gray-700"
              href="#"
            >
              Feedback
            </a>
          </li>
        </ul>
  
      </div>
   
      
    </div>
  );
};
