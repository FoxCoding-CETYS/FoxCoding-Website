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
    title: "text-accent font-black text-5xl text-center",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white",
    outline: "border-green-400 text-green-600 hover:bg-green-200 bg-transparent",
    cta: "bg-black hover:bg-gray-800 text-white",
}

