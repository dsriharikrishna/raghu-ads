import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { services, type Service } from "@/data/services";

interface ServicesState {
    items: Service[];
    activeService: string | null;
}

const initialState: ServicesState = {
    items: services,
    activeService: null,
};

const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        setActiveService: (state, action: PayloadAction<string | null>) => {
            state.activeService = action.payload;
        },
    },
});

export type { Service };
export const { setActiveService } = servicesSlice.actions;
export default servicesSlice.reducer;
