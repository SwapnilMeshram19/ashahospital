import React, {FC} from 'react';
import { doctorI } from '../../features/doctors/getDoctors';

interface propsI {
    doctor: doctorI;
  }

export const DoctorCard:FC<propsI>=(props)=>{
    const doctor=props.doctor;
    return (
        <div
        className="w-72 max-w-sm overflow-hidden rounded p-4 shadow-xl border-2 border-gray-100"
      >
        <div className="h-40 w-40 mt-5">
          <img
            src={`data:${doctor.profile_photo.contentType};base64,${doctor.profile_photo.imageBase64}`}
            className="h-full w-full overflow-hidden rounded-full object-fill shadow-xl"
          />
        </div>
        <div className="mt-4">
          <div className="text-xl font-extrabold tracking-wide text-cyan-900">Dr. {doctor.name}</div>
          <div className="mt-4 font-bold">Qualification</div>
          <div className="leading-7">{doctor.qualification}</div>
          <div className="mt-4 font-bold">Speciality</div>
          <div className="leading-7">{doctor.speciality}</div>
        </div>
      </div>
    )
}

