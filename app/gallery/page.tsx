"use client";

import { Section } from "@/components/ui/Section";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./gallery-overrides.css";
import { GUESTS } from "@/data/mock";

const images = [
    {
        original: "https://placehold.co/1200x800/0a0a0a/ECB25C?text=Manthan+Crowd",
        thumbnail: "https://placehold.co/250x150/0a0a0a/ECB25C?text=Crowd",
        description: "The electric crowd at Manthan",
    },
    {
        original: "https://placehold.co/1200x800/0a0a0a/00F0FF?text=Tattvabodha+Conclave",
        thumbnail: "https://placehold.co/250x150/0a0a0a/00F0FF?text=Conclave",
        description: "Idea Conclave - Churning of Ideas",
    },
    {
        original: "https://placehold.co/1200x800/0a0a0a/FF003C?text=Performance+Night",
        thumbnail: "https://placehold.co/250x150/0a0a0a/FF003C?text=Performance",
        description: "Cultural Spectacle",
    },
];

export default function GalleryPage() {
    return (
        <>
            <Section background="dark" className="pt-32 pb-10 text-center">
                <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-4 tracking-tighter">
                    Visual <span className="text-primary-blue">Archives</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                    Relive the moments that made history at Manthan.
                </p>
            </Section>

            <Section background="dark" className="min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 bg-dark-bg">
                        <ImageGallery
                            items={images}
                            autoPlay={true}
                            showPlayButton={true}
                            showFullscreenButton={true}
                            slideInterval={4000}
                        />
                    </div>
                </div>

                <div className="mt-32">
                    <h2 className="text-3xl font-bold font-poppins text-white mb-16 text-center">
                        Previous <span className="text-primary-yellow">Guests & Speakers</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {GUESTS.map((guest) => (
                            <GuestCard key={guest.id} name={guest.name} role={guest.role} />
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}

const GuestCard = ({ name, role }: { name: string, role: string }) => (
    <div className="text-center group p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-primary-blue/30 transition-all duration-300">
        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-primary-blue transition-colors duration-500 grayscale group-hover:grayscale-0">
            <div className="absolute inset-0 bg-dark-surface"></div>
            <img src={`https://placehold.co/300x300/121212/ffffff?text=${name.split(' ')[0]}`} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <h3 className="text-lg font-bold font-poppins text-white">{name}</h3>
        <p className="text-[10px] text-gray-500 font-mono mt-2 uppercase tracking-widest">{role}</p>
    </div>
);
