import { apiFetch } from "@/lib/api"

export function fetchCourses() {
  return apiFetch<number>("/courses/leng")
}
