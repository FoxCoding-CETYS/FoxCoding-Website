"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

type Props = {
  title: string;
  status?: string;
  imageSrc: string;
  imageAlt?: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
};

export function ProjectCard({
  title,
  status = "Active",
  imageSrc,
  imageAlt = `${title} preview`,
  description,
  githubUrl,
  liveUrl,
}: Props) {
  return (
    <article className="group flex h-full min-h-[480px] flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card p-3 transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden rounded-[1.1rem] bg-muted sm:h-64">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain p-7 transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-brand-dark/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent backdrop-blur">
          {status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 pt-5">
        <h3 className="text-2xl font-black tracking-[-0.035em]">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
        {(githubUrl || liveUrl) && (
          <div className="mt-auto flex items-center gap-2 pt-7">
            {githubUrl && (
              <Link
                href={githubUrl}
                aria-label={`${title} GitHub repository`}
                className="grid size-10 place-items-center rounded-full border border-border transition hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Github className="size-[18px]" />
              </Link>
            )}
            {liveUrl && (
              <Link
                href={liveUrl}
                aria-label={`Open ${title}`}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-xs font-bold transition hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                Visit <ExternalLink className="size-4" />
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
