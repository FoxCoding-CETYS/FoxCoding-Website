"use client"

import type React from "react"

import { Button } from "./button"

const buttonColorClasses = {
    primary: "bgbg-button text-background hover:bg-button/90",
    secondary: "bg-foreground text-button-text hover:bg-foreground/80",
    outline: "text-foreground bg-accent hover:bg-accent/80",
    cta: "bg-black hover:bg-gray-800 text-white",
}

interface CustomButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "cta"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
}

const sizeClasses = {
  sm: "px-4 py-2 text-xl md:text-2xl",
  md: "px-6 sm:px-8 py-2 sm:py-3 text-md md:text-base font-bold",
  lg: "px-8 sm:px-12 py-2 sm:py-3 text-xl md:text-2xl",
}

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
  )
}