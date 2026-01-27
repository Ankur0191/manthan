import { Hero } from "@/components/home/Hero";
import { CountdownTimer } from "@/components/home/Countdown";
import { AboutPreview } from "@/components/home/AboutPreview";
import { EventCategories } from "@/components/home/EventCategories";
import { SpotlightEvents } from "@/components/home/SpotlightEvents";
import { Sponsors } from "@/components/home/Sponsors";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CountdownTimer />
      <AboutPreview />
      <EventCategories />
      <SpotlightEvents />
      <Sponsors />
    </div>
  );
}
