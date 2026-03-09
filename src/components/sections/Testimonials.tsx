"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const navigate = (dir: number) => {
        setDirection(dir);
        setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    };

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
    };

    const t = testimonials[current];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center,rgba(255,214,0,0.06) 0%,transparent 70%)" }} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <div className="inline-flex items-center gap-2 text-[#FFD600] text-xs font-semibold tracking-widest uppercase mb-4">
                        <span className="w-8 h-0.5 bg-[#FFD600]" />Happy Clients<span className="w-8 h-0.5 bg-[#FFD600]" />
                    </div>
                    <h2 className="font-display text-5xl sm:text-6xl text-white mb-5">TESTIMONIALS</h2>
                    <p className="text-white/50 text-base max-w-lg mx-auto">
                        What our clients say about their experience with Raghu Ads.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="overflow-hidden rounded-2xl">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div key={current} custom={direction}
                                variants={variants} initial="enter" animate="center" exit="exit"
                                transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                                className="bg-[#111] border border-[#1E1E1E] rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
                                <Quote className="w-10 h-10 text-[#FFD600]/20 mx-auto mb-6" />
                                <div className="flex justify-center gap-1 mb-6">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-[#FFD600] text-[#FFD600]" />
                                    ))}
                                </div>
                                <blockquote className="text-white/80 text-base sm:text-lg leading-relaxed italic mb-8 max-w-2xl mx-auto">
                                    "{t.review}"
                                </blockquote>
                                <div className="flex items-center justify-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#FFD600] flex items-center justify-center font-display text-xl text-black">
                                        {t.initial}
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-white text-sm">{t.name}</div>
                                        <div className="text-white/40 text-xs">{t.role}</div>
                                    </div>
                                </div>
                                <div className="absolute top-5 right-5 w-20 h-20 border border-[#FFD600]/10 rounded-full" />
                                <div className="absolute -bottom-5 -left-5 w-32 h-32 border border-[#FFD600]/5 rounded-full" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button onClick={() => navigate(-1)}
                        className="absolute top-1/2 -translate-y-1/2 -left-5 sm:-left-10 w-10 h-10 rounded-full bg-[#111] border border-[#1E1E1E] flex items-center justify-center text-white hover:border-[#FFD600] hover:text-[#FFD600] transition-colors">
                        <ChevronLeft size={18} />
                    </button>
                    <button onClick={() => navigate(1)}
                        className="absolute top-1/2 -translate-y-1/2 -right-5 sm:-right-10 w-10 h-10 rounded-full bg-[#111] border border-[#1E1E1E] flex items-center justify-center text-white hover:border-[#FFD600] hover:text-[#FFD600] transition-colors">
                        <ChevronRight size={18} />
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <button key={i}
                            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                            className={`h-2 rounded-full transition-all ${i === current ? "bg-[#FFD600] w-6" : "bg-white/20 w-2"}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}
