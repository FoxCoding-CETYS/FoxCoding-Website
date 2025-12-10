import { HeroSection } from "@/components/sections/heroSection";
import { SponsorCTA } from "@/components/sections/sponsorCTA";
import { SponsorTiers } from "@/components/sections/sponsorTiers";

export default function Sponsors() {
  return (
    <div className="flex flex-col gap-1 w-full overflow-hidden">
      <HeroSection first_word="Sponsorship" />
      <SponsorCTA
        Title="Dear Sponsor"
        Accent={["To sponsor us you can ", ""]}
        Body=" contact us through our email or donating directly to our teams leader paypal. By becoming a sponsor of FoxCoding, you are helping build the future and helping us achieve our dreams to reach even higher. By supporting us, you will also get the following benefits"
      />
      <div className="mt-10">
        <SponsorTiers />
      </div>
    </div>
  );
}
