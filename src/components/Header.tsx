import React from "react";
export const Header = () => {
  return (
    <header className="sticky top-0 bg-white  text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700">
     
        <ul className="flex self-end list-style-none mr-auto">
          <li className="nav-item p-2 ">
            <a
              className="nav-link p-0 text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 focus:text-gray-700"
              href="#"
            >
              About Us
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className="nav-link p-0 text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 focus:text-gray-700"
              href="#"
            >
              Career
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className="nav-link p-0 text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 focus:text-gray-700"
              href="#"
            >
              Enquiry Now
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className="nav-link p-0 text-gray-500 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 focus:text-gray-700"
              href="#"
            >
              Feedback
            </a>
          </li>
        </ul>
     
  
    </header>
  );
};
