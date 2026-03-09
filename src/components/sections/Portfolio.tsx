"use client";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setFilter } from "@/store/slices/gallerySlice";
import { galleryCategories, galleryPlaceholderColors, type GalleryCategory } from "@/data/gallery";

export default function Portfolio() {
    const dispatch = useAppDispatch();
    const { items, activeFilter } = useAppSelector((s) => s.gallery);
    const [lightboxItem, setLightboxItem] = useState<{ title: string; idx: number } | null>(null);

    const filtered =
        activeFilter === "all" ? items : items.filter((i) => i.category === activeFilter);

    return (
        <section id="portfolio" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div className="text-center mb-14"
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <div className="inline-flex items-center gap-2 text-[#FFD600] text-xs font-semibold tracking-widest uppercase mb-4">
                        <span className="w-8 h-0.5 bg-[#FFD600]" />Our Work<span className="w-8 h-0.5 bg-[#FFD600]" />
                    </div>
                    <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-5">PORTFOLIO</h2>
                    <p className="text-white/50 text-base max-w-xl mx-auto">
                        A glimpse into our best printed works across different categories.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.2 }}>
                    <LayoutGroup>
                        {galleryCategories.map((cat) => (
                            <motion.button key={cat.value}
                                onClick={() => dispatch(setFilter(cat.value as GalleryCategory))}
                                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${activeFilter === cat.value
                                        ? "text-black"
                                        : "text-white/60 bg-[#111] border border-[#1E1E1E] hover:border-[#FFD600]/40 hover:text-white"
                                    }`}
                                whileTap={{ scale: 0.95 }}>
                                {activeFilter === cat.value && (
                                    <motion.div layoutId="filter-bg"
                                        className="absolute inset-0 bg-[#FFD600] rounded-full"
                                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }} />
                                )}
                                <span className="relative z-10">{cat.label}</span>
                            </motion.button>
                        ))}
                    </LayoutGroup>
                </motion.div>

                {/* Gallery Grid */}
                <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4" layout>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((item, idx) => {
                            const colors = galleryPlaceholderColors[(parseInt(item.id) - 1) % galleryPlaceholderColors.length];
                            return (
                                <motion.div key={item.id} layout
                                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.35, delay: idx * 0.04 }}
                                    className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                                    onClick={() => setLightboxItem({ title: item.title, idx })}
                                    whileHover={{ scale: 1.03 }}>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4"
                                        style={{ backgroundColor: colors.bg }}>
                                        <div className="font-display text-4xl mb-2" style={{ color: colors.text }}>RA</div>
                                        <div className="text-xs font-bold text-center leading-tight" style={{ color: colors.text }}>{item.title}</div>
                                        <div className="text-[9px] mt-1 opacity-60 uppercase tracking-widest" style={{ color: colors.text }}>Raghu Ads</div>
                                    </div>
                                    <motion.div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="font-display text-lg text-white text-center px-3">{item.title}</div>
                                        <div className="w-8 h-0.5 bg-[#FFD600]" />
                                        <span className="text-[#FFD600] text-xs uppercase tracking-widest">View</span>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Lightbox */}
                <AnimatePresence>
                    {lightboxItem && (
                        <motion.div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setLightboxItem(null)}>
                            <motion.div className="bg-[#111] border border-[#1E1E1E] rounded-2xl p-8 max-w-sm w-full text-center"
                                initial={{ scale: 0.8, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 40 }}
                                onClick={(e) => e.stopPropagation()}>
                                <div className="aspect-video rounded-xl mb-4 flex items-center justify-center"
                                    style={{ backgroundColor: galleryPlaceholderColors[lightboxItem.idx % galleryPlaceholderColors.length].bg }}>
                                    <div className="font-display text-4xl"
                                        style={{ color: galleryPlaceholderColors[lightboxItem.idx % galleryPlaceholderColors.length].text }}>
                                        RAGHU ADS
                                    </div>
                                </div>
                                <h3 className="font-display text-2xl text-white mb-2">{lightboxItem.title}</h3>
                                <p className="text-white/40 text-sm mb-5">Professional printing by Raghu Ads, Devarakadra</p>
                                <button onClick={() => setLightboxItem(null)} className="text-[#FFD600] text-sm hover:underline">
                                    Close ✕
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
