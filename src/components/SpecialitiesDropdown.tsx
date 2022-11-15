import React,{FC} from 'react';
import { specialities } from './DataArray/Specialities';
import './scrollbar.css'
export const SpecialitiesDropdown:FC<{setDropDown:any}>=({setDropDown})=>{
    return (
        <div className='absolute w-[20%] top-full right-[16%] bg-[#f4f4f4]' onMouseEnter={()=>setDropDown(true)} onMouseLeave={()=>setDropDown(false)}>
            <ul className='h-[300px] overflow-x-hidden overflow-scroll scroll-smooth overscroll-contain scrollbar'>
               {    
                specialities.map((ele)=><li className='p-2 pl-7 cursor-pointer hover:bg-slate-200'>
                    {ele.name}
                </li>)
               }
            </ul>
        </div>
    )
}