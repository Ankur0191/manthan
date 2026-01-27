"use client";

import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-bg text-center">

            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 grayscale"
                    style={{ backgroundImage: 'url(https://placehold.co/1920x1080/0a0a0a/ECB25C?text=Manthan+Background)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/50 via-transparent to-dark-bg" />
            </motion.div>

            {/* Floating Elements (Cyber/Tech Deco) */}
            <div className="absolute top-1/4 left-10 w-24 h-24 border border-primary-blue/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-primary-yellow/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary-glow rounded-full shadow-[0_0_10px_#FFD700] animate-pulse" />

            <div className="relative z-10 px-4 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6"
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs md:text-sm font-medium text-primary-blue tracking-widest uppercase">
                        Tata Institute of Social Sciences Presents
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-7xl md:text-9xl lg:text-[12rem] font-bold font-poppins mb-2 tracking-tighter leading-none"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        MANTHAN
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl md:text-4xl font-light mb-10 text-primary-yellow tracking-widest uppercase"
                >
                    Dare<span className="text-white/20 mx-4">/</span>Dream<span className="text-white/20 mx-4">/</span>Discover
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-400 font-mono mb-12 flex items-center justify-center gap-4"
                >
                    <span className="text-primary-blue">&#60;</span>
                    February 12–13, 2026
                    <span className="text-primary-blue">/&#62;</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Button size="lg" variant="primary" href="/events" className="min-w-[200px] shadow-[0_0_40px_rgba(236,178,92,0.2)]">
                        Register Now
                    </Button>
                    <Button size="lg" variant="outline" href="/about" className="min-w-[200px]">
                        Explore
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-gray-600">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary-blue to-transparent"></div>
            </motion.div>
        </div>
    );
};

export { Hero };
