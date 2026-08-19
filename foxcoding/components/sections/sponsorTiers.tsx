import { ArrowUpRight } from "lucide-react";
import { SponsorsCard } from "../ui/sponsorCard";

const tiers = [
  { title: "BRONZE", variant: "bronze" as const, range: "$500 – $1,999", description: ["Public thanks on social media.", "Digital FoxCoding Contributor certificate.", "Recognition at our award ceremony."] },
  { title: "SILVER", variant: "silver" as const, range: "$2,000 – $4,999", description: ["Everything in Bronze.", "Logo on competition shirts.", "Collaboration opportunities.", "Mention in VOCETYS articles."] },
  { title: "GOLD", variant: "gold" as const, range: "$5,000 – $9,999", description: ["Everything in Silver.", "Preferential access to FoxCoding talent.", "Opportunity to give a technical talk."] },
  { title: "PLATINUM", variant: "platinum" as const, range: "$10,000+", featured: true, description: ["Everything in Gold.", "Mention at competitions organized by the team.", "Prominent logo placement on official material."] },
  { title: "TECH PARTNER", variant: "techpartner" as const, range: "Software / licenses", description: ["Logo in our technology partners section.", "Mentions in workshops using your tool.", "Digital FoxCoding Contributor certificate."] },
];

export function SponsorTiers() {
  return (
    <section className="section-shell">
      <div className="site-container">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">Ways to contribute</p>
          <h2 className="section-heading mt-4">Sponsorship tiers</h2>
          <p className="section-copy mt-5">Choose the level that fits your organization. Every contribution directly expands what our students can build and achieve.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {tiers.map((tier, index) => (
            <div key={tier.title} className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
              <SponsorsCard {...tier} />
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[1.5rem] border border-border bg-secondary p-7 sm:flex-row sm:items-center">
          <div>
            <p className="font-bold">Ready to support the team?</p>
            <p className="mt-1 text-sm text-muted-foreground">Donate directly or contact us to build a custom partnership.</p>
          </div>
          <a href="https://www.paypal.me/AnahiHulll" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-bold text-accent-foreground transition hover:-translate-y-0.5">
            Donate with PayPal <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
