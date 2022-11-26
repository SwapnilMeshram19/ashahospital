import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export interface doctorImgI{
    filename:string,
    contentType:string,
    imageBase64:string,
}

export interface doctorI{
    _id:string,
    name: string
    qualification:string,
    specility:string,
    profile_photo:doctorImgI
}

export const doctorSlice=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:8080/doctor'
    }),
    endpoints(builder){
        return{
                fetchDoctors:builder.query<doctorI,void>({
                query(){
                    return '/getdoctors';
                }
            })
        }
    }
});

export const {useFetchDoctorsQuery}=doctorSlice;