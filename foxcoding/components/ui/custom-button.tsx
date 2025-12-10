"use client";

import type React from "react";

import { Button } from "./button";

const buttonColorClasses = {
  primary: "bgbg-button text-background hover:bg-button/90",
  secondary: "bg-foreground text-button-text hover:bg-foreground/80",
  outline: "text-foreground bg-accent hover:bg-accent/80",
  cta: "bg-black hover:bg-gray-800 text-white",
  bronze: "bg-bronze-button border border-bronze text-white hover:bg-bronze/80",
  silver: "bg-silver-button border border-silver text-white hover:bg-silver/80",
  gold: "bg-gold-button border border-gold text-white hover:bg-gold/80",
  platinum:
    "bg-platinum-button border border-platinum text-white hover:bg-platinum/80",
  techpartner:
    "bg-techpartner-button border border-techpartner text-white hover:bg-techpartner/80",
};

interface CustomButtonProps {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "cta"
    | "bronze"
    | "silver"
    | "gold"
    | "platinum"
    | "techpartner";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const sizeClasses = {
  sm: "px-4 py-2 text-xl md:text-2xl",
  md: "px-6 sm:px-8 py-2 sm:py-3 text-md md:text-lg font-bold",
  lg: "px-8 sm:px-12 py-2 sm:py-3 text-xl md:text-2xl",
};

export function CustomButton({
  children,
  variant = "primary",
  size = "sm",
  className = "",
  onClick,
}: CustomButtonProps) {
  return (
    <Button
      className={`${buttonColorClasses[variant]} ${sizeClasses[size]} rounded-full font-bold ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
