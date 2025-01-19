import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
    },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
