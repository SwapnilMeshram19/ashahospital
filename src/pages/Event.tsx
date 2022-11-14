import React, { useEffect, useState } from 'react';
import { useFetchEventsQuery } from '../features/events/getEvent';
import { eventI } from '../features/events/getEvent';
import Slider1 from "../../src/assets/crousel-images/Slider1.png";
export const Event=()=>{
    const [eventData,setEventData]=useState<eventI[]|null>(null)
    const { data=null, isLoading } = useFetchEventsQuery();

    console.log(data,isLoading)

    return (<div>

<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <img className="rounded-t-lg" src={Slider1} alt="" />
    <div className="p-4 bg-[#000000b0]">
      <h5 className="text-white text-xl font-medium">Card title</h5>
      <p className="text-slate-300 text-base leading-5">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
     
    </div>
    <div className='w-full p-1 bg-[#000000b8] text-center text-xl text-blue-600'>show more</div>
  </div>
  
</div>

        {
            isLoading?<div>...loading</div>: 
            
            <div>
                {
                    data&&data.map((ele)=>(<div key={ele._id}>
                        {
                            ele.images.map((img)=>(
                                <img src={`data:${img.contentType};base64,${img.imageBase64}`}/>
                            ))
                        }
                    </div>))
                }
           
              </div>
        
        }


    </div>)
}