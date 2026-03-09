"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Printer } from "lucide-react";
import gsap from "gsap";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setMobileMenu, openQuoteModal } from "@/store/slices/uiSlice";
import { WHATSAPP_URL } from "@/lib/utils";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

/** Animated logo brand mark with GSAP letter-split styles */
function AnimatedBrand() {
    const raghuRef = useRef<HTMLSpanElement>(null);
    const adsRef = useRef<HTMLSpanElement>(null);
    const taglineRef = useRef<HTMLSpanElement>(null);
    const mounted = useRef(false);

    useEffect(() => {
        if (mounted.current) return;
        mounted.current = true;

        // RAGHU – staggered slide-in from left, gold fill
        if (raghuRef.current) {
            const letters = raghuRef.current.querySelectorAll(".letter");
            gsap.fromTo(
                letters,
                { opacity: 0, x: -10, skewX: 20 },
                {
                    opacity: 1,
                    x: 0,
                    skewX: 0,
                    stagger: 0.06,
                    duration: 0.5,
                    ease: "back.out(2)",
                    delay: 2.3,
                }
            );
        }

        // ADS – pop-scale in with yellow glow
        if (adsRef.current) {
            const letters = adsRef.current.querySelectorAll(".letter");
            gsap.fromTo(
                letters,
                { opacity: 0, scale: 0.4, rotation: -15 },
                {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    stagger: 0.08,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.5)",
                    delay: 2.65,
                }
            );
        }

        // Tagline – fade + clip reveal
        if (taglineRef.current) {
            gsap.fromTo(
                taglineRef.current,
                { opacity: 0, clipPath: "inset(0 100% 0 0)", letterSpacing: "0.4em" },
                {
                    opacity: 1,
                    clipPath: "inset(0 0% 0 0)",
                    letterSpacing: "0.15em",
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 3.1,
                }
            );
        }
    }, []);

    const raghuLetters = "RAGHU".split("");
    const adsLetters = "ADS".split("");

    return (
        <div className="flex flex-col leading-none select-none">
            {/* Line 1: RAGHU + ADS with different styles */}
            <div className="flex items-baseline gap-1.5">
                {/* RAGHU – clean white, display font */}
                <span
                    ref={raghuRef}
                    className="font-display text-[22px] text-white tracking-[0.08em] inline-flex"
                >
                    {raghuLetters.map((l, i) => (
                        <span key={i} className="letter inline-block opacity-0">{l}</span>
                    ))}
                </span>

                {/* ADS – bold yellow with slight outline, slightly bigger */}
                <span
                    ref={adsRef}
                    className="font-display text-[26px] tracking-[0.05em] inline-flex"
                    style={{ color: "#FFD600", WebkitTextStroke: "0.5px #c9a900" }}
                >
                    {adsLetters.map((l, i) => (
                        <span key={i} className="letter inline-block opacity-0">{l}</span>
                    ))}
                </span>
            </div>

            {/* Line 2: Tagline – thin uppercase, primary color clip-reveal */}
            <span
                ref={taglineRef}
                className="text-[7.5px] uppercase font-semibold tracking-[0.15em] text-primary/80 opacity-0 mt-0.5 block"
                style={{ clipPath: "inset(0 100% 0 0)" }}
            >
                Digital Ads &amp; Flex Printing
            </span>
        </div>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const dispatch = useAppDispatch();
    const mobileOpen = useAppSelector((s) => s.ui.mobileMenuOpen);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNav = (href: string) => {
        dispatch(setMobileMenu(false));
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 2.1 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-black/95 backdrop-blur-md border-b border-[#FFD600]/20"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">

                        {/* Logo */}
                        <a
                            href="#home"
                            onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
                            className="flex items-center gap-2.5 group"
                        >
                            {/* Icon mark */}
                            <div className="relative">
                                <div className="w-9 h-9 bg-[#FFD600] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,214,0,0.4)] group-hover:shadow-[0_0_25px_rgba(255,214,0,0.6)] transition-all duration-300">
                                    <Printer className="w-5 h-5 text-black" />
                                </div>
                                {/* Pulse dot */}
                                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#FFD600] rounded-full animate-pulse" />
                            </div>

                            {/* Animated brand text */}
                            <AnimatedBrand />
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-7">
                            {navLinks.map((link, i) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                                    className="text-sm font-semibold text-white/70 hover:text-[#FFD600] transition-colors duration-200 relative group py-1"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#FFD600] group-hover:w-full transition-all duration-300 rounded-full" />
                                </a>
                            ))}
                        </div>

                        {/* CTA + Mobile toggle */}
                        <div className="flex items-center gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,214,0,0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => dispatch(openQuoteModal())}
                                className="hidden md:flex items-center gap-2 bg-[#FFD600] text-black font-bold px-5 py-2.5 rounded-lg text-sm transition-all"
                            >
                                Get Quote
                            </motion.button>
                            <button
                                onClick={() => dispatch(setMobileMenu(!mobileOpen))}
                                className="md:hidden text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.32 }}
                        className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl flex flex-col pt-20 px-6"
                    >
                        {/* Mobile brand header */}
                        <div className="mb-8 flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#FFD600] rounded-lg flex items-center justify-center">
                                <Printer className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <div className="font-display text-2xl text-white tracking-widest">
                                    RAGHU <span className="text-[#FFD600]">ADS</span>
                                </div>
                                <div className="text-[9px] text-[#FFD600]/70 tracking-[0.25em] uppercase font-medium">
                                    Digital Ads &amp; Flex Printing
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                                    className="text-3xl font-display text-white py-3.5 border-b border-white/10 flex justify-between items-center hover:text-[#FFD600] transition-colors"
                                >
                                    {link.label}
                                    <span className="text-[#FFD600] text-xl">→</span>
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-3">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => { dispatch(setMobileMenu(false)); dispatch(openQuoteModal()); }}
                                className="w-full bg-[#FFD600] text-black font-bold py-4 rounded-xl text-lg"
                            >
                                Get Free Quote
                            </motion.button>
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45 }}
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-green-500 text-white font-bold py-4 rounded-xl text-lg text-center"
                            >
                                💬 WhatsApp Us
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
