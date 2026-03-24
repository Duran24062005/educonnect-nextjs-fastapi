import { apiFetch } from "@/lib/api"
import type { StudentSummary } from "./types"

export function fetchStudents() {
  return apiFetch<StudentSummary[]>("/students/all")
}
