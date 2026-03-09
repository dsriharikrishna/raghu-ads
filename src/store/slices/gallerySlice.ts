import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { galleryItems, type GalleryItem, type GalleryCategory } from "@/data/gallery";

interface GalleryState {
    items: GalleryItem[];
    activeFilter: GalleryCategory;
    lightboxOpen: boolean;
    lightboxIndex: number;
}

const initialState: GalleryState = {
    items: galleryItems,
    activeFilter: "all",
    lightboxOpen: false,
    lightboxIndex: 0,
};

const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<GalleryCategory>) => {
            state.activeFilter = action.payload;
        },
        openLightbox: (state, action: PayloadAction<number>) => {
            state.lightboxOpen = true;
            state.lightboxIndex = action.payload;
        },
        closeLightbox: (state) => {
            state.lightboxOpen = false;
        },
    },
});

export type { GalleryItem, GalleryCategory };
export const { setFilter, openLightbox, closeLightbox } = gallerySlice.actions;
export default gallerySlice.reducer;
