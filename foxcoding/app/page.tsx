'use client'
import { Hero } from "@/components/sections/landingHero";
import { AboutUs } from "@/components/sections/aboutUs";
import { FeaturedProjects } from "@/components/sections/featuredProjects"
import { PreviousEvents } from "@/components/sections/previousEvents";
import { SponsorCTA } from "@/components/sections/sponsorCTA";
import LetterGlitch from "@/components/ui/LetterGlitch";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 md:gap-6 w-full overflow-hidden">

      <div className="flex relative bg-background w-full text-primary flex-col text-3xl md:text-5xl font-normal items-center justify-center text-center px-6 py-10 md:py-16">
        <div className="absolute inset-0 pointer-events-none">
          <LetterGlitch glitchColors={["#F7D13B", "#18181B"]} glitchSpeed={0.9} centerVignette={true} outerVignette={true} smooth={true} characters="FOXCODING" />
        </div>
        <div className="relative z-10">
          <Hero/>
          <AboutUs/>
        </div>
      </div>

      <FeaturedProjects/>
      <PreviousEvents/>
      <SponsorCTA/>
    </div>

  );
}
