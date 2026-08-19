"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EventCard } from "../ui/eventsCard";

const items = [
  {
    title: "IEEEXtreme 19.0",
    imageSrc: "/IEEEXtremeLogo.png",
    description: "FoxCoding ranked among the Top 3 teams in Mexico during IEEE's global 24-hour programming competition, solving challenging algorithmic problems under pressure.",
  },
  {
    title: "Hack MTY 2025",
    imageSrc: "/HackMTYLogo.jpeg",
    description: "FoxCoding earned 1st Place in the Banorte Challenge with an accessible FinTech solution, competing among hundreds of hackers.",
  },
  {
    title: "HackIOS / ChangeMakers",
    imageSrc: "/HackIOSLogo.png",
    description: "Our team secured 2nd Place in the FemCoding category with a social-impact app created to empower women in technology.",
  },
  {
    title: "NASA Space Apps 2025",
    imageSrc: "/NASASpaceAppsLogo.jpeg",
    description: "FoxCoding achieved 1st and 3rd Place regionally with projects using NASA's open data to address environmental and space-exploration challenges.",
  },
];

export function PreviousEvents() {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const mod = (value: number) => (value + items.length) % items.length;
  const previous = () => setIndex((current) => mod(current - 1));
  const next = () => setIndex((current) => mod(current + 1));

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) {
      if (distance > 0) previous();
      else next();
    }
    touchStart.current = null;
  };

  const visible = [mod(index - 1), index, mod(index + 1)];

  return (
    <section className="section-shell">
      <div className="site-container">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Milestones</p>
          <h2 className="section-heading mt-4">Built under pressure.<br />Remembered with pride.</h2>
        </div>

        <div className="relative hidden md:block">
          <div className="grid grid-cols-3 items-stretch gap-3 lg:gap-5">
            {visible.map((itemIndex, position) => (
              <div key={`${itemIndex}-${position}`} className={`transition duration-300 ${position === 1 ? "scale-100 opacity-100" : "scale-[0.96] opacity-45"}`}>
                <EventCard {...items[itemIndex]} />
              </div>
            ))}
          </div>
          <CarouselButton direction="left" onClick={previous} />
          <CarouselButton direction="right" onClick={next} />
        </div>

        <div className="md:hidden" onTouchStart={(event) => (touchStart.current = event.touches[0].clientX)} onTouchEnd={onTouchEnd}>
          <EventCard {...items[index]} />
          <div className="mt-5 flex items-center justify-between">
            <button onClick={previous} aria-label="Previous event" className="grid size-11 place-items-center rounded-full border border-border bg-card"><ChevronLeft className="size-5" /></button>
            <Dots active={index} onChange={setIndex} />
            <button onClick={next} aria-label="Next event" className="grid size-11 place-items-center rounded-full border border-border bg-card"><ChevronRight className="size-5" /></button>
          </div>
        </div>

        <div className="mt-10 hidden justify-center md:flex"><Dots active={index} onChange={setIndex} /></div>
      </div>
    </section>
  );
}

function CarouselButton({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button onClick={onClick} aria-label={`${direction === "left" ? "Previous" : "Next"} event`} className={`absolute top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-foreground shadow-lg transition hover:border-accent hover:bg-accent hover:text-accent-foreground ${direction === "left" ? "-left-3" : "-right-3"}`}>
      <Icon className="size-5" />
    </button>
  );
}

function Dots({ active, onChange }: { active: number; onChange: (index: number) => void }) {
  return (
    <div className="flex items-center gap-2">
      {items.map((item, index) => (
        <button key={item.title} onClick={() => onChange(index)} aria-label={`Go to ${item.title}`} className={`h-2 rounded-full transition-all ${active === index ? "w-7 bg-accent" : "w-2 bg-muted-foreground/35"}`} />
      ))}
    </div>
  );
}
