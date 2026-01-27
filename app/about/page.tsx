"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Sponsors } from "@/components/home/Sponsors";

export default function AboutPage() {
    return (
        <>
            {/* Hero Banner */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-dark-bg overflow-hidden">
                <div className="absolute inset-0 bg-primary-blue/5"></div>
                {/* Animated Background Mesh */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    >
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-yellow">Mandate</span>
                    </motion.h1>
                    <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                        Academic excellence, ethical leadership, and social impact since 1936.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <Section background="dark" className="border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-24">

                    {/* About TISS */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold font-poppins text-primary-blue flex items-center gap-3">
               // TISS Mumbai
                        </h2>
                        <div className="text-gray-400 leading-relaxed text-lg font-light space-y-6">
                            <p>
                                The Tata Institute of Social Sciences (TISS), Mumbai, established in 1936, is one of India’s most prestigious institutions in the field of social sciences, public policy, and management education.
                            </p>
                            <p>
                                A Deemed-to-be University since 1964 and fully funded by the Government of India, TISS carries a strong public mandate rooted in equity, justice, democracy, and human dignity. Its main campus in Deonar, Mumbai, serves as the academic and administrative hub.
                            </p>
                            <p>
                                TISS offers elite programs across disciplines, including its <span className="text-white font-medium">HRM & LR program</span>, consistently ranked among the top HR programs in India, producing industry-ready leaders with strong strategy and policy orientation.
                            </p>
                        </div>
                    </div>

                    {/* About Manthan */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold font-poppins text-primary-yellow flex items-center gap-3">
               // Manthan
                        </h2>
                        <div className="text-gray-400 leading-relaxed text-lg font-light space-y-6">
                            <p>
                                Manthan, meaning “churning of ideas”, is the Annual Management & Cultural Fest of TISS Mumbai—a dynamic convergence of creativity, leadership, and social consciousness.
                            </p>
                            <p>
                                As one of the most anticipated inter-college festivals in Mumbai, it attracts participation from 80+ premier institutions. It is a platform where culture meets strategy, reflecting TISS’s ethos of building socially responsible leaders.
                            </p>
                            <p>
                                Entirely student-driven, Manthan offers hands-on exposure in leadership, brand building, and large-scale execution, making it as much a learning experience as a celebration.
                            </p>
                        </div>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                        <HighlightCard number="#1" label="Social Science Institute" />
                        <HighlightCard number="20+" label="Engaging Events" />
                        <HighlightCard number="80+" label="Participating Colleges" />
                        <HighlightCard number="8k+" label="Ground Footfall" />
                        <HighlightCard number="1M+" label="Digital Reach" />
                        <HighlightCard number="2" label="Days of Churning" />
                    </div>

                </div>
            </Section>

            <Sponsors />
        </>
    );
}

const HighlightCard = ({ number, label }: { number: string; label: string }) => (
    <div className="p-8 rounded-xl bg-white/5 border border-white/5 group hover:border-primary-blue/30 transition-all duration-300">
        <div className="text-4xl font-bold text-primary-blue mb-1 group-hover:scale-110 transition-transform origin-left">{number}</div>
        <div className="text-gray-500 font-mono text-xs uppercase tracking-widest">{label}</div>
    </div>
);
