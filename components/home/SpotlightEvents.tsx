"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { EVENTS } from "@/data/mock";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const SpotlightEvents = () => {
    const flagshipEvents = EVENTS.filter((e) => e.category === "Flagship");

    return (
        <Section background="dark" className="py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4">
                    Spotlight <span className="text-primary-yellow">Events</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                    High stakes. Higher rewards. The central arena awaits.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-12">
                {flagshipEvents.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group flex flex-col md:flex-row bg-dark-surface/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-primary-yellow/30 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(236,178,92,0.1)]"
                    >
                        {/* Image Side */}
                        <div className="md:w-1/2 relative h-64 md:h-auto min-h-[350px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-dark-surface/80 to-transparent z-10 md:hidden"></div>
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                        </div>

                        {/* Content Side */}
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                            {/* Decorative background glow */}
                            <div className="absolute right-0 top-0 w-96 h-96 bg-primary-yellow/5 rounded-full blur-[100px] pointer-events-none md:translate-x-1/2 -translate-y-1/2"></div>

                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 rounded-sm border border-primary-yellow/20 bg-primary-yellow/10 text-primary-yellow text-xs font-bold uppercase tracking-wider mb-6">
                                    {event.category}
                                </span>
                                <h3 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-4 group-hover:text-primary-yellow transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                                    {event.shortDescription}
                                </p>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 border-t border-white/5 pt-8">
                                    <Button href={`/events/${event.slug}`} variant="primary">
                                        Enter Arena
                                    </Button>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">Prize Pool</span>
                                        <span className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{event.prizePool}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Button href="/events" variant="ghost" size="lg" className="hover:text-primary-blue">
           // View All Events
                </Button>
            </div>
        </Section>
    );
};

export { SpotlightEvents };
