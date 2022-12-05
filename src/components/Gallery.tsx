import React, { useState, FC, useEffect } from "react";
import { eventImgI } from "../features/events/getEvent";
interface GralleryI {
  Images: eventImgI[];
}
export const Gallery: FC<GralleryI> = ({ Images }) => {
  const [galleryImages, setGalleryImages] = useState<eventImgI[]>();

  useEffect(() => {
    setGalleryImages(Images.slice(1));
  }, [Images]);
  console.log(Images);
  console.log(galleryImages);

  return (
    <div>
      <div className="grid w-full grid-cols-3 justify-center justify-items-center gap-5">
        {galleryImages &&
          galleryImages.map((image, index) => (
            <div className=" cursor-pointer h-48 hover:scale-105 duration-150 ">
              <img
                src={`data:${image.contentType};base64,${image.imageBase64}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
};
