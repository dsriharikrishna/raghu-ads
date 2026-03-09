// ─── Testimonials Data ─────────────────────────────────────────────────────────
export interface Testimonial {
    id: number;
    name: string;
    role: string;
    review: string;
    rating: number;   // 1–5
    initial: string;  // Avatar letter
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Venkatesh Reddy",
        role: "Shop Owner, Devarakadra",
        review:
            "Raghu Ads did an excellent job with my shop board. The quality is outstanding and the colors are very vibrant. Fast delivery too. Highly recommended!",
        rating: 5,
        initial: "V",
    },
    {
        id: 2,
        name: "Kavitha Singh",
        role: "Event Organizer",
        review:
            "I needed banners for a big event on short notice. Raghu Ads delivered perfectly on time with amazing quality. The team is very professional and responsive.",
        rating: 5,
        initial: "K",
    },
    {
        id: 3,
        name: "Mohammed Farouk",
        role: "Political Campaign Manager",
        review:
            "We ordered political flex banners and hoardings. The printing quality was superb and the prices were very competitive. Will definitely work with Raghu Ads again.",
        rating: 5,
        initial: "M",
    },
    {
        id: 4,
        name: "Anitha Lakshmi",
        role: "Wedding Planner",
        review:
            "Beautiful wedding flex banners! The design team helped us create the perfect backdrop. Delivery was on time and the quality exceeded our expectations.",
        rating: 5,
        initial: "A",
    },
    {
        id: 5,
        name: "Suresh Kumar",
        role: "Business Owner",
        review:
            "Got my visiting cards and stickers done here. Very affordable pricing with premium quality. The staff is helpful and professional. 5 stars!",
        rating: 5,
        initial: "S",
    },
];
