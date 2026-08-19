"use client";

import type React from "react";

import { Button } from "./button";

const buttonColorClasses = {
  primary: "bg-foreground text-background hover:opacity-85",
  secondary: "bg-card border border-border text-foreground hover:border-accent",
  outline: "bg-accent text-accent-foreground hover:bg-accent/85",
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
  sm: "h-10 px-5 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
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
      className={`${buttonColorClasses[variant]} ${sizeClasses[size]} rounded-full font-bold shadow-none ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
