"use client";

import Image from "next/image";
import { Trophy } from "lucide-react";

type Props = {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  description: string;
};

export function EventCard({ title, imageSrc, imageAlt = `${title} preview`, description }: Props) {
  return (
    <article className="flex h-full min-h-[500px] flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card p-3 shadow-[0_12px_35px_rgba(0,0,0,0.06)]">
      <div className="relative h-52 overflow-hidden rounded-[1.1rem] bg-muted">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        <div className="absolute left-4 top-4 grid size-9 place-items-center rounded-full bg-accent text-accent-foreground shadow"><Trophy className="size-4" /></div>
      </div>
      <div className="flex flex-1 flex-col p-4 pt-5">
        <h3 className="text-xl font-black leading-tight tracking-[-0.03em] md:text-2xl">{title}</h3>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{description.replaceAll("**", "")}</p>
        <p className="mt-auto pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">FoxCoding milestone</p>
      </div>
    </article>
  );
}
