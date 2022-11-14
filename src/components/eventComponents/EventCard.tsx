import React, { FC } from "react";
import { eventI } from "../../features/events/getEvent";

interface propsI {
  eventData: eventI;
}

export const EventCard: FC<propsI> = (props) => {
  const data = props.eventData;

  return (
    <div className="w-80 rounded-lg bg-white shadow-lg">
      <div className="flex justify-center">
        <img
          className="h-[250px] rounded-t-lg object-fit"
          src={`data:${data.images[0].contentType};base64,${data.images[0].imageBase64}`}
          alt=""
        />
      </div>
      <div className="p-4">
        <h5 className="text-xl font-medium text-black">{data.title}</h5>
        <p className="text-base leading-5 text-slate-600">{data.description}</p>
      </div>
      <div className="w-full cursor-pointer bg-slate-200 p-2 text-center text-xl text-blue-600 hover:bg-slate-300">
        show more
      </div>
    </div>
  );
};
