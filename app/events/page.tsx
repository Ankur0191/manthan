import { Section } from "@/components/ui/Section";
import { EventGrid } from "@/components/events/EventGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events | Manthan 2026",
    description: "Browse all events happening at Manthan 2026.",
};

export default function EventsPage() {
    return (
        <>
            <Section background="default" className="pt-32 pb-10 text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary-blue/5 blur-[100px] pointer-events-none -z-10" />
                <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-4 tracking-tight">
                    System <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-yellow">Schedule</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                    Initialize your participation protocols. Select your domain.
                </p>
            </Section>

            <Section background="dark" className="min-h-screen">
                <EventGrid />
            </Section>
        </>
    );
}
