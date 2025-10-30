"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CustomButton } from "./custom-button";

type Props = {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  description: string;
};

export function EventCard({
  title,
  imageSrc,
  imageAlt = `${title} preview`,
  description
}: Props) {
  return (
    <Card className="rounded-3xl border-border bg-foreground p-3 mb-8 md:mb-2 shadow-lg min-h-[550px] md:min-h-[500px]">
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-2xl md:text-3xl font-bold text-accent">{title}</h3>
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={500}
          className="h-auto w-full object-cover max-h-[200px]"
          priority
        />
      </div>

      <p className="mt-2 text-lg md:text-2xl leading-6 text-muted-foreground">
        {description}
      </p>
      <CustomButton variant="outline" size="md" className="w-1/2 md:w-1/2 mx-auto my-auto mt-4">View Our Projects</CustomButton>
    </Card>
  );
}
