import React from "react";
import AshaLogo from "../assets/AshaLogo.png";
export const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 flex h-auto justify-between border-2 bg-white align-middle text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700">
      <div className=" flex flex-1 items-center justify-between">
        <img src={AshaLogo} className="ml-20 p-2" />
        <ul className="list-style-none absolute right-0 z-10 mr-auto flex w-auto items-center text-gray-900">
          <li className="p-2  ">
            <a
              className="p-0  hover:text-blue-500  focus:text-gray-700"
              href="#"
            >
              Home
            </a>
          </li>
          <li className=" flex items-center p-2 hover:text-blue-500">
            <a className="mr-1   p-0 focus:text-gray-700" href="#">
              Specialities
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fill-rule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clip-rule="evenodd"
              />
            </svg>
          </li>
          <li className="p-2">
            <a
              className="p-0 hover:text-blue-500   focus:text-gray-700"
              href="#"
            >
              Doctors
            </a>
          </li>
          <li className="p-2">
            <a
              className="p-0 hover:text-blue-500   focus:text-gray-700"
              href="#"
            >
              Empanelment
            </a>
          </li>
          <li className="p-2">
            <a
              className="p-0 hover:text-blue-500   focus:text-gray-700"
              href="#"
            >
              Events
            </a>
          </li>
          <li className="p-2">
            <a
              className="p-0 hover:text-blue-500   focus:text-gray-700"
              href="#"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
