import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AshaLogo from "../assets/asha_logo.png";
import { SpecialitiesDropdown } from "./SpecialitiesDropdown";
export const Navbar = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);

  let activeStyle = {
    textDecoration: "underline",
    
  };
  let navLinkStyle={
    "&hover":"color:blue"
  }

  let activeClassName = "text-blue-600";
  return (
    <div className="sticky w-full top-0 z-10 flex h-auto justify-between border-2 bg-white align-middle text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700">
      <div className="flex flex-1 items-center justify-between">
        <img src={AshaLogo} className="ml-20 p-0 pl-0 w-[25%]" />
        <ul className="list-style-none z-10 mr-auto absolute right-2 flex h-full items-center text-gray-900">
          <li className="p-2 h-full flex items-center">
            <NavLink
              to={"/home"}
              
              className={({ isActive }) =>
              isActive ? activeClassName : "p-0 text-gray-500 hover:text-blue-600  focus:text-gray-700 active:text-blue-600"
            }
          
            >
              Home
            </NavLink>
            
          </li>
          <li
            className="flex h-full items-center p-2 hover:text-blue-600"
            onClick={() => setDropDown(!dropDown)}
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
          >
            <NavLink
              to={"/specialities"}
              className={({ isActive }) =>
              isActive ? activeClassName : "p-0 text-gray-500 hover:text-blue-600  focus:text-gray-700 active:text-blue-600 active:border-2 active:border-sky-800"
            }
            >
              Specialities
            </NavLink>
            {
              dropDown?<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>:<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
            }
            
            
          </li>
          <li className="p-2 h-full flex items-center">
            <NavLink
              to={"/doctors"}
              className={({ isActive }) =>
              isActive ? activeClassName : "p-0 text-gray-500  hover:text-blue-600  focus:text-gray-700 active:text-blue-600"
            }
            >
              Doctors
            </NavLink>
          </li>
          <li className="p-2">
            <a
              className="p-0 hover:text-blue-600   focus:text-gray-700"
              href="#"
            >
              Empanelment
            </a>
          </li>
          <li className="p-2 h-full flex items-center">
            <NavLink
              to={"/add-event"}
              className={({ isActive }) =>
              isActive ? activeClassName : "p-0 text-gray-500  hover:text-blue-600  focus:text-gray-700 active:text-blue-600"
            }
            >
              Events
            </NavLink>
          </li>
          <li className="p-2">
            <a
              className="p-0 hover:text-blue-600   focus:text-gray-700"
              href="#"
            >
              Contact Us
            </a>
          </li>
        </ul>
        {dropDown && <SpecialitiesDropdown setDropDown={setDropDown} />}
      </div>
    </div>
  );
};
