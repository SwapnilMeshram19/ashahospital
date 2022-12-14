import React, { FC, useRef } from "react";
import "./slider.css";
import { eventI } from "../features/events/getEvent";
import { useNavigate } from "react-router-dom";
interface sliderI {
  data: eventI[];
}
export const Slider: FC<sliderI> = ({ data }) => {
  const navigate=useNavigate();
  const slideLeft = () => {
    var slider: HTMLElement | null = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };
  const slideRight = () => {
    var slider: HTMLElement | null = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  console.log(data);
  return (
    <div className="relative flex justify-center ">
      <div
        id="slider"
        className=" scrollbar-hide relative flex w-11/12 gap-6 overflow-x-auto scroll-smooth py-2"
      >
        {data &&
          data.map((e) => (
            <div className="relative flex p-4 drop-shadow-md border-2 border-gray-100 rounded-md bg-white">
              <div className="relative w-96 ">
                <div className="py-2 text-lg font-black text-sky-900 line-clamp-1 tracking-wide">
                  {e.title}
                </div>
                <div className="">
                  <img
                    src={`data:${e.images[0].contentType};base64,${e.images[0].imageBase64}`}
                    className="h-48 w-full"
                    alt="..."
                  />
                </div>
                <div className="my-4 text-gray-500 line-clamp-2">
                  {e.description}
                </div>
                <div>
                  <div
                    className="justify-left mb-2 flex w-fit cursor-pointer justify-items-center gap-2 rounded-md bg-sky-600 py-1 px-3 text-white opacity-70 hover:opacity-100"
                    onClick={() => navigate(`/event/${e._id}/${e.title}`)}
                  >
                    <div>Read More</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div
        onClick={() => slideLeft()}
        className="absolute top-1/2 right-10 flex cursor-pointer items-center justify-center rounded-full bg-sky-900 p-3 text-white opacity-70 hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div
        onClick={() => slideRight()}
        className="absolute top-1/2 left-10 flex cursor-pointer items-center justify-center rounded-full bg-sky-900 p-3 text-white opacity-70 hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};
