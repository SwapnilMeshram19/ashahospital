import React, { FC } from "react";
import { specialities } from "./DataArray/Specialities";
import "./scrollbar.css";
export const SpecialitiesDropdown: FC<{ setDropDown: any }> = ({
  setDropDown,
}) => {
  return (
    <div
      className="absolute top-full right-[16%] w-[20%] bg-[#f4f4f4]"
      onMouseEnter={() => setDropDown(true)}
      onMouseLeave={() => setDropDown(false)}
    >
      <ul className="scrollbar h-[300px] overflow-scroll overflow-x-hidden overscroll-contain scroll-smooth">
        {specialities.map((ele) => (
          <li className="cursor-pointer p-2 pl-7 hover:bg-slate-200">
            {ele.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
