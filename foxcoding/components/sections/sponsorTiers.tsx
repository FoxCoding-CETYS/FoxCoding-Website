import { textClasses } from "@/app/fonts";
import { SponsorsCard } from "../ui/sponsorCard";

export function SponsorTiers() {
  return (
    <div className="w-full bg-background flex flex-col">
      <h1 className={`${textClasses.title} mb-4 md:mb-8 mx-auto`}>
        Sponsorship Levels
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
              "Agradecimiento público en nuestras redes sociales oficiales.",
              "Certificado digital como “Colaborador de FoxCoding”",
              "Entrega de reconocimiento",
            ]}
          />
        </div>
        <div className="lg:col-span-2">
          <SponsorsCard
            title="SILVER"
            variant="silver"
            range="$2,000 - $4,999"
            description={["s", "W"]}
          />
        </div>
        <div className="lg:col-span-2">
          <SponsorsCard
            title="GOLD"
            variant="gold"
            range="$5,000 - $9,999"
            description={["s", "W"]}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-2">
          <SponsorsCard
            title="PLATINUM"
            variant="platinum"
            range="$10,000+"
            description={["s", "W"]}
          />
        </div>
        <div className="lg:col-span-2">
          <SponsorsCard
            title="TECH PARTNER"
            variant="techpartner"
            range="(Software / Licences)"
            description={["s", "W"]}
          />
        </div>
      </div>
    </div>
  );
}
