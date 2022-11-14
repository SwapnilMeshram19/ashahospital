import React, { useEffect, useState } from 'react';
import { useFetchEventsQuery } from '../features/events/getEvent';
import { eventI } from '../features/events/getEvent';
import Slider1 from "../../src/assets/crousel-images/Slider1.png";
import { EventCard } from '../components/eventComponents/EventCard';
export const Event=()=>{
    const [eventData,setEventData]=useState<eventI[]|null>(null)
    const { data=null, isLoading } = useFetchEventsQuery();

    // console.log(data,isLoading)

    return (<div>

<div>
 
  
</div>

        {
            isLoading?<div>...loading</div>: 
            
            <div className='flex gap-20 flex-wrap justify-center mt-20'>
                {
                    data&&data.map((ele)=>(<div key={ele._id}>
                       <EventCard eventData={ele}/>
                    </div>))
                }
           
              </div>
        
        }


    </div>)
}