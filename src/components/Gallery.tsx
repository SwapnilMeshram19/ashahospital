import React, { useState, FC, useEffect } from "react";
import { eventImgI } from "../features/events/getEvent";
interface GralleryI {
  Images: eventImgI[];
}
export const Gallery: FC<GralleryI> = ({ Images }) => {
  const [galleryImages, setGalleryImages] = useState<eventImgI[]>();
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const [openModel, setOpenModel] = useState<boolean>(false);

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setOpenModel(true);
  };

  //Close Modal
  const handleCloseModal = () => {
    setOpenModel(false);
  };

  //Next Image
  const handleRightClick = () => {
    slideNumber + 1 === Images.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  //Previous Image
  const handleLeftClick = () => {
    slideNumber === 0
      ? setSlideNumber(Images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  useEffect(() => {
    setGalleryImages(Images.slice(1));
  }, [Images]);
  console.log(Images);
  console.log(galleryImages);

  return (
    <div className="relative">
      {openModel && (
        <div className=" fixed top-0 bottom-0 left-0 right-0 z-20 flex h-full w-full justify-center justify-items-center backdrop-blur-md ">
        <div className=" fixed w-full flex justify-end z-40 px-4 py-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 cursor-pointer"
            onClick={() => handleCloseModal()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

        </div>



        <div className="fixed w-1/2 h-full left-0 flex justify-items-center justify-center cursor-pointer z-30" onClick={()=>handleLeftClick()}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="fixed inset-y-1/2 h-6 w-6 left-4"
                
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
                />
            </svg>

        </div>

          

         
        <div className="fixed w-1/2 h-full right-0 flex cursor-pointer z-30" onClick={()=>handleRightClick()}>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="fixed h-6 w-6 inset-y-1/2 right-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          </div>

          <div className="fixed top-14">
            <img
              src={`data:${Images[slideNumber].contentType};base64,${Images[slideNumber].imageBase64}`}
            />
          </div>
        </div>
      )}
      <div className="grid w-full grid-cols-3 justify-center justify-items-center gap-5">
        {galleryImages &&
          galleryImages.map((image, index) => (
            <div
              className=" h-48 cursor-pointer duration-150 hover:scale-105 "
              key={index}
              onClick={() => handleOpenModal(index + 1)}
            >
              <img
                src={`data:${image.contentType};base64,${image.imageBase64}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
};
