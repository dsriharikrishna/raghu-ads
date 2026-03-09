// ─── Printing Services Data ────────────────────────────────────────────────────
export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;     // lucide-react icon name
    color: string;
}

export const services: Service[] = [
    {
        id: "flex",
        title: "Flex Printing",
        description:
            "High-quality flex banners for outdoor advertising with vibrant colors and weather resistance.",
        icon: "Layers",
        color: "#FFD600",
    },
    {
        id: "vinyl",
        title: "Vinyl Printing",
        description:
            "Premium vinyl prints for shops, vehicles, and long-lasting outdoor displays.",
        icon: "FileImage",
        color: "#FFD600",
    },
    {
        id: "hoarding",
        title: "Hoarding Boards",
        description:
            "Large format hoardings for maximum visibility and brand impact on streets and highways.",
        icon: "Monitor",
        color: "#FFD600",
    },
    {
        id: "lighting",
        title: "Lighting Boards",
        description:
            "Illuminated sign boards with LED backlighting for 24/7 brand visibility.",
        icon: "Lightbulb",
        color: "#FFD600",
    },
    {
        id: "starflex",
        title: "Star Flex",
        description:
            "Premium star flex material for superior outdoor prints with enhanced durability.",
        icon: "Star",
        color: "#FFD600",
    },
    {
        id: "stickers",
        title: "Stickers",
        description:
            "Custom die-cut and sheet stickers for branding, packaging, and promotions.",
        icon: "Tag",
        color: "#FFD600",
    },
    {
        id: "posters",
        title: "Posters",
        description:
            "Eye-catching posters in all sizes for events, promotions, and marketing campaigns.",
        icon: "Image",
        color: "#FFD600",
    },
    {
        id: "invitations",
        title: "Invitations",
        description:
            "Beautiful custom wedding cards, event invitations, and occasion cards.",
        icon: "Mail",
        color: "#FFD600",
    },
    {
        id: "visiting",
        title: "Visiting Cards",
        description:
            "Professional business cards with premium finishes to make a lasting impression.",
        icon: "CreditCard",
        color: "#FFD600",
    },
];

// Plain title list (used in Quote Modal, Contact form dropdowns)
export const serviceNames = services.map((s) => s.title);
