"use client"

import type React from "react"

import { Button } from "./button"

const buttonColorClasses = {
    primary: "bg-button hover:bg-primary-hover text-background",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white",
    outline: "border-green-400 text-green-600 hover:bg-green-200 bg-transparent",
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
  sm: "px-4 py-2 text-[20px]",
  md: "px-6 sm:px-8 py-2 sm:py-3",
  lg: "px-8 sm:px-12 py-2 sm:py-3 text-base sm:text-lg",
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