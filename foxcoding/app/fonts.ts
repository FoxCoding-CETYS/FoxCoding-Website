import { Inter, Fira_Code } from "next/font/google";

export const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const firaCode = Fira_Code({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fira",
});

export const textClasses = {
  title: "section-heading text-center",
  subtitle: "text-xl font-bold tracking-tight md:text-2xl",
  subtitle2: "text-lg font-bold tracking-tight md:text-xl",
  paragraph: "section-copy",
  outline: "border-border text-foreground hover:border-accent bg-transparent",
  cta: "bg-brand-dark hover:bg-brand-dark/90 text-white",
};
