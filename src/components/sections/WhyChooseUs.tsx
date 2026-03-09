"use client";
import { motion } from "framer-motion";
import { whyFeatures } from "@/data/features";
import { WHATSAPP_URL, PHONE_1 } from "@/data/contact";
import {
    CheckCircle2, Truck, BadgeDollarSign, Palette, Maximize2, Clock,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    CheckCircle2, Truck, BadgeDollarSign, Palette, Maximize2, Clock,
};

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <div className="inline-flex items-center gap-2 text-[#FFD600] text-xs font-semibold tracking-widest uppercase mb-4">
                        <span className="w-8 h-0.5 bg-[#FFD600]" />Our Advantages<span className="w-8 h-0.5 bg-[#FFD600]" />
                    </div>
                    <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-5">WHY CHOOSE US</h2>
                    <p className="text-white/50 text-base max-w-xl mx-auto">
                        We deliver more than just prints — we deliver confidence in every order.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {whyFeatures.map((feature, i) => {
                        const Icon = iconMap[feature.icon] ?? CheckCircle2;
                        return (
                            <motion.div key={feature.title}
                                className="group relative bg-[#111] border border-[#1E1E1E] rounded-2xl p-7 overflow-hidden"
                                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -6, borderColor: "rgba(255,214,0,0.4)" }}>
                                <div className="absolute top-5 right-5 font-display text-6xl text-white/5 leading-none select-none">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div className="relative mb-5">
                                    <motion.div className="w-14 h-14 rounded-xl bg-[#FFD600]/10 border border-[#FFD600]/20 flex items-center justify-center"
                                        whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <Icon className="w-7 h-7 text-[#FFD600]" />
                                    </motion.div>
                                </div>
                                <h3 className="font-display text-xl text-white mb-3 tracking-wide">{feature.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                                <motion.div className="absolute bottom-0 left-0 h-0.5 bg-[#FFD600]"
                                    initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 0.4 }} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Banner */}
                <motion.div className="mt-16 bg-[#FFD600] rounded-2xl p-10 text-center relative overflow-hidden"
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.3 }}>
                    <div className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: "repeating-linear-gradient(45deg,#000 0,#000 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
                    <h3 className="font-display text-4xl sm:text-5xl text-black mb-4 relative z-10">READY TO PRINT?</h3>
                    <p className="text-black/70 font-medium mb-7 relative z-10">Get your custom quote in minutes. Contact us now!</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                        <a href={`tel:${PHONE_1}`}
                            className="inline-flex items-center gap-2 bg-black text-white font-bold px-8 py-3.5 rounded-xl hover:bg-black/80 transition-colors">
                            📞 Call Now
                        </a>
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-black/20 text-black font-bold px-8 py-3.5 rounded-xl hover:bg-black/30 transition-colors border border-black/20">
                            💬 WhatsApp Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
