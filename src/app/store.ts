import {configureStore} from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import {adminLoginSlice} from '../features/adminLogin/loginSlice'
import { eventSlice } from '../features/events/getEvent';
export const store=configureStore({
    reducer:{
        [adminLoginSlice.reducerPath]:adminLoginSlice.reducer,
        [eventSlice.reducerPath]:eventSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(adminLoginSlice.middleware);
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;