import { Hero } from "@/components/sections/landingHero";
import { AboutUs } from "@/components/sections/aboutUs";
import { FeaturedProjects } from "@/components/sections/featuredProjects";
import { PreviousEvents } from "@/components/sections/previousEvents";
import { SponsorCTA } from "@/components/sections/sponsorCTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 md:gap-6 w-full overflow-hidden">
      <Hero />
      <AboutUs />
      <FeaturedProjects />
      <PreviousEvents />
      <SponsorCTA
        Title="Want to help the next generation of"
        Title2="computer scientist?"
        Accent={["FoxCoding", "you will be contributing to"]}
        Body=" is a
          student team at CETYS University dedicated to fostering innovation and
          developing technological skills through hackathon participation. By
          supporting us,"
        BulletPoints={[
          "Shaping the next generation of software developers.",
          "Solving real-world problems through technology.",
          "Promoting collaboration between students and businesses.",
          "Positioning CETYS University as a leader in the technology field.",
        ]}
      />
    </div>
  );
}
