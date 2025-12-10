import { textClasses } from "@/app/fonts";
import { SponsorsCard } from "../ui/sponsorCard";
import ElectricBorder from "../ui/electricBorder";

export function SponsorTiers() {
  return (
    <div className="w-full bg-background flex flex-col">
      <h1 className={`${textClasses.title} mb-4 md:mb-8 mx-auto`}>
        Sponsorship Tiers
      </h1>

      <div
        className="grid w-9/12 mx-auto gap-6 md:gap-12 mb-10 md:mb-16
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-6"
      >
        <div className="lg:col-span-2">
          <SponsorsCard
            title="BRONZE"
            variant="bronze"
            range="$500 - $1,999"
            description={[
              "Public thanks on our social media.",
              "Digital certificate as a 'FoxCoding Contributor'.",
              "Award ceremony.",
            ]}
          />
        </div>
        <div className="lg:col-span-2">
          <SponsorsCard
            title="SILVER"
            variant="silver"
            range="$2,000 - $4,999"
            description={[
              "Everything from the Bronze tier",
              "Logo on competition t-shirts.",
              "Opportunities for collaboration.",
              "Mention in VOCETYS articles.",
            ]}
          />
        </div>
        <div className="lg:col-span-2">
          <SponsorsCard
            title="GOLD"
            variant="gold"
            range="$5,000 - $9,999"
            description={[
              "Everything from the Silver tier",
              "Preferential access to FoxCoding talent placement.",
              "Opportunity to give a technical talk.",
            ]}
          />
        </div>
        <div className="lg:col-span-3 lg:col-start-1">
          <ElectricBorder
            color="#E5E4E2"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 25 }}
          >
            <SponsorsCard
              title="PLATINUM"
              variant="platinum"
              range="$10,000+"
              description={[
                "Everything in the Gold tier",
                "Mention in competitions organized by the team.",
                "Logo in a prominent place on all official material.",
              ]}
            />
          </ElectricBorder>
        </div>
        <div className="lg:col-span-3">
          <SponsorsCard
            title="TECH PARTNER"
            variant="techpartner"
            range="(Software / Licences)"
            description={[
              "Logo in the 'Technology Partners' section of the website.",
              "Special mention in workshops where their tool is used.",
              "Digital certificate as a 'FoxCoding Contributor'.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
