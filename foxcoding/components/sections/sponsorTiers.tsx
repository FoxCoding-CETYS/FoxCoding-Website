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
              "Agradecimiento público en nuestras redes sociales.",
              "Certificado digital como 'Colaborador de FoxCoding'.",
              "Entrega de reconocimiento.",
            ]}
          />
        </div>
        <div className="lg:col-span-2">
          <SponsorsCard
            title="SILVER"
            variant="silver"
            range="$2,000 - $4,999"
            description={[
              "Todo lo del tier Bronze",
              "Logotipo en camisetas de competencia.",
              "Oportunidades para colaboración.",
              "Mención en artículos VOCETYS.",
            ]}
          />
        </div>
        <div className="lg:col-span-2">
          <SponsorsCard
            title="GOLD"
            variant="gold"
            range="$5,000 - $9,999"
            description={[
              "Todo lo del tier Plata",
              "Acceso preferente a vinculación con talento FoxCoding.",
              "Oportunidad de ofrecer una charla técnica.",
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
                "Todo lo del tier Oro",
                "Mención en competencias organizadas por el equipo.",
                "Logo en lugar preferente en todo material oficial.",
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
              "Logo en la sección 'Aliados Tecnológicos' del sitio web.",
              "Mención especial en talleres donde se use su herramienta.",
              "Certificado digital como 'Colaborador de FoxCoding'.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
