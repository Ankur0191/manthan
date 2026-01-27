"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Dynamically import ReactPlayer to avoid hydration mismatch
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false }) as any;

const AboutPreview = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Section background="dark" className="py-24 border-y border-white/5 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-blue/5 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Text Content */}
                <div className="order-2 lg:order-1">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-poppins text-white mb-6"
                    >
                        Churning of <span className="text-primary-blue">Ideas</span>
                    </motion.h2>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                        <p>
                            Manthan, the Annual Management & Cultural Fest of TISS Mumbai, is a dynamic convergence of ideas, creativity, leadership, and social consciousness.
                        </p>
                        <p>
                            It is a platform where <span className="text-white font-medium italic">culture meets strategy</span> and passion meets purpose, attracting participation from 80+ premier institutions across India.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <Button variant="secondary" href="/about">
                            Explore Manthan
                        </Button>
                    </div>
                </div>

                {/* Video Side */}
                <div className="order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-video rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.15)] border border-primary-blue/30 group"
                    >
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-blue z-20"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-blue z-20"></div>

                        {mounted ? (
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=LXb3EKWsInQ" // Placeholder
                                width="100%"
                                height="100%"
                                controls
                                light="https://placehold.co/800x450/0a0a0a/00F0FF?text=Manthan+Teaser"
                                playIcon={
                                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-primary-blue group-hover:border-transparent transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2 group-hover:border-l-dark-bg transition-colors" />
                                    </div>
                                }
                            />
                        ) : (
                            <div className="w-full h-full bg-dark-surface animate-pulse flex items-center justify-center border border-white/5">
                                <span className="text-gray-600 font-mono tracking-widest text-xs">INITIALIZING_PLAYER...</span>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export { AboutPreview };
