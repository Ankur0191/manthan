"use client";

import Link from "next/link";
import { FiInstagram, FiFacebook, FiYoutube, FiTwitter, FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-dark-surface text-gray-400 py-16 border-t border-white/5 relative overflow-hidden">
            {/* Glow bloom */}
            <div className="absolute top-0 left-1/4 w-[500px] h-1 bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-50 blur-sm" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <h2 className="text-3xl font-bold font-poppins text-white tracking-tight">MANTHAN<span className="text-primary-blue">.</span></h2>
                        <p className="text-sm leading-relaxed max-w-xs">
                            The Annual Cultural & Management Fest of TISS Mumbai. <br />
                            <span className="text-primary-yellow italic opacity-80">Dare. Dream. Discover.</span>
                        </p>
                        <div className="flex gap-4 pt-2">
                            <SocialIcon icon={<FiInstagram />} href="#" />
                            <SocialIcon icon={<FiFacebook />} href="#" />
                            <SocialIcon icon={<FiYoutube />} href="#" />
                            <SocialIcon icon={<FiTwitter />} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-poppins text-white">Explore</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-primary-blue hover:pl-2 transition-all duration-300 block">About Us</Link></li>
                            <li><Link href="/events" className="hover:text-primary-blue hover:pl-2 transition-all duration-300 block">All Events</Link></li>
                            <li><Link href="/gallery" className="hover:text-primary-blue hover:pl-2 transition-all duration-300 block">Gallery</Link></li>
                            <li><Link href="/contact" className="hover:text-primary-blue hover:pl-2 transition-all duration-300 block">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-poppins text-white">Categories</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/events?category=flagship" className="hover:text-primary-yellow hover:pl-2 transition-all duration-300 block">Flagship Events</Link></li>
                            <li><Link href="/events?category=cultural" className="hover:text-amber-300 hover:pl-2 transition-all duration-300 block">Cultural</Link></li>
                            <li><Link href="/events?category=management" className="hover:text-blue-300 hover:pl-2 transition-all duration-300 block">Management</Link></li>
                            <li><Link href="/events?category=sports" className="hover:text-orange-300 hover:pl-2 transition-all duration-300 block">Sports</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-poppins text-white">Connect</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                                <FiMail className="mt-1 text-primary-blue group-hover:drop-shadow-[0_0_5px_rgba(0,240,255,1)]" />
                                <span>manthan@tiss.edu</span>
                            </li>
                            <li className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                                <FiPhone className="mt-1 text-primary-blue group-hover:drop-shadow-[0_0_5px_rgba(0,240,255,1)]" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-yellow font-bold">HQ:</span>
                                <span>V.N. Purav Marg, Deonar,<br />Mumbai - 400088</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
                    <p>© 2026 Manthan TISS. All rights reserved.</p>
                    <p className="font-mono">BUILD_VER: 2.0.4 // TECH_TEAM</p>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
    <a
        href={href}
        className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-primary-blue hover:text-dark-bg hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
    >
        {icon}
    </a>
);

export { Footer };
