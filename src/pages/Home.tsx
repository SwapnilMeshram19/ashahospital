import React from "react";
import callIcon from "../assets/icons/callIcon.png";
import appointmentIcon from "../assets/icons/appointmentIcon.png";
import { HomeCrousel } from "../components/homePageComponents/HomeCrousel";
import { Slider } from "../components/Slider";
import { useFetchEventsQuery } from "../features/events/getEvent";
import { Loading } from "../components/Loading";

export const Home = () => {

  const {data=null,isLoading}=useFetchEventsQuery();
  return (
    <div>
      <HomeCrousel />
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
      <div className="bg-gray-50 p-10 my-10 text-center">
        <div className="text-5xl p-2 font-black tracking-wide">
          Events
        </div>
        
        {
          isLoading?<Loading/>:data&&<Slider data={data}/>
        }
        
      </div>
    </div>
  );
};
