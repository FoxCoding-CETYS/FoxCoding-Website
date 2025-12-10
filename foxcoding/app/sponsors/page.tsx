import { HeroSection } from "@/components/sections/heroSection";
import { SponsorCTA } from "@/components/sections/sponsorCTA";
import { SponsorTiers } from "@/components/sections/sponsorTiers";

export default function Sponsors() {
  return (
    <div className="flex flex-col gap-1 w-full overflow-hidden">
      <HeroSection first_word="Sponsorship" />
      <SponsorCTA
        Title="Dear Sponsor"
        Accent={["FoxCoding", "you will be contributing to"]}
        Body=" is a student team at CETYS University dedicated to fostering innovation and developing technological skills through hackathon participation. By supporting us,"
        BulletPoints={[
          "Shaping the next generation of software developers.",
          "Solving real-world problems through technology.",
          "Promoting collaboration between students and businesses.",
          "Positioning CETYS University as a leader in the technology field.",
        ]}
      />
      <div className="mt-10">
        <SponsorTiers />
      </div>
    </div>
  );
}
