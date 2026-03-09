"use client";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function useScrollReveal(options?: { delay?: number; y?: number; duration?: number }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const el = ref.current;
        gsap.fromTo(
            el,
            { opacity: 0, y: options?.y ?? 60 },
            {
                opacity: 1,
                y: 0,
                duration: options?.duration ?? 0.9,
                delay: options?.delay ?? 0,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            }
        );
        return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
    }, [options?.delay, options?.duration, options?.y]);

    return ref;
}

export function useStaggerReveal(stagger = 0.1) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const children = containerRef.current.children;
        gsap.fromTo(
            children,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, [stagger]);

    return containerRef;
}
