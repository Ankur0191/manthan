"use client";

import { Event } from "@/types";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

interface EventCardProps {
    event: Event;
    index?: number;
}

const EventCard = ({ event, index = 0 }: EventCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            className="group relative bg-dark-surface/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 hover:border-primary-blue/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] flex flex-col h-full"
        >
            {/* Neon Glow Line on Hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-accent-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent opacity-80" />
                <div className="absolute top-4 right-4 bg-dark-bg/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-bold text-primary-yellow uppercase tracking-wide border border-white/10">
                    {event.category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-xl font-bold font-poppins text-white mb-2 group-hover:text-primary-blue transition-colors">
                    {event.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {event.shortDescription}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Prize</span>
                        <span className="text-sm font-bold text-white shadow-glow">{event.prizePool}</span>
                    </div>
                    <Button href={`/events/${event.slug}`} variant="secondary" size="sm" className="text-xs px-4 py-2 border-primary-blue/30 hover:bg-primary-blue/20">
                        Details
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export { EventCard };
