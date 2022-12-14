import React, { FC } from "react";
import { specialities } from "./DataArray/Specialities";
import "./scrollbar.css";
export const SpecialitiesDropdown: FC<{ setDropDown: any }> = ({
  setDropDown,
}) => {
  return (
    <div
      className="transition duration-50 absolute top-full right-10 bg-white animate-ping-one shadow-xl rounded-md px-8 py-2"
      onMouseEnter={() => setDropDown(true)}
      onMouseLeave={() => setDropDown(false)}
    >
      <ul className="grid grid-rows-8 grid-flow-col auto-cols-max gap-4 ">
        {specialities.map((ele) => (
          <li className="cursor-pointer hover:bg-slate-200">
            {ele.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
