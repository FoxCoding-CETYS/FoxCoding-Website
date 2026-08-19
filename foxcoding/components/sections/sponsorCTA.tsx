import { Check } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import Link from "next/link";

export function SponsorCTA({
  Button = true,
  Title,
  Title2,
  Accent,
  Body,
  BulletPoints,
}: {
  Button: boolean;
  Title: string;
  Title2?: string;
  Accent?: string[];
  Body?: string;
  BulletPoints?: string[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 text-white md:py-24">
      <div className="technical-grid absolute inset-0 opacity-15" />
      <div className="site-container relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow">{Accent?.[0] ?? "Partnership"}</p>
          <h2 className="mt-4 text-balance text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
            {Title}
            {Title2 && (
              <>
                <br />
                <span className="text-accent">{Title2}</span>
              </>
            )}
          </h2>
          {Button && (
            <Link href="/sponsors">
              <CustomButton variant="outline" size="lg" className="w-full mt-4">
                Become a sponsor
              </CustomButton>
            </Link>
          )}
        </div>
        <div>
          {Body && (
            <p className="max-w-2xl text-pretty text-lg leading-8 text-white/65">
              {Body}
            </p>
          )}
          {BulletPoints && BulletPoints.length > 0 && (
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {BulletPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-white/75"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
