import React, { FC } from "react";
import { eventI } from "../../features/events/getEvent";

interface propsI {
  eventData: eventI;
}

export const EventCard: FC<propsI> = (props) => {
  const data = props.eventData;

  return (
    <div className="rounded-lg bg-white shadow-lg">
      <div className="flex justify-center">
        <img
          className="object-cover h-[250px] rounded-t-lg"
          src={`data:${data.images[0].contentType};base64,${data.images[0].imageBase64}`}
          alt=""
        />
      </div>
      <div className="p-4">
        <h5 className="text-xl font-extrabold tracking-wide text-sky-900">{data.title}</h5>
        <div className=" line-clamp-3 text-base leading-5 text-slate-600">
     {data.description}
        </div>
      </div>
      <div className="w-full cursor-pointer bg-slate-200 p-2 text-center text-xl text-blue-600 hover:bg-slate-300">
        show more
      </div>
    </div>
  );
};
