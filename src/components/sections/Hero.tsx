"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useAppDispatch } from "@/hooks/redux";
import { openQuoteModal } from "@/store/slices/uiSlice";
import { WHATSAPP_URL } from "@/lib/utils";

/** Wrap each letter in a span for GSAP targeting */
function SplitWord({ word, className = "" }: { word: string; className?: string }) {
    return (
        <>
            {word.split("").map((l, i) => (
                <span key={i} className={`letter inline-block ${className}`} style={{ opacity: 0 }}>
                    {l === " " ? "\u00A0" : l}
                </span>
            ))}
        </>
    );
}

export default function Hero() {
    const dispatch = useAppDispatch();

    // Refs for each styled segment of the headline
    const raghuRef = useRef<HTMLSpanElement>(null);  // "RAGHU"    – white, stagger slide-up
    const adsRef = useRef<HTMLSpanElement>(null);   // "ADS"      – yellow, elastic pop
    const line2Ref = useRef<HTMLDivElement>(null);    // tagline row
    const subtextRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 2.25 });

        // ── RAGHU: letters slide up from below, white
        if (raghuRef.current) {
            tl.fromTo(
                raghuRef.current.querySelectorAll(".letter"),
                { opacity: 0, y: 80, skewX: 10 },
                { opacity: 1, y: 0, skewX: 0, stagger: 0.055, duration: 0.65, ease: "power4.out" }
            );
        }

        // ── ADS: elastic scale pop, yellow per letter
        if (adsRef.current) {
            tl.fromTo(
                adsRef.current.querySelectorAll(".letter"),
                { opacity: 0, scale: 0.2, rotation: -20 },
                { opacity: 1, scale: 1, rotation: 0, stagger: 0.1, duration: 0.7, ease: "elastic.out(1, 0.45)" },
                "-=0.2"
            );
        }

        // ── Tagline: four individual word targets inside line2Ref
        if (line2Ref.current) {
            const words = line2Ref.current.querySelectorAll(".word-seg");
            tl.fromTo(
                words,
                { opacity: 0, y: 20, clipPath: "inset(0 100% 0 0)" },
                {
                    opacity: 1,
                    y: 0,
                    clipPath: "inset(0 0% 0 0)",
                    stagger: 0.15,
                    duration: 0.55,
                    ease: "power3.out",
                },
                "-=0.25"
            );
        }

        // ── Subtext fade in
        if (subtextRef.current) {
            tl.fromTo(
                subtextRef.current,
                { opacity: 0, y: 16 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                "-=0.1"
            );
        }

        return () => { tl.kill(); };
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            {/* ── Animated background ── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
                {/* Glow orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
                    style={{ background: "radial-gradient(circle, rgba(255,214,0,0.1) 0%, transparent 70%)" }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
                    style={{ background: "radial-gradient(circle, rgba(255,214,0,0.07) 0%, transparent 70%)" }}
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                {/* Geometric shapes */}
                <motion.div
                    className="absolute top-24 right-12 w-28 h-28 border border-[#FFD600]/15 rotate-45"
                    animate={{ rotate: [45, 90, 45], opacity: [0.15, 0.4, 0.15] }}
                    transition={{ duration: 9, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-36 left-12 w-16 h-16 border border-[#FFD600]/10"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/2 right-24 w-1 h-20 bg-[#FFD600]/20 rounded-full"
                    animate={{ scaleY: [1, 2.5, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                {/* Floating dots */}
                {[...Array(7)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-[#FFD600]/40"
                        style={{ left: `${10 + i * 13}%`, top: `${18 + (i % 3) * 22}%` }}
                        animate={{ y: [-8, 8, -8], opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.35 }}
                    />
                ))}
            </div>

            {/* ── Main content ── */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.15, duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-[#FFD600]/10 border border-[#FFD600]/25 px-5 py-2 rounded-full mb-10"
                >
                    <span className="w-2 h-2 rounded-full bg-[#FFD600] animate-pulse" />
                    <span className="text-[#FFD600] text-xs font-bold tracking-[0.2em] uppercase">
                        Professional Quality Printing
                    </span>
                </motion.div>

                {/* ── HEADLINE: RAGHU ADS ── */}
                <h1 className="font-display leading-none mb-4">
                    {/* RAGHU – large white, slide up per letter */}
                    <span
                        ref={raghuRef}
                        className="inline-flex text-white mr-4"
                        style={{ fontSize: "clamp(3.5rem,11vw,8.5rem)", letterSpacing: "0.04em" }}
                        aria-label="RAGHU"
                    >
                        <SplitWord word="RAGHU" />
                    </span>

                    {/* ADS – yellow + yellow stroke, elastic pop */}
                    <span
                        ref={adsRef}
                        className="inline-flex"
                        style={{
                            fontSize: "clamp(4rem,13vw,10rem)",
                            letterSpacing: "0.02em",
                            color: "#FFD600",
                            WebkitTextStroke: "1px rgba(200,160,0,0.5)",
                        }}
                        aria-label="ADS"
                    >
                        <SplitWord word="ADS" />
                    </span>
                </h1>

                {/* ── TAGLINE: DIGITAL ADS & FLEX PRINTING ── */}
                {/*
          Each word segment gets a distinct style:
          - DIGITAL  → white, thin tracking, clip reveal
          - ADS      → yellow, medium tracking, clip reveal
          - &        → yellow italic, clip reveal
          - FLEX     → white, extra tracking, clip reveal
          - PRINTING → yellow with textShadow glow, clip reveal
        */}
                <div
                    ref={line2Ref}
                    className="font-display flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-7"
                    style={{ fontSize: "clamp(1.1rem,3.2vw,2.2rem)" }}
                >
                    <span
                        className="word-seg text-white tracking-[0.14em] inline-block opacity-0"
                        style={{ clipPath: "inset(0 100% 0 0)" }}
                    >
                        DIGITAL
                    </span>
                    <span
                        className="word-seg inline-block opacity-0"
                        style={{ color: "#FFD600", letterSpacing: "0.08em", clipPath: "inset(0 100% 0 0)" }}
                    >
                        ADS
                    </span>
                    <span
                        className="word-seg italic inline-block opacity-0"
                        style={{ color: "#FFD600", clipPath: "inset(0 100% 0 0)", fontSize: "1.1em" }}
                    >
                        &amp;
                    </span>
                    <span
                        className="word-seg text-white tracking-[0.16em] inline-block opacity-0"
                        style={{ clipPath: "inset(0 100% 0 0)" }}
                    >
                        FLEX
                    </span>
                    <span
                        className="word-seg font-display inline-block opacity-0"
                        style={{
                            color: "#FFD600",
                            letterSpacing: "0.04em",
                            clipPath: "inset(0 100% 0 0)",
                            textShadow: "0 0 20px rgba(255,214,0,0.5)",
                        }}
                    >
                        PRINTING
                    </span>
                </div>

                {/* Subtext */}
                <p
                    ref={subtextRef}
                    className="text-white/55 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12 opacity-0"
                >
                    High Quality Printing Solutions for Businesses &amp; Events
                </p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.9, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.button
                        onClick={() => dispatch(openQuoteModal())}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,214,0,0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-[#FFD600] text-black font-bold px-9 py-4 rounded-xl text-base"
                        style={{ boxShadow: "0 0 25px rgba(255,214,0,0.28)" }}
                    >
                        Get Free Quote
                        <ArrowRight size={18} />
                    </motion.button>

                    <motion.a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-green-500/10 border border-green-500/40 text-green-400 font-bold px-9 py-4 rounded-xl text-base hover:bg-green-500/20 transition-all"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp Us
                    </motion.a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4.2, duration: 0.6 }}
                    className="mt-16 grid grid-cols-3 gap-4 max-w-xs mx-auto"
                >
                    {[
                        { value: "500+", label: "Projects" },
                        { value: "300+", label: "Clients" },
                        { value: "8+", label: "Years" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="font-display text-2xl sm:text-3xl text-[#FFD600]">{stat.value}</div>
                            <div className="text-white/40 text-xs mt-0.5">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.4 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="text-white/25 w-7 h-7" />
                </motion.div>
            </motion.div>
        </section>
    );
}
