import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormData {
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
}

interface FormState {
    data: FormData;
    status: "idle" | "submitting" | "success" | "error";
    errorMessage: string;
}

const initialState: FormState = {
    data: {
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    },
    status: "idle",
    errorMessage: "",
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setFormData: (state, action: PayloadAction<Partial<FormData>>) => {
            state.data = { ...state.data, ...action.payload };
        },
        setSubmitting: (state) => {
            state.status = "submitting";
        },
        setSuccess: (state) => {
            state.status = "success";
            state.data = initialState.data;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.status = "error";
            state.errorMessage = action.payload;
        },
        resetForm: (state) => {
            state.status = "idle";
            state.errorMessage = "";
        },
    },
});

export const { setFormData, setSubmitting, setSuccess, setError, resetForm } =
    formSlice.actions;
export default formSlice.reducer;
