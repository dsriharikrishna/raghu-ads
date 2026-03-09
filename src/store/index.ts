import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./slices/servicesSlice";
import galleryReducer from "./slices/gallerySlice";
import formReducer from "./slices/formSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
    reducer: {
        services: servicesReducer,
        gallery: galleryReducer,
        form: formReducer,
        ui: uiReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
