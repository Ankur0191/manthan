"use client";

import Link from "next/link";
import Image from "next/image";
import {
    FiInstagram,
    FiFacebook,
    FiYoutube,
    FiTwitter,
    FiMail,
    FiPhone,
} from "react-icons/fi";

import wxLogo from "@/app/gallery/wictronix/wictronix-logo.png";

const Footer = () => {
    return (
        <footer className="bg-secondary-surface text-text-muted py-16 border-t border-white/5 relative overflow-hidden">
            {/* Glow bloom */}
            <div className="absolute top-0 left-1/4 w-[500px] h-1 bg-gradient-to-r from-transparent via-soft-lavender to-transparent opacity-20 blur-sm" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold font-poppins text-white tracking-tight">
                            MANTHAN<span className="text-neon-magenta">.</span>
                        </h2>
                        <p className="text-sm leading-relaxed max-w-xs cursor-default">
                            The Annual Management & Cultural Fest of TISS Mumbai.
                            <br />
                            <span className="text-soft-lavender italic opacity-80 font-medium tracking-wide">
                                Dare. Dream. Discover.
                            </span>
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
                        <h3 className="text-lg font-bold mb-6 font-poppins text-white">
                            Explore
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-neon-magenta hover:pl-2 transition-all duration-300 block"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/events"
                                    className="hover:text-neon-magenta hover:pl-2 transition-all duration-300 block"
                                >
                                    All Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/gallery"
                                    className="hover:text-neon-magenta hover:pl-2 transition-all duration-300 block"
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-neon-magenta hover:pl-2 transition-all duration-300 block"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-poppins text-white">
                            Categories
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/events?category=flagship"
                                    className="hover:text-grad-end hover:pl-2 transition-all duration-300 block"
                                >
                                    Flagship Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/events?category=cultural"
                                    className="hover:text-soft-lavender hover:pl-2 transition-all duration-300 block"
                                >
                                    Cultural
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/events?category=management"
                                    className="hover:text-grad-mid hover:pl-2 transition-all duration-300 block"
                                >
                                    Management
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/events?category=sports"
                                    className="hover:text-grad-start hover:pl-2 transition-all duration-300 block"
                                >
                                    Sports
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-poppins text-white">
                            Connect
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                                <FiMail className="mt-1 text-soft-lavender group-hover:text-neon-magenta transition-colors" />
                                <span>manthan@tiss.edu</span>
                            </li>
                            <li className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                                <FiPhone className="mt-1 text-soft-lavender group-hover:text-neon-magenta transition-colors" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-soft-lavender font-bold">
                                    HQ:
                                </span>
                                <span>
                                    V.N. Purav Marg, Deonar,
                                    <br />
                                    Mumbai - 400088
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center gap-6 text-xs opacity-60">
                    {/* Left */}
                    <p className="order-2 md:order-1">
                        © 2026 Manthan TISS. All rights reserved.
                    </p>

                    {/* Center – Powered By */}
                    {/* Center – Powered By */}
                    <a
                        href="https://www.wictronix.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="order-1 md:order-2 flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                    >
                        <span className="text-sm font-semibold">Powered by</span>
                        <Image
                            src={wxLogo}
                            alt="Wictronix"
                            className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </a>


                    {/* Right */}
                    <p className="order-3 tracking-tighter opacity-50">
                        Designed with ❤️ by Tech Team
                    </p>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({
    icon,
    href,
}: {
    icon: React.ReactNode;
    href: string;
}) => (
    <a
        href={href}
        className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:bg-neon-magenta hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
    >
        {icon}
    </a>
);

export { Footer };
