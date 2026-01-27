import { EVENTS } from "@/data/mock";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiCalendar, FiClock, FiMapPin, FiUser, FiInfo, FiAward } from "react-icons/fi";
import { Metadata } from "next";

export async function generateStaticParams() {
    return EVENTS.map((event) => ({
        slug: event.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const event = EVENTS.find((e) => e.slug === slug);

    if (!event) return { title: 'Event Not Found' };

    return {
        title: `${event.title} | Manthan 2026`,
        description: event.shortDescription,
    };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = EVENTS.find((e) => e.slug === slug);

    if (!event) {
        notFound();
    }

    return (
        <>
            {/* Immersive Hero Banner */}
            <div className="relative h-[60vh] min-h-[500px] flex items-end">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-dark-bg to-transparent opacity-50"></div>

                {/* Floating Particles/Glow */}
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-blue/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 p-8 md:p-16 container mx-auto">
                    <div className="flex flex-col md:flex-row items-end gap-6 md:gap-12">
                        <div className="flex-grow">
                            <span className="inline-block px-4 py-1 rounded-sm border border-primary-yellow/30 bg-primary-yellow/10 text-primary-yellow font-bold text-xs uppercase tracking-widest mb-6">
                                {event.category} / 0{event.id}
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-poppins mb-6 drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                                {event.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
                                {event.shortDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Section background="dark" className="border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        <div>
                            <h2 className="text-2xl font-bold font-poppins text-primary-blue mb-6 flex items-center gap-3">
                                <FiInfo className="text-primary-blue" />
                                <span className="border-b-2 border-primary-blue/30 pb-1">Transmission Data</span>
                            </h2>
                            <p className="text-gray-400 leading-loose text-lg font-light">
                                {event.fullDescription}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-poppins text-accent-red mb-6 flex items-center gap-3">
                                <FiAward className="text-accent-red" />
                                <span className="border-b-2 border-accent-red/30 pb-1">Directives</span>
                            </h2>
                            <ul className="grid gap-4">
                                {event.rules.map((rule, idx) => (
                                    <li key={idx} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-accent-red/30 transition-colors">
                                        <span className="font-mono text-accent-red/50">0{idx + 1}</span>
                                        <span className="text-gray-300">{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-8">
                            <Button href="/events" variant="ghost">
                                &larr; Abort & Return
                            </Button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="relative">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-dark-surface p-8 rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
                                {/* Sidebar Glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/10 blur-[50px] rounded-full"></div>

                                <h3 className="text-lg font-bold font-poppins text-gray-200 mb-8 uppercase tracking-widest border-b border-white/10 pb-4">
                                    Event_Specs
                                </h3>

                                <div className="space-y-6">
                                    <DetailRow icon={<FiCalendar />} label="Date" value={event.date} />
                                    <DetailRow icon={<FiClock />} label="Time" value={event.time} />
                                    <DetailRow icon={<FiMapPin />} label="Sector" value={event.venue} />
                                    <DetailRow icon={<FiAward />} label="Bounty" value={event.prizePool} highlight />
                                </div>

                                <div className="mt-10 pt-8 border-t border-white/10">
                                    <h4 className="font-bold flex items-center gap-2 mb-4 text-gray-400 text-sm uppercase tracking-wider">
                                        <FiUser /> Operator
                                    </h4>
                                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                        <p className="font-medium text-white">{event.contactPerson.name}</p>
                                        <p className="text-sm text-primary-yellow font-mono mt-1">{event.contactPerson.phone}</p>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <Button href={event.registrationLink} variant="primary" fullWidth size="lg" className="shadow-[0_0_20px_rgba(236,178,92,0.4)]">
                                        Initiate Registry
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

const DetailRow = ({ icon, label, value, highlight = false }: any) => (
    <div className="flex items-start gap-4 group">
        <div className="mt-1 text-gray-500 group-hover:text-primary-blue transition-colors">{icon}</div>
        <div>
            <div className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">{label}</div>
            <div className={`font-mono ${highlight ? "text-primary-blue text-xl font-bold drop-shadow-lg" : "text-gray-200"}`}>
                {value}
            </div>
        </div>
    </div>
);
