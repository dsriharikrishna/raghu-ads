"use client";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { stats, aboutFeatures } from "@/data/about";
import { CheckCircle, Zap, DollarSign, Cpu } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    Cpu, Zap, DollarSign, CheckCircle,
};

function StatCounter({ value, suffix, label, icon }: (typeof stats)[0]) {
    const { count, ref } = useCountUp(value, 2000);
    return (
        <div ref={ref} className="text-center group">
            <div className="text-4xl mb-2">{icon}</div>
            <div className="font-display text-5xl sm:text-6xl text-[#FFD600] mb-1">
                {count}{suffix}
            </div>
            <div className="text-white/50 text-sm font-medium tracking-wide">{label}</div>
        </div>
    );
}

export default function About() {
    return (
        <section id="about" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none"
                style={{ backgroundImage: "repeating-linear-gradient(45deg,#FFD600 0,#FFD600 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}
                    <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center gap-2 text-[#FFD600] text-xs font-semibold tracking-widest uppercase mb-5">
                            <span className="w-8 h-0.5 bg-[#FFD600]" />Who We Are
                        </div>
                        <h2 className="font-display text-5xl sm:text-6xl text-white mb-7 leading-none">
                            ABOUT <br /><span className="text-[#FFD600]">RAGHU ADS</span>
                        </h2>
                        <p className="text-white/60 text-base leading-relaxed mb-8">
                            Raghu Ads is a professional digital printing service offering high quality flex printing,
                            vinyl banners, hoardings, and advertising materials for businesses, political campaigns,
                            and events. Located at Devarakadra, we serve clients across the region with exceptional
                            quality and reliable delivery.
                        </p>
                        <div className="space-y-4">
                            {aboutFeatures.map((f) => {
                                const Icon = iconMap[f.icon] ?? Cpu;
                                return (
                                    <motion.div key={f.text} className="flex items-start gap-3"
                                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }} transition={{ duration: 0.5 }}>
                                        <div className="w-8 h-8 rounded-lg bg-[#FFD600]/10 border border-[#FFD600]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Icon className="w-4 h-4 text-[#FFD600]" />
                                        </div>
                                        <span className="text-white/70 text-sm leading-relaxed">{f.text}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <div className="relative bg-[#111] border border-[#1E1E1E] rounded-2xl p-8 overflow-hidden mb-8">
                            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center,rgba(255,214,0,0.1) 0%,transparent 70%)" }} />
                            <div className="relative z-10 text-center mb-10">
                                <div className="font-display text-2xl text-white mb-2">WHY CLIENTS LOVE US</div>
                                <div className="w-12 h-0.5 bg-[#FFD600] mx-auto" />
                            </div>
                            <div className="relative z-10 flex items-center justify-center mb-8">
                                <motion.div className="w-36 h-36 rounded-full border-4 border-[#FFD600]/30 flex items-center justify-center relative"
                                    animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                                    <div className="absolute inset-4 rounded-full bg-[#FFD600] flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="font-display text-3xl text-black">8+</div>
                                            <div className="text-black/70 text-xs font-bold">YEARS</div>
                                        </div>
                                    </div>
                                    {[0, 90, 180, 270].map((angle) => (
                                        <div key={angle} className="absolute w-3 h-3 rounded-full bg-[#FFD600]/60"
                                            style={{ transform: `rotate(${angle}deg) translateX(68px)`, transformOrigin: "center" }} />
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="bg-[#111] border border-[#1E1E1E] rounded-xl p-4">
                                    <StatCounter {...stat} />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
