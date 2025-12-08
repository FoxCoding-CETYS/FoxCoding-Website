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
  title: "text-accent font-black text-3xl md:text-4xl text-center",
  subtitle: "text-2xl md:text-3xl",
  subtitle2: "text-xl md:text-2xl font-black",
  paragraph: "text-lg md:text-2xl leading-6",
  outline: "border-green-400 text-green-600 hover:bg-green-200 bg-transparent",
  cta: "bg-black hover:bg-gray-800 text-white",
};
