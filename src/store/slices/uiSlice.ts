import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
    quoteModalOpen: boolean;
    mobileMenuOpen: boolean;
    loading: boolean;
    theme: "dark" | "light";
}

const initialState: UIState = {
    quoteModalOpen: false,
    mobileMenuOpen: false,
    loading: true,
    theme: "dark",
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        openQuoteModal: (state) => {
            state.quoteModalOpen = true;
        },
        closeQuoteModal: (state) => {
            state.quoteModalOpen = false;
        },
        toggleMobileMenu: (state) => {
            state.mobileMenuOpen = !state.mobileMenuOpen;
        },
        setMobileMenu: (state, action: PayloadAction<boolean>) => {
            state.mobileMenuOpen = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        toggleTheme: (state) => {
            state.theme = state.theme === "dark" ? "light" : "dark";
        },
    },
});

export const {
    openQuoteModal,
    closeQuoteModal,
    toggleMobileMenu,
    setMobileMenu,
    setLoading,
    toggleTheme,
} = uiSlice.actions;
export default uiSlice.reducer;
