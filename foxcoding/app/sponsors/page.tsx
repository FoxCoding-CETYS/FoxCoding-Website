"use client";

import { HeroSection } from "@/components/sections/heroSection";
import { SponsorCTA } from "@/components/sections/sponsorCTA";
import { SponsorTiers } from "@/components/sections/sponsorTiers";

export default function Sponsors() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection first_word="Sponsorship" />
      <SponsorCTA
        Button={false}
        Title="Dear Sponsor"
        Accent={["Build the future with us"]}
        Body="Your sponsorship helps FoxCoding students reach competitions, access professional tools, and keep turning ambitious ideas into software with real impact."
      />
      <SponsorTiers />
    </div>
  );
}
