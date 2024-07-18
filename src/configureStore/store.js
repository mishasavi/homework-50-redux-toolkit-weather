import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../slices/weatherSlice.js';
import { loggerEnhancer } from "../middleware/loggerEnhancer";

export const store = configureStore({
    reducer: weatherReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerEnhancer)
});