import { Hero } from "@/components/sections/landingHero";
import { AboutUs } from "@/components/sections/aboutUs";
import { FeaturedProjects } from "@/components/sections/featuredProjects";
import { PreviousEvents } from "@/components/sections/previousEvents";
import { SponsorCTA } from "@/components/sections/sponsorCTA";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <AboutUs />
      <FeaturedProjects />
      <PreviousEvents />
      <SponsorCTA
        Button={true}
        Title="Help the next generation"
        Title2="of computer scientists."
        Accent={["Partner with FoxCoding"]}
        Body="Your support gives CETYS students the tools, travel, and opportunities they need to transform ambitious ideas into real achievements."
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
