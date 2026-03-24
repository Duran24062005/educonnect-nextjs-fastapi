import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateAge(birthDate?: string | null) {
  if (!birthDate) {
    return null
  }

  const date = new Date(birthDate)

  if (Number.isNaN(date.getTime())) {
    return null
  }

  const today = new Date()
  let age = today.getFullYear() - date.getFullYear()
  const hasBirthdayPassed =
    today.getMonth() > date.getMonth() ||
    (today.getMonth() === date.getMonth() && today.getDate() >= date.getDate())

  if (!hasBirthdayPassed) {
    age -= 1
  }

  return age
}
