import { HeroSection } from "@/components/sections/heroSection";
import { TierCard, type Tier } from "@/components/sections/sponsorTiers";

const tiers: Tier[] = [
  {
    id: "bronze",
    title: "BRONZE",
    range: "$500 - $1,999",
    bullets: [
      "Agradecimiento público en nuestras redes sociales.",
      "Certificado digital como 'Colaborador de FoxCoding'.",
      "Entrega de reconocimiento.",
    ],
    accent: "bronze",
  },
  {
    id: "silver",
    title: "SILVER",
    range: "$2,000- $4,999",
    bullets: [
      "Todo lo del tier Bronze",
      "Logotipo en camisetas de competencia.",
      "Oportunidades para colaboración.",
      "Mención en artículos VOCETYS.",
    ],
    accent: "silver",
  },
  {
    id: "gold",
    title: "GOLD",
    range: "$5,000- $9,999",
    bullets: [
      "Todo lo del tier Plata",
      "Acceso preferente a vinculación con talento FoxCoding.",
      "Oportunidad de ofrecer una charla técnica.",
    ],
    accent: "gold",
  },
  {
    id: "platinum",
    title: "PLATINUM",
    range: "$10,000+",
    bullets: [
      "Todo lo del tier Oro",
      "Mención en competencias organizadas por el equipo.",
      "Logo en lugar preferente en todo material oficial.",
    ],
    accent: "platinum",
  },
  {
    id: "tech",
    title: "TECH PARTNER",
    subtitle: "(Software / licencias)",
    range: undefined,
    bullets: [
      "Logo en la sección 'Aliados Tecnológicos' del sitio web.",
      "Mención especial en talleres donde se use su herramienta.",
      "Certificado digital como 'Colaborador de FoxCoding'.",
    ],
    accent: "tech",
  },
];

export default function Sponsors() {
  return (
    <>
      <HeroSection first_word="Sponsorship" />

      <main className="min-h-screen bg-[#0b0b0d] text-white p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#F7D13B]">Dear Sponsor</h1>
          </header>
            <div className="mt-3 max-w-5xl mx-auto text-md opacity-75">
              <p className="mb-4">
                <span className="text-[#F7D13B] font-bold">Fox Coding</span> is a student team at CETYS University dedicated to fostering innovation and developing technological skills through 
                hackathon participation. By supporting us, you will be contributing to:
              </p>
              <ul className="space-y-2 text-left inline-block">
                <li>• Shaping the next generation of software developers.</li>
                <li>• Solving real-world problems through technology.</li>
                <li>• Promoting collaboration between students and businesses.</li>
                <li>• Positioning CETYS University as a leader in the technology field.</li>
              </ul>
            </div>
            <br />
          <section className="mb-6">
        
        <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#F7D13B]">Sponsorship Levels</h2>
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tiers.slice(0, 3).map((t) => (
                <TierCard key={t.id} tier={t} />
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tiers.slice(3).map((t) => (
                <TierCard key={t.id} tier={t} />
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}