import { apiFetch } from "@/lib/api"
import type { TeacherSummary } from "./types"

export function fetchTeachers() {
  return apiFetch<TeacherSummary[]>("/teachers/all")
}
