import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { adminLoginSlice } from '../features/adminLogin/loginSlice'
import { eventSlice } from '../features/events/getEvent';
import { doctorSlice } from '../features/doctors/getDoctors';


const rootReducer = combineReducers({
    [adminLoginSlice.reducerPath]: adminLoginSlice.reducer,
    [eventSlice.reducerPath]: eventSlice.reducer,
    [doctorSlice.reducerPath]: doctorSlice.reducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(adminLoginSlice.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;