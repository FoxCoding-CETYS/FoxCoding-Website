"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EventCard } from "../ui/eventsCard";
import { textClasses } from "@/app/fonts";
import { CustomButton } from "../ui/custom-button";

type Item = {
  title: string;
  status: string;
  imageSrc: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
};

const items: Item[] = [
  {
    title: "IEEEXtreme 19.0",
    status: "Active",
    imageSrc: "/IEEEXtremeLogo.png",
    description:
      "FoxCoding proudly ranked among the Top 3 teams in Mexico during IEEEXtreme 19.0, the global 24-hour programming competition organized by IEEE. Our members solved challenging algorithmic problems under pressure, showcasing teamwork, logic, and creativity at an international scale.",
    githubUrl: "https://github.com/you/repo",
    liveUrl: "https://yourapp.com",
  },
  {
    title: "Hack MTY 2025",
    status: "Active",
    imageSrc: "/HackMTYLogo.jpeg",
    description:
      "At Hack MTY 2025, FoxCoding earned **1st Place in the Banorte Challenge**, developing an innovative FinTech solution focused on accessibility and user empowerment. Competing among hundreds of hackers, our team demonstrated strong problem-solving and product-design capabilities.",
    githubUrl: "https://github.com/you/repo2",
    liveUrl: "https://yourapp2.com",
  },
  {
    title: "HackIOS / ChangeMakers Hackathon",
    status: "Active",
    imageSrc: "/HackIOSLogo.png",
    description:
      "Also known as the ChangeMakers Hackathon, FoxCoding secured **2nd Place in the FemCoding category** with a social-impact app designed to empower women in tech. The project blended technology and purpose, emphasizing inclusivity, mentorship, and community-driven innovation.",
    githubUrl: "https://github.com/you/repo3",
    liveUrl: "https://yourapp3.com",
  },
  {
    title: "NASA Space Apps Challenge 2025",
    status: "Active",
    imageSrc: "/NASASpaceAppsLogo.jpeg",
    description:
      "In the NASA Space Apps Challenge 2025, FoxCoding achieved **1st and 3rd Place** regionally with projects using NASA’s open data to address environmental and space-exploration challenges. These wins highlighted our team’s interdisciplinary approach and commitment to real-world impact through science and technology.",
    githubUrl: "https://github.com/you/repo4",
    liveUrl: "https://yourapp4.com",
  },
];

export function PreviousEvents() {
  const [idx, setIdx] = useState(0);
  const len = items.length;
  const mod = (n: number) => (n + len) % len;

  const prev = () => setIdx((i) => mod(i - 1));
  const next = () => setIdx((i) => mod(i + 1));
  const goTo = (i: number) => setIdx(mod(i));

  // Swipe (for touch)
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const d = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;
    if (Math.abs(d) < 40) return;

    if (d > 0) {
      prev();
    } else {
      next();
    }
  };

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        // ✅ avoid prev/next in deps; use functional update
        setIdx((i) => (i - 1 + len) % len);
      }
      if (e.key === "ArrowRight") {
        setIdx((i) => (i + 1) % len);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [len]); // ✅ satisfies react-hooks/exhaustive-deps

  const iPrev = mod(idx - 1);
  const iCurr = idx;
  const iNext = mod(idx + 1);

  const CardShell = ({
    emphasis,
    item,
  }: {
    emphasis: "prev" | "current" | "next";
    item: Item;
  }) => {
    const isCurrent = emphasis === "current";
    return (
      <div
        className={[
          "h-full rounded-3xl transition-all duration-300 ease-out",
          isCurrent
            ? "opacity-100 scale-100 shadow-xl"
            : "opacity-60 scale-95 shadow",
        ].join(" ")}
      >
        <EventCard {...item} />
      </div>
    );
  };

  return (
    <div className="flex flex-col mx-auto gap-10 md:gap-20 px-6 w-full md:w-7/8">
      <h1 className={`${textClasses.title} mb:4`}>PREVIOUS EVENTS</h1>

      {/* DESKTOP: prev | current | next + arrows + dots */}
      <div
        className="relative hidden md:flex select-none items-stretch justify-center"
        aria-roledescription="carousel"
        aria-live="polite"
      >
        {/* Arrow: left */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous event"
          className="absolute z-100 left-0 top-1/2 -translate-y-1/2 rounded-xl border border-border bg-background text-button p-2 hover:bg-accent hover:text-background"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* 3-up visible strip */}
        <div
          className="flex w-full items-stretch justify-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="basis-1/3">
            <CardShell item={items[iPrev]} emphasis="prev" />
          </div>
          <div className="basis-1/3">
            <CardShell item={items[iCurr]} emphasis="current" />
          </div>
          <div className="basis-1/3">
            <CardShell item={items[iNext]} emphasis="next" />
          </div>
        </div>

        {/* Arrow: right */}
        <button
          type="button"
          onClick={next}
          aria-label="Next event"
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-xl border border-border bg-background text-button p-2 backdrop-blur hover:bg-accent hover:text-background"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots (desktop) */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={[
                "h-2 w-2 rounded-full transition-colors",
                i === idx
                  ? "bg-accent"
                  : "bg-muted-foreground/40 hover:bg-muted-foreground/60",
              ].join(" ")}
            />
          ))}
        </div>
      </div>

      {/* MOBILE: full-width carousel + arrows + dots */}
      <div className="md:hidden">
        <div
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          aria-roledescription="carousel"
          aria-live="polite"
        >
          {/* Track */}
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {items.map((p) => (
              <div key={p.title} className="min-w-full">
                <EventCard {...p} />
              </div>
            ))}
          </div>
          <div className="flex">
            {/* Arrows */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous event"
              className="relative left-0 bottom-5 -translate-y-1/2 rounded-xl border border-border text-button bg-background p-2 hover:bg-accent/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next event"
              className="relative left-4/5 bottom-5 -translate-y-1/2 rounded-xl border border-border text-button bg-background/80 p-2 backdrop-blur hover:bg-accent/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="relative bottom-4 mx-auto -translate-x-2/3 flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={[
                    "h-2 w-2 rounded-full transition-colors",
                    i === idx
                      ? "bg-accent"
                      : "bg-muted-foreground/40 hover:bg-muted-foreground/60",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <CustomButton
        variant="secondary"
        size="lg"
        className="mx-auto mt-3 md:my-8 w-1/2 md:w-1/3"
      >
        Learn More
      </CustomButton> */}
    </div>
  );
}
