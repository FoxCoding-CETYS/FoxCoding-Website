import Image from "next/image";
import { Hero } from "@/components/sections/landingHero";
import { AboutUs } from "@/components/sections/aboutUs";
import { FeaturedProjects } from "@/components/sections/featuredProjects"
import { PreviousEvents } from "@/components/sections/previousEvents";
import { SponsorCTA } from "@/components/sections/sponsorCTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 md:gap-6 w-full overflow-hidden">
      <Hero/>
      <AboutUs/>
      <FeaturedProjects/>
      <PreviousEvents/>
      <SponsorCTA/>
    </div>

  );
}
