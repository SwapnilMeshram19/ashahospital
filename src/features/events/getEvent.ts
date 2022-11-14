import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export interface eventImgI{
    filename:string,
    contentType:string,
    imageBase64:string,
}

export interface eventI{
    _id:string,
    title: string
    description:string,
    images:eventImgI[]
}

export const eventSlice=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:8080/event'
    }),
    endpoints(builder){
        return{
                fetchEvents:builder.query<eventI[],void>({
                query(){
                    return '/getevents';
                }
            })
        }
    }
});

export const {useFetchEventsQuery}=eventSlice;