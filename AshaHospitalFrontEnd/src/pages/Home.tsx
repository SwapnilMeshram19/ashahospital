import React, { useState } from "react";
import callIcon from "../assets/icons/callIcon.png";
import appointmentIcon from "../assets/icons/appointmentIcon.png";
import { HomeCrousel } from "../components/homePageComponents/HomeCrousel";
import { Slider } from "../components/Slider";
import { useFetchEventsQuery } from "../features/events/getEvent";
import { Loading } from "../components/Loading";
import AshaLogo from "../assets/AshaLogo.png";



export const Home = () => {
  const { data = null, isLoading } = useFetchEventsQuery();
  return (
    <div>
      <div>
        <div className="bg-white">
          <div className="w-full pt-20">
          <img src={AshaLogo} className="m-auto"/>
          </div>
          <div className="container mx-auto flex flex-col items-center px-4 pb-64 text-center text-gray-900">
            <h1 className="text-2xl font-black tracking-wider leading-none text-[rgb(230,118,0)] pb-16">
              A Ray Of Hope, Health and Happiness
            </h1>
            
            <div className="flex flex-wrap justify-center ">
              <button
                type="button"
                className="m-2 rounded bg-sky-800 px-8 py-3 text-lg font-semibold text-white tracking-wider"
              >
                Book Appointment
              </button>
             
            </div>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/random/480x320"
          alt=""
          className="mx-auto mb-12 -mt-20 w-5/6 rounded-lg bg-gray-500 shadow-md lg:-mt-40"
        />
      </div>
      <div className="mt-10 flex justify-center gap-10">
        <div className="flex max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-xl">
          <img src={appointmentIcon} className="m-2 w-12" />
          <button
            type="button"
            className=" m-3 inline-block rounded-lg bg-[#171773] px-6 py-2.5 text-xl font-semibold leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          >
            Book Appointment
          </button>

          <p className="m-2 mb-4 text-base text-gray-700">
            Online Hassle Free Appointment Booking.
          </p>
        </div>
        <div className="flex max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-xl">
          <img src={callIcon} className="m-2 w-12" />
          <button
            type="button"
            className=" m-3 inline-block rounded-lg bg-[#171773] px-6 py-2.5 text-xl font-semibold leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          >
            +91 8806933344
          </button>

          <p className="m-2 mb-4 text-base text-gray-700">
            Please Call for Inquiry and Appointment
          </p>
        </div>
      </div>
      <div className="mt-20 bg-orange-500 p-2 text-center text-4xl font-black tracking-wider text-white">
        Events
      </div>
      <div className="mb-10 p-10 text-center">
        {isLoading ? <Loading /> : data && <Slider data={data} />}
      </div>
    </div>
  );
};
