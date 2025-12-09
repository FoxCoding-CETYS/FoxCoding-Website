'use client'
import React from "react";
import ElectricBorder from "../ui/ElectricBorder";
import SpotlightCard from "../ui/SpotlightCard";

export type Tier = {
  id: string;
  title: string;
  subtitle?: string;
  range?: string;
  bullets: string[];
  accent?: "gold" | "silver" | "bronze" | "platinum" | "tech";
};

function accentClasses(accent?: Tier['accent']) {
  switch (accent) {
    case "gold":
      return "border-[#F7D13B] text-[#F7D13B]";
    case "silver":
      return "border-[#C0C0C0] text-[#C0C0C0]";
    case "bronze":
      return "border-[#CD7F32] text-[#CD7F32]";
    case "platinum":
      return "border-white text-white/90";
    case "tech":
      return "border-[#8989FA] text-[#8989FA]";
    default:
      return "border-gray-700 text-white";
  }
}

export const TierCard: React.FC<{ tier: Tier }> = ({ tier }) => {
  const content = (
    <article
      aria-labelledby={`title-${tier.id}`}
      className={`relative rounded-2xl border p-6 shadow-xl bg-[#18181b88] ${accentClasses(
        tier.accent
      )}`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 id={`title-${tier.id}`} className="text-2xl font-extrabold tracking-wide">
          {tier.title}
        </h3>
        {tier.range && (
          <div className="text-right">
            <div className="text-sm opacity-70">Rango</div>
            <div className="text-lg font-bold">{tier.range}</div>
          </div>
        )}
      </div>

      {tier.subtitle && <p className="mt-2 text-sm opacity-70">{tier.subtitle}</p>}

      <ul className="mt-4 space-y-2 text-sm leading-relaxed">
        {tier.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-current/70" />
            <span className="opacity-90">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center gap-4">
        <button
          className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide bg-white/5 hover:bg-white/10 border cursor-pointer"
          aria-label={`Get started with ${tier.title}`}
        >
          Get started
        </button>
      </div>
    </article>
  );

  if (tier.accent === "platinum") {
    return (
      <ElectricBorder
        color="#E5E4E2"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 25 }}
      >
        {content}
      </ElectricBorder>
    );
  }
  if (tier.accent === "tech") {
    return (
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(137, 137, 250, 0.7)">
        {content}
        </SpotlightCard>
    );
  }

  return content;
};
