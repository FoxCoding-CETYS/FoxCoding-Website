import { Check } from "lucide-react";

const accents = {
  bronze: "text-bronze bg-bronze/10 border-bronze/25",
  silver: "text-silver bg-silver/10 border-silver/25",
  gold: "text-gold bg-gold/10 border-gold/25",
  platinum: "text-platinum bg-platinum/10 border-platinum/25",
  techpartner: "text-techpartner bg-techpartner/10 border-techpartner/25",
};

interface SponsorCardProps {
  title: string;
  range: string;
  description: string[];
  variant?: keyof typeof accents;
  featured?: boolean;
  className?: string;
}

export function SponsorsCard({ title, range, description, variant = "bronze", featured = false, className = "" }: SponsorCardProps) {
  return (
    <article className={`flex h-full flex-col rounded-[1.5rem] border bg-card p-7 shadow-[0_12px_35px_rgba(0,0,0,0.05)] ${featured ? "border-accent ring-4 ring-accent/10" : "border-border"} ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <span className={`rounded-full border px-3 py-1 font-mono text-[10px] font-bold tracking-[0.16em] ${accents[variant]}`}>{title}</span>
        {featured && <span className="font-mono text-[10px] uppercase tracking-wider text-accent">Most impact</span>}
      </div>
      <h3 className="mt-8 text-3xl font-black tracking-[-0.045em]">{range}</h3>
      <div className="my-6 h-px bg-border" />
      <ul className="space-y-4">
        {description.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
            <Check className={`mt-1 size-4 shrink-0 ${accents[variant].split(" ")[0]}`} /> {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
