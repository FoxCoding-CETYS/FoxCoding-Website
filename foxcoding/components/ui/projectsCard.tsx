"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { textClasses } from "@/app/fonts";

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
    <Card className="rounded-3xl border-border bg-foreground p-3 shadow-lg min-h-[550px] md:min-h-[500px]">
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={500}
          className="h-auto w-fit mx-auto object-cover min-h-[320px]"
          priority
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <h3 className={`${textClasses.subtitle} text-white`}>{title}</h3>
        <Badge
          className="rounded-full bg-accent px-3 py-1 text-lg font-bold text-black hover:bg-accent"
          variant="secondary"
        >
          {status}
        </Badge>
      </div>

      <p className="mt-2 text-lg md:text-2xl leading-6 text-muted-foreground">
        {description}
      </p>

      {(githubUrl || liveUrl) && (
        <div className="mt-3 flex items-center gap-3">
          {githubUrl && (
            <Link
              href={githubUrl}
              aria-label="GitHub repository"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-accent/10"
            >
              <Github className="h-10 w-10 text-accent" />
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              aria-label="Open live project"
              className="inline-flex h-8 w-9 items-center justify-center rounded-lg hover:bg-accent/10"
            >
              <ExternalLink className="h-10 w-10 text-accent" />
            </Link>
          )}
        </div>
      )}
    </Card>
  );
}
