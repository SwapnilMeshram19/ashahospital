import React, { FC } from "react";
import { eventI } from "../features/events/getEvent";
interface sliderI {
  data: eventI[];
}
export const Slider: FC<sliderI> = ({ data }) => {
  console.log(data);
  return (
    <div  id="carouselExampleCaptions"
    className="slide carousel relative flex justify-center"
    data-bs-ride="carousel">
<div  className=" w-4/5 relative flex overflow-scroll">

      {data &&
        data.map((e) => (
          <div
            id="carouselExampleCaptions"
            className="slide carousel relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left flex w-96 h-48">
                <img
                   src={`data:${e.images[0].contentType};base64,${e.images[0].imageBase64}`}
                  className="block w-full h-full"
                  alt="..."
                />
              </div>
            </div>
            
          </div>
        ))}
        <button
              className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
              type="button"
             
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
              type="button"
           
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
            </div>

    </div>
  );
};
