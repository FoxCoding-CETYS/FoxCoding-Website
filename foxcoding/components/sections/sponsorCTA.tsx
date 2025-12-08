"use client";

import { textClasses } from "@/app/fonts";
import { CustomButton } from "../ui/custom-button";

export function SponsorCTA(props: {
  Title: string;
  Title2?: string;
  Accent?: string[];
  Body?: string;
  BulletPoints?: string[];
}) {
  const accents = props.Accent ?? [];
  let i = 0;
  const nextAccent = () => accents[i++] ?? "";
  return (
    <section className="w-full bg-secondary-foreground text-white">
      <div className="mx-auto w-4/5 px-6 py-16 text-left text-xl md:text-3xl">
        <h2 className={`${textClasses.title} leading-tight`}>
          {props.Title}{" "}
          {props.Title2 && (
            <span className="hidden sm:block">{props.Title2}</span>
          )}
        </h2>

        <p className="mt-6 leading-relaxed">
          <span className="text-accent font-black">{nextAccent()}</span>{" "}
          {props.Body}{" "}
          <span className="text-accent font-black">{nextAccent()}</span>:
        </p>

        <ul className="mt-6 text-left mx-auto max-w-4/5 list-disc pl-6 space-y-2 marker:text-yellow-400 ">
          {props.BulletPoints?.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="mb-10 flex justify-center">
        <CustomButton
          variant="outline"
          className="mx-auto"
          onClick={() => window.open("https://www.paypal.me/AnahiHulll")}
        >
          Sponsor Us
        </CustomButton>
      </div>
    </section>
  );
}
