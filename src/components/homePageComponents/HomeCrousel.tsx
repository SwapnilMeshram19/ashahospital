import * as React from "react";
import Slider1 from "../../assets/crousel-images/slider-1.jpg";
import Slider2 from "../../assets/crousel-images/Slider2.jpg";
import Slider3 from "../../assets/crousel-images/Slider3.jpg";
import Slider4 from "../../assets/crousel-images/Slider4.jpg";
import Slider5 from "../../assets/crousel-images/Slider5.jpg";
export const HomeCrousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="slide carousel relative overflow-x-hidden"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner relative h-[500px] w-full overflow-hidden">
        <div className="active carousel-item relative float-left h-full w-full">
          <img src={Slider1} className=" h-[500px] w-full" alt="..." />
        </div>
        <div className="carousel-item relative float-left h-[500px] w-full">
          <img src={Slider2} className="block h-[500px] w-full" alt="..." />
        </div>
        <div className="carousel-item relative float-left h-[500px] w-full">
          <img src={Slider3} className="block h-[500px] w-full" alt="..." />
        </div>
        <div className="carousel-item relative float-left h-[500px] w-full">
          <img src={Slider4} className="block h-[500px] w-full" alt="..." />
        </div>
        <div className="carousel-item relative float-left h-[500px] w-full">
          <img src={Slider5} className="block h-[500px] w-full" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 left-[-4%] flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 right-[-4%] flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
