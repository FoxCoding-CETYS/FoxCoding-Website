import Image from "next/image";
import { firaCode } from "@/app/fonts";

export function HeroSection({ first_word, second_word }: { first_word: string; second_word?: string }) {
  const title = [first_word, second_word].filter(Boolean).join(" ");
  return (
    <section className="relative isolate min-h-[440px] overflow-hidden bg-brand-dark text-white md:min-h-[520px]">
      <Image src="/ceid.png" alt="CEID at CETYS University" fill className="-z-20 object-cover object-center opacity-35 grayscale" priority />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/25" />
      <div className="technical-grid absolute inset-0 -z-10 opacity-20" />
      <div className="site-container flex min-h-[440px] flex-col justify-end pb-16 pt-24 md:min-h-[520px] md:pb-20">
        <p className={`${firaCode.className} mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent`}>FoxCoding / CETYS</p>
        <h1 className="max-w-4xl text-balance text-5xl font-black tracking-[-0.06em] sm:text-6xl md:text-7xl">{title}</h1>
        <div className="mt-8 h-1 w-20 rounded-full bg-accent" />
      </div>
    </section>
  );
}
