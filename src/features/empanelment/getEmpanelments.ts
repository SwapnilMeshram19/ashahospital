import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export interface empanelmentLogoI {
    filename: string,
    contentType: string,
    imageBase64: string,
}

export interface empanelmentI {
    _id: string,
    name: string
    empanelmentType: string,
    empanelmentLogo: empanelmentLogoI
}

export const empanelmentSlice = createApi({
    reducerPath: 'empanelmentApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/empanelment'
    }),
    endpoints(builder) {
        return {
            fetchEmpanelments: builder.query<empanelmentI[], void>({
                query() {
                    return '/getempanelment';
                }
            })
        }
    }
});

export const { useFetchEmpanelmentsQuery } = empanelmentSlice;