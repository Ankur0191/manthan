"use client";

import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { Section } from "@/components/ui/Section";

interface RendererProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

const CountdownTimer = () => {
    const [mounted, setMounted] = useState(false);
    const targetDate = new Date("2026-02-12T00:00:00");

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderer = ({ days, hours, minutes, seconds, completed }: RendererProps) => {
        if (completed) {
            return (
                <div className="text-center text-4xl md:text-6xl font-bold text-primary-yellow animate-pulse drop-shadow-[0_0_20px_rgba(236,178,92,0.8)]">
                    SYSTEM_LIVE
                </div>
            );
        }

        return (
            <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                <TimeBox value={days} label="DAYS" />
                <TimeBox value={hours} label="HRS" />
                <TimeBox value={minutes} label="MIN" />
                <TimeBox value={seconds} label="SEC" />
            </div>
        );
    };

    return (
        <Section background="dark" className="border-y border-white/5 relative">
            {/* Tech lines background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(255,255,255,0.05) 50%)', backgroundSize: '40px 100%' }}>
            </div>

            <div className="text-center relative z-10">
                <h3 className="text-sm font-mono text-primary-blue mb-10 tracking-widest uppercase">
                    [ T-MINUS TO LAUNCH ]
                </h3>
                {mounted ? <Countdown date={targetDate} renderer={renderer} /> : (
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12 opacity-50">
                        <TimeBox value={0} label="DAYS" />
                        <TimeBox value={0} label="HRS" />
                        <TimeBox value={0} label="MIN" />
                        <TimeBox value={0} label="SEC" />
                    </div>
                )}
            </div>
        </Section>
    );
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center group">
        <div className="relative bg-dark-bg border border-white/10 rounded-sm p-4 md:p-8 min-w-[100px] md:min-w-[160px] shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-primary-blue/50 transition-colors duration-500">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary-blue opacity-50"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary-blue opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary-blue opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary-blue opacity-50"></div>

            <span className="text-5xl md:text-8xl font-bold font-mono tabular-nums text-white group-hover:text-primary-blue group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] transition-all duration-300">
                {value < 10 ? `0${value}` : value}
            </span>
        </div>
        <span className="mt-4 text-xs font-bold font-mono text-gray-500 group-hover:text-primary-yellow transition-colors">
      //{label}
        </span>
    </div>
);

export { CountdownTimer };
