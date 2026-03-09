"use client";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export function useCountUp(target: number, duration = 2000) {
    const [count, setCount] = useState(0);
    const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const started = useRef(false);

    useEffect(() => {
        if (!inView || started.current) return;
        started.current = true;
        const startTime = Date.now();
        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress >= 1) {
                setCount(target);
                clearInterval(timer);
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target, duration]);

    // inViewRef from react-intersection-observer is compatible with div elements
    return { count, ref: inViewRef };
}
