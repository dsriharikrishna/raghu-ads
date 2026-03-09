// ─── Why Choose Us Features ────────────────────────────────────────────────────
export interface WhyFeature {
    icon: string; // lucide-react icon name
    title: string;
    desc: string;
}

export const whyFeatures: WhyFeature[] = [
    {
        icon: "CheckCircle2",
        title: "High Quality Printing",
        desc: "State-of-the-art machines producing crisp, vibrant, long-lasting prints.",
    },
    {
        icon: "Truck",
        title: "Fast Delivery",
        desc: "Quick turnaround times. Same-day delivery available for urgent orders.",
    },
    {
        icon: "BadgeDollarSign",
        title: "Affordable Prices",
        desc: "Competitive pricing without compromising on quality. Best value guaranteed.",
    },
    {
        icon: "Palette",
        title: "Custom Designs",
        desc: "Free design assistance. Bring your vision or let our team create it.",
    },
    {
        icon: "Maximize2",
        title: "Large Format Printing",
        desc: "From visiting cards to massive hoardings — we cover every size.",
    },
    {
        icon: "Clock",
        title: "24/7 Support",
        desc: "Always available on WhatsApp and phone for quotes and support.",
    },
];
