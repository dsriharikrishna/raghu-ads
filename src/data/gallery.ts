// ─── Gallery / Portfolio Data ──────────────────────────────────────────────────
export type GalleryCategory =
    | "all"
    | "shop-boards"
    | "event-banners"
    | "political"
    | "hoardings"
    | "wedding";

export interface GalleryItem {
    id: string;
    title: string;
    category: GalleryCategory;
    src: string;
    thumb: string;
}

export const galleryItems: GalleryItem[] = [
    { id: "1", title: "Shop Name Board", category: "shop-boards", src: "/gallery/shop1.jpg", thumb: "/gallery/shop1.jpg" },
    { id: "2", title: "Retail Store Board", category: "shop-boards", src: "/gallery/shop2.jpg", thumb: "/gallery/shop2.jpg" },
    { id: "3", title: "Event Banner", category: "event-banners", src: "/gallery/event1.jpg", thumb: "/gallery/event1.jpg" },
    { id: "4", title: "Stage Backdrop", category: "event-banners", src: "/gallery/event2.jpg", thumb: "/gallery/event2.jpg" },
    { id: "5", title: "Political Campaign Flex", category: "political", src: "/gallery/political1.jpg", thumb: "/gallery/political1.jpg" },
    { id: "6", title: "Election Hoarding", category: "political", src: "/gallery/political2.jpg", thumb: "/gallery/political2.jpg" },
    { id: "7", title: "Highway Hoarding", category: "hoardings", src: "/gallery/hoarding1.jpg", thumb: "/gallery/hoarding1.jpg" },
    { id: "8", title: "Advertising Billboard", category: "hoardings", src: "/gallery/hoarding2.jpg", thumb: "/gallery/hoarding2.jpg" },
    { id: "9", title: "Wedding Flex Banner", category: "wedding", src: "/gallery/wedding1.jpg", thumb: "/gallery/wedding1.jpg" },
    { id: "10", title: "Reception Backdrop", category: "wedding", src: "/gallery/wedding2.jpg", thumb: "/gallery/wedding2.jpg" },
];

export const galleryCategories: { label: string; value: GalleryCategory }[] = [
    { label: "All", value: "all" },
    { label: "Shop Boards", value: "shop-boards" },
    { label: "Event Banners", value: "event-banners" },
    { label: "Political", value: "political" },
    { label: "Hoardings", value: "hoardings" },
    { label: "Wedding", value: "wedding" },
];

// Placeholder colours for each gallery item (used until real images are added)
export const galleryPlaceholderColors: { bg: string; text: string }[] = [
    { bg: "#FFD600", text: "#000" },
    { bg: "#111", text: "#FFD600" },
    { bg: "#1a1a1a", text: "#FFD600" },
    { bg: "#FFD600", text: "#000" },
    { bg: "#222", text: "#FFD600" },
    { bg: "#FFD600", text: "#000" },
    { bg: "#333", text: "#FFD600" },
    { bg: "#FFD600", text: "#000" },
    { bg: "#1a1a1a", text: "#FFD600" },
    { bg: "#FFD600", text: "#000" },
];
