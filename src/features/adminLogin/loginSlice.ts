import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export interface loginDetailsI{
    name:String,
    password:String
}

interface adminLoginI{
    response:String,
    token:String,
    user:{
        name:String
    }
}

export const adminLoginSlice=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:8080'
    }),
    endpoints(builder){
        return{
            postAdminLogin:builder.mutation<adminLoginI,Partial<loginDetailsI>>({
                query(body){
                    return{
                        url:'/adminLogin',
                        method:'POST',
                        body
                    }
                }
            })
        }
    }
});



export const {usePostAdminLoginMutation} = adminLoginSlice;
