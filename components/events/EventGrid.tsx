"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { EventCard } from "@/components/events/EventCard";
import { EVENTS } from "@/data/mock";
import { Button } from "@/components/ui/Button";
import { FiSearch, FiFilter } from "react-icons/fi";
import { motion } from "framer-motion";

const CATEGORIES = ["All", "Flagship", "Cultural", "Management", "Sports"];

const EventGridContent = () => {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "All";

    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const cat = searchParams.get("category");
        if (cat) setActiveCategory(cat);
    }, [searchParams]);

    const filteredEvents = EVENTS.filter((event) => {
        const matchesCategory =
            activeCategory === "All" ||
            event.category.toLowerCase() === activeCategory.toLowerCase();

        const matchesSearch =
            event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-12">
            {/* Filters & Search Bar */}
            <div className="flex flex-col md:flex-row gap-8 justify-between items-center bg-dark-bg/50 backdrop-blur-md p-6 rounded-xl border border-white/5 sticky top-24 z-30 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">

                {/* Category Chips */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-sm text-sm font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group ${activeCategory.toLowerCase() === cat.toLowerCase()
                                    ? "text-dark-bg bg-primary-blue shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                                    : "text-gray-400 bg-white/5 hover:text-white hover:bg-white/10 border border-white/5"
                                }`}
                        >
                            <span className="relative z-10">{cat}</span>
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative w-full md:w-auto min-w-[320px] group">
                    <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-primary-blue transition-colors" />
                    <input
                        type="text"
                        placeholder="SEARCH_EVENTS..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-sm bg-dark-bg border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-blue focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all font-mono text-sm"
                    />
                </div>
            </div>

            {/* Grid */}
            {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredEvents.map((event, index) => (
                        <EventCard key={event.id} event={event} index={index} />
                    ))}
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-32 border border-dashed border-white/10 rounded-2xl bg-white/5"
                >
                    <p className="text-gray-500 text-lg font-mono mb-4">NO_DATA_FOUND</p>
                    <Button
                        variant="outline"
                        onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                    >
                        Reset System
                    </Button>
                </motion.div>
            )}
        </div>
    );
};

const EventGrid = () => {
    return (
        <Suspense fallback={<div className="py-20 text-center text-primary-blue animate-pulse font-mono">LOADING_SYSTEM_DATA...</div>}>
            <EventGridContent />
        </Suspense>
    )
}

export { EventGrid };
