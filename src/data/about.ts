// ─── About Section Stats ───────────────────────────────────────────────────────
export interface Stat {
    value: number;
    suffix: string;
    label: string;
    icon: string; // emoji
}

export const stats: Stat[] = [
    { value: 500, suffix: "+", label: "Projects Completed", icon: "🏆" },
    { value: 300, suffix: "+", label: "Happy Clients", icon: "😊" },
    { value: 8, suffix: "+", label: "Years Experience", icon: "🎖️" },
];

// ─── About Section Feature Bullets ────────────────────────────────────────────
export interface AboutFeature {
    icon: string; // lucide-react icon name
    text: string;
}

export const aboutFeatures: AboutFeature[] = [
    { icon: "Cpu", text: "Advanced printing machines for sharp, vibrant output" },
    { icon: "Zap", text: "Fast turnaround — same day and express options" },
    { icon: "DollarSign", text: "Competitive pricing for all budgets" },
    { icon: "CheckCircle", text: "100% quality satisfaction guaranteed" },
];
