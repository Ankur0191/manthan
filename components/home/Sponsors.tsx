"use client";

import { Section } from "@/components/ui/Section";
import { SPONSORS } from "@/data/mock";
import Image from "next/image";

const Sponsors = () => {
    const platinum = SPONSORS.filter(s => s.tier === 'Platinum');
    const gold = SPONSORS.filter(s => s.tier === 'Gold');
    const silver = SPONSORS.filter(s => s.tier === 'Silver');

    return (
        <Section background="dark" className="py-24 border-t border-white/5">
            <div className="text-center mb-20">
                <h2 className="text-2xl md:text-3xl font-bold font-poppins text-gray-500 mb-2 uppercase tracking-tight">
                    Powered By
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto"></div>
            </div>

            <div className="space-y-20">
                {/* Platinum */}
                {platinum.length > 0 && (
                    <div className="text-center">
                        <h3 className="text-sm font-bold text-primary-blue mb-10 font-mono tracking-[0.2em] uppercase glow-text">
               // Platinum Partners
                        </h3>
                        <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center">
                            {platinum.map(s => (
                                <div key={s.id} className="w-48 h-32 relative grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer">
                                    <div className="absolute inset-0 bg-primary-blue/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                                    <Image src={s.logo} alt={s.name} fill className="object-contain relative z-10" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Gold */}
                {gold.length > 0 && (
                    <div className="text-center">
                        <h3 className="text-sm font-bold text-primary-yellow mb-10 font-mono tracking-[0.2em] uppercase">
               // Gold Partners
                        </h3>
                        <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center">
                            {gold.map(s => (
                                <div key={s.id} className="w-40 h-24 relative grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 hover:scale-105 cursor-pointer">
                                    <Image src={s.logo} alt={s.name} fill className="object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Silver */}
                {silver.length > 0 && (
                    <div className="text-center">
                        <h3 className="text-sm font-bold text-gray-500 mb-10 font-mono tracking-[0.2em] uppercase">
               // Silver Partners
                        </h3>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-14 items-center">
                            {silver.map(s => (
                                <div key={s.id} className="w-32 h-20 relative grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 cursor-pointer">
                                    <Image src={s.logo} alt={s.name} fill className="object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
};

export { Sponsors };
