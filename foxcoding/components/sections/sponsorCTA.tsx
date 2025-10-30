"use client";

import { textClasses } from "@/app/fonts";
import { CustomButton } from "../ui/custom-button";

export function SponsorCTA() {
  return (
    <section className="w-full bg-secondary-foreground text-white">
      <div className="mx-auto w-4/5 px-6 py-16 text-left text-xl md:text-3xl">
        <h2
          className={`${textClasses.title} leading-tight`}
        >
          Want to help the next generation of
          <br className="hidden sm:block" /> computer scientist?
        </h2>

        <p className="mt-6 leading-relaxed">
          <span className="text-accent font-black">Fox Coding</span> is a
          student team at CETYS University dedicated to fostering innovation and
          developing technological skills through hackathon participation. By
          supporting us,{" "}
          <span className="text-accent font-black">
            you will be contributing to
          </span>
          :
        </p>

        <ul className="mt-6 text-left mx-auto max-w-4/5 list-disc pl-6 space-y-2 marker:text-yellow-400 ">
          <li>Shaping the next generation of software developers.</li>
          <li>Solving real-world problems through technology.</li>
          <li>
            Promoting collaboration between students and businesses.
          </li>
          <li>
            Positioning CETYS University as a leader in the technology field.
          </li>
        </ul>
      </div>
        <div className="mb-10 flex justify-center">
                <CustomButton variant="outline" className="mx-auto" onClick={() => window.open("https://www.paypal.me/AnahiHulll")}>Sponsor Us</CustomButton>
        </div>
    </section>
  );
}
