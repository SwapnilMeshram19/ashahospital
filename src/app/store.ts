import {configureStore} from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import {adminLoginSlice} from '../features/adminLogin/loginSlice'
export const store=configureStore({
    reducer:{
        [adminLoginSlice.reducerPath]:adminLoginSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(adminLoginSlice.middleware);
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;