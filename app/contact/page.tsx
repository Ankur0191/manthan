"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FAQS, TEAM } from "@/data/mock";
import { useState } from "react";
import { FiPlus, FiMinus, FiPhone, FiMail } from "react-icons/fi";
import Image from "next/image";

export default function ContactPage() {
    const [openFaq, setOpenFaq] = useState<string | null>(null);

    const toggleFaq = (id: string) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Transmission Received. Status: Acknowledged.");
    };

    return (
        <>
            <Section background="dark" className="pt-32 pb-10 text-center">
                <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-4 tracking-tight">
                    Establish <span className="text-primary-blue">Contact</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                    Channels are open. Awaiting input.
                </p>
            </Section>

            <Section background="dark" className="min-h-screen border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold font-poppins text-white mb-8 border-l-4 border-primary-blue pl-4">Send Message</h2>
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Identity</label>
                                    <input type="text" required className="w-full px-4 py-3 bg-white/5 rounded-sm border border-white/10 text-white focus:outline-none focus:border-primary-blue focus:bg-white/10 transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Comms</label>
                                    <input type="tel" required className="w-full px-4 py-3 bg-white/5 rounded-sm border border-white/10 text-white focus:outline-none focus:border-primary-blue focus:bg-white/10 transition-all" placeholder="+91 99999 99999" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                                <input type="email" required className="w-full px-4 py-3 bg-white/5 rounded-sm border border-white/10 text-white focus:outline-none focus:border-primary-blue focus:bg-white/10 transition-all" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Transmission</label>
                                <textarea required rows={5} className="w-full px-4 py-3 bg-white/5 rounded-sm border border-white/10 text-white focus:outline-none focus:border-primary-blue focus:bg-white/10 transition-all" placeholder="Enter your message..."></textarea>
                            </div>
                            <Button type="submit" variant="primary" size="lg" fullWidth className="shadow-[0_0_20px_rgba(236,178,92,0.2)]">
                                Transmit Data
                            </Button>
                        </form>
                    </div>

                    {/* FAQ */}
                    <div>
                        <h2 className="text-2xl font-bold font-poppins text-white mb-8 border-l-4 border-primary-yellow pl-4">Protocols (FAQ)</h2>
                        <div className="space-y-4">
                            {FAQS.map((faq) => (
                                <div key={faq.id} className="border border-white/5 rounded-sm bg-white/[0.02]">
                                    <button
                                        onClick={() => toggleFaq(faq.id)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left font-medium text-gray-200 hover:text-primary-yellow hover:bg-white/5 transition-all focus:outline-none"
                                    >
                                        {faq.question}
                                        {openFaq === faq.id ? <FiMinus className="text-primary-blue" /> : <FiPlus className="text-gray-600" />}
                                    </button>
                                    {openFaq === faq.id && (
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 bg-black/20">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Core Team */}
            <Section background="dark" className="py-24 border-t border-white/5">
                <h2 className="text-3xl font-bold font-poppins text-white mb-16 text-center">
                    Command <span className="text-primary-blue">Center</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TEAM.map((member) => (
                        <div key={member.id} className="bg-dark-surface p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-white/20 transition-colors shadow-lg group">
                            <div className="w-32 h-32 relative rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-primary-yellow transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                <Image src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <h3 className="text-xl font-bold font-poppins text-white">{member.name}</h3>
                            <p className="text-primary-blue font-mono text-sm mb-6 uppercase tracking-wider">{member.role}</p>

                            <div className="space-y-2 w-full">
                                <a href={`tel:${member.phone}`} className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-white transition-colors p-3 rounded-md hover:bg-white/5">
                                    <FiPhone /> {member.phone}
                                </a>
                                <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-white transition-colors p-3 rounded-md hover:bg-white/5">
                                    <FiMail /> {member.email}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
