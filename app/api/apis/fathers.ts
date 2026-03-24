import { apiFetch } from "@/lib/api"
import type { FatherSummary } from "./types"

export function fetchFathers() {
  return apiFetch<FatherSummary[]>("/fathers/")
}
