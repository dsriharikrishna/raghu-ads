"use client";
import { motion } from "framer-motion";
import { useStaggerReveal } from "@/hooks/useScrollAnimation";
import { useAppSelector } from "@/hooks/redux";
import {
    Layers, FileImage, Monitor, Lightbulb, Star,
    Tag, Image, Mail, CreditCard,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    Layers, FileImage, Monitor, Lightbulb, Star,
    Tag, Image, Mail, CreditCard,
};

export default function Services() {
    const services = useAppSelector((s) => s.services.items);
    const containerRef = useStaggerReveal(0.08);

    return (
        <section id="services" className="py-24 bg-black relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-yellow-glow opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                        <span className="w-8 h-0.5 bg-primary" />
                        What We Offer
                        <span className="w-8 h-0.5 bg-primary" />
                    </div>
                    <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-5">
                        OUR SERVICES
                    </h2>
                    <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
                        From flex banners to visiting cards — we handle all your printing needs with precision, quality, and speed.
                    </p>
                </motion.div>

                {/* Service Cards Grid */}
                <div
                    ref={containerRef as React.RefObject<HTMLDivElement>}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {services.map((service) => {
                        const Icon = iconMap[service.icon] || Layers;
                        return (
                            <motion.div
                                key={service.id}
                                className="group relative bg-card border border-border rounded-2xl p-7 cursor-pointer overflow-hidden"
                                whileHover={{ scale: 1.02, y: -4 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                {/* Hover glow overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-primary/5 rounded-2xl"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                    className="absolute top-0 left-0 right-0 h-0.5 bg-primary"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Icon */}
                                <motion.div
                                    className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 relative z-10"
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Icon className="w-7 h-7 text-primary" />
                                </motion.div>

                                <h3 className="font-display text-2xl text-white mb-3 tracking-wide relative z-10">
                                    {service.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed relative z-10">
                                    {service.description}
                                </p>

                                {/* Corner accent */}
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/10 rounded-tl-2xl group-hover:border-primary/30 transition-colors" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
