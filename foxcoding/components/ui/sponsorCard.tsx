"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CustomButton } from "./custom-button";
import { textClasses } from "@/app/fonts";

const sponsorCardColorClasses = {
  bronze: "bg-bronze-card border border-bronze text-white",
  silver: "bg-silver-card border border-silver text-white",
  gold: "bg-gold-card border border-gold text-white",
  platinum: "bg-platinum-card border border-platinum text-white",
  techpartner: "bg-techpartner-card border border-techpartner text-white",
};

interface CustomCardProps {
  title: string;
  range: string;
  description: string[];
  variant?: "bronze" | "silver" | "gold" | "platinum" | "techpartner";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SponsorsCard(props: CustomCardProps) {
  const {
    title,
    range,
    description,
    variant = "bronze",
    size = "sm",
    className = "",
  } = props;
  return (
    <Card
      className={`${sponsorCardColorClasses[variant]} w-full h-full rounded-4xl ${className}`}
    >
      <div className="flex mx-auto">
        <h2 className={`${textClasses.title} mt-4 font-black text-${variant}`}>
          {title}
        </h2>
      </div>
      <div
        className={` ${textClasses.subtitle} mx-auto text-primary font-black text-center`}
      >
        <h3>{range}</h3>
      </div>
      <div className="mx-auto">
        <CustomButton variant={variant} size="md" className="mx-auto">
          GET STARTED
        </CustomButton>
      </div>
      <div className="mx-auto">
        <ul className="mx-auto text-md md:text-lg w-8/12 leading-6 font-medium text-primary list-disc">
          {description.map((item, idx) => (
            <li className="mb-2" key={`${item}-${idx}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
