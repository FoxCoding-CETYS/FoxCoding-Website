"use client";

import { useState, useRef } from "react";
import { textClasses } from "@/app/fonts";
import { ProjectCard } from "@/components/ui/projectsCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    title: "UniPlus",
    status: "Active",
    imageSrc: "/UniPlusLogo.png",
    description:
      "Gamified learning platform, emphasized in knowledge outside the scholar area.",
    githubUrl: "https://github.com/EmilioFex20/UNIplus",
    liveUrl: "https://uniplus-six.vercel.app/",
  },
  {
    title: "ForeignApp",
    status: "Active",
    imageSrc: "/ForeignAppLogo.jpg",
    description:
      "Social network specifically design for foreign students at Cetys University.",
    githubUrl: "https://github.com/you/repo2",
    liveUrl:
      "https://drive.google.com/file/d/1rEwyxak9DFuKLcjw_3K8qbte5Kstr1BJ/view?usp=sharing",
  },
  {
    title: "Social Graphs",
    status: "Active",
    imageSrc: "/GrafosLogo.png",
    description:
      "WebApp that helps visualize how a social network works through the use of graphs.",
    githubUrl: "https://github.com/you/repo3",
    liveUrl: "https://network-graphs-three.vercel.app/graph",
  },
];

export function FeaturedProjects() {
  const [idx, setIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const next = () => setIdx((i) => (i + 1) % items.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const delta = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) prev();
    else next();
  };

  return (
    <div className="flex flex-col mx-auto gap-10 md:gap-20 px-6 py-10 md:py-16 w-full md:w-7/8">
      <h1 className={textClasses.title}>FEATURED PROJECTS</h1>
      <div className="hidden md:grid md:grid-cols-3 gap-6 items-stretch">
        {items.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      {/* Mobile: Carousel */}
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
                <ProjectCard {...p} />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-xl text-button border border-border bg-background/80 p-2 backdrop-blur hover:bg-accent/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl text-button border border-border bg-background/80 p-2 backdrop-blur hover:bg-accent/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots (optional) */}
          <div className="pointer-events-none absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
            {items.map((_, i) => (
              <span
                key={i}
                className={[
                  "h-1.5 w-1.5 rounded-full",
                  i === idx ? "bg-accent" : "bg-muted-foreground/40",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <CustomButton
        variant="secondary"
        size="lg"
        className="w-1/2 md:w-1/3 mx-auto my-auto"
      >
        Learn More
      </CustomButton> */}
    </div>
  );
}
