import { empanelmentI } from "../../features/empanelment/getEmpanelments";
import React,{FC} from "react";
interface propsI{
    empanelment:empanelmentI
}

export const EmpanelmentCard:FC<propsI> = ({empanelment}) => {

    return (
    <div className=" overflow-hidden rounded-xl text-center shadow-2xl">
      {empanelment.empanelmentType == "Government" && (
        <div className="text-bold border-b-2 py-1 font-bold tracking-widest text-cyan-900">
          {empanelment.name.substring(0, empanelment.name.indexOf(" "))}
        </div>
      )}
      <div className="flex h-44 w-full justify-center px-2 pt-4 pb-8  transition duration-300">
        <img
          src={`data:${empanelment.empanelmentLogo.contentType};base64,${empanelment.empanelmentLogo.imageBase64}`}
          className="w-full object-scale-down transition duration-200 hover:scale-95 "
        />
      </div>
      <div className="border-t-2 p-1 pl-4 text-left text-sm font-bold tracking-wider line-clamp-2 hover:line-clamp-none">
        {empanelment.empanelmentType == "Government"
          ? empanelment.name.substring(empanelment.name.indexOf(" ") + 2)
          : empanelment.name}
      </div>
    </div>
  );
};
