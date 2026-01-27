"use client";

import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMusic, FiBriefcase, FiFlag, FiActivity } from "react-icons/fi";

const CATEGORIES = [
    {
        id: "flagship",
        name: "Flagship",
        icon: <FiFlag size={32} />,
        color: "group-hover:text-primary-yellow",
        border: "group-hover:border-primary-yellow",
        glow: "group-hover:shadow-[0_0_30px_rgba(236,178,92,0.3)]",
        href: "/events?category=flagship",
        desc: "The Main Events"
    },
    {
        id: "cultural",
        name: "Cultural",
        icon: <FiMusic size={32} />,
        color: "group-hover:text-accent-red",
        border: "group-hover:border-accent-red",
        glow: "group-hover:shadow-[0_0_30px_rgba(255,0,60,0.3)]",
        href: "/events?category=cultural",
        desc: "Dance, Music, Drama"
    },
    {
        id: "management",
        name: "Management",
        icon: <FiBriefcase size={32} />,
        color: "group-hover:text-primary-blue",
        border: "group-hover:border-primary-blue",
        glow: "group-hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]",
        href: "/events?category=management",
        desc: "Business & Strategy"
    },
    {
        id: "sports",
        name: "Sports",
        icon: <FiActivity size={32} />,
        color: "group-hover:text-secondary-orange",
        border: "group-hover:border-secondary-orange",
        glow: "group-hover:shadow-[0_0_30px_rgba(230,99,62,0.3)]",
        href: "/events?category=sports",
        desc: "Field & Track"
    },
];

const EventCategories = () => {
    return (
        <Section background="dark" className="py-24" orb>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-yellow">
                        Categories
                    </span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                    Choose your battlefield.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {CATEGORIES.map((cat, index) => (
                    <Link key={cat.id} href={cat.href} className="group relative block h-64">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col items-start justify-between transition-all duration-300 ${cat.border} ${cat.glow}`}
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                            <div className={`relative z-10 text-gray-400 transition-colors duration-300 ${cat.color} bg-white/5 p-3 rounded-lg`}>
                                {cat.icon}
                            </div>

                            <div className="relative z-10 w-full">
                                <h3 className="text-2xl font-bold font-poppins text-white mb-1 group-hover:translate-x-2 transition-transform duration-300">
                                    {cat.name}
                                </h3>
                                <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                                    {cat.desc}
                                </p>

                                <div className={`w-full h-[1px] bg-white/10 mt-4 overflow-hidden`}>
                                    <div className={`h-full w-full bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:animate-[shimmer_1s_infinite]`}></div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </Section>
    );
};

export { EventCategories };
