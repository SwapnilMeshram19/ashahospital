import * as React from 'react';
export interface specialitiesI{
    _id?:string,
    name:string
}
export const specialities:specialitiesI[] = [
    {
        name:"Anaesthesiology"
    },
    {
        name:"Critical Care"
    },
    {
        name:"Cardiology"
    },
    {
        name:"Dentistry"
    },
    {
        name:"Dermatology"
    },
    {
        name:"Diabetology"
    },
    {
        name:"Ear Nose & Throat Surgery (ENT)"
    },
    {
        name:"Gastroenterology"
    },
    {
        name:"General & Laproscopic Surgery"
    },
    {
        name:"Gynecology"
    },
    {
        name:"General Medicine"
    },
    {
        name:"Nephrology & Urology"
    },
    {
        name:"Neurology & Neurosurgery"
    },
    {
        name:"Orthopedics"
    }
   
]

export interface doctorSpecialitiesI{
    title:string
}

export const doctorSpecialities:doctorSpecialitiesI[]=[
    {title:'General Physician'},
    {title:'General Surgeon'},
    {title:'Neuro Surgeon'},
    {title:'Orthopedician'},
    {title:'Gynaecologist'},
    {title:'Onco Surgeon'},
    {title:'Nephrologist'}

]