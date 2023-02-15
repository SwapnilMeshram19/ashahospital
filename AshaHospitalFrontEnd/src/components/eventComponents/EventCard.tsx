import React, { FC } from "react";
import { Navigate,useNavigate} from "react-router-dom";
import { eventI } from "../../features/events/getEvent";

export interface eventPropsI {
  eventData: eventI;
}

export const EventCard: FC<eventPropsI> = (props) => {
  const data = props.eventData;
  const navigate=useNavigate();

  return (
    <div className="rounded-lg bg-white shadow-lg border-2 border-gray-100">
      <div className="flex justify-center">
        <img
          className="h-[250px] rounded-t-lg object-cover"
          src={`data:${data.images[0].contentType};base64,${data.images[0].imageBase64}`}
          alt=""
        />
      </div>
      <div className="p-4">
        <h5 className="text-xl font-extrabold tracking-wide text-sky-900 h-14">
          {data.title}
        </h5>
        <div className=" mt-4 text-base leading-5 text-slate-600 line-clamp-3">
          {data.description}
        </div>
      </div>
      <div
        className="my-4 ml-auto mr-6 flex w-32 cursor-pointer justify-center rounded-md bg-sky-900 py-1 text-center text-base text-white hover:bg-sky-700"
        onClick={()=>navigate(`/event/${data._id}/${data.title}`)}
      >
        Read More
      </div>
    </div>
  );
};
