const FALLBACK_API_BASE_URL = "http://127.0.0.1:8000"

const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.DOMAIN ||
  FALLBACK_API_BASE_URL
).replace(/\/+$/, "")

function buildHeaders(init?: RequestInit) {
  const headers = new Headers(init?.headers)

  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json")
  }

  if (!(init?.body instanceof FormData) && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json")
  }

  return headers
}

export function getApiUrl(path: string) {
  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

export function resolveApiAssetUrl(path?: string | null) {
  if (!path) {
    return undefined
  }

  if (/^https?:\/\//i.test(path)) {
    return path
  }

  return getApiUrl(path)
}

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(getApiUrl(path), {
    ...init,
    cache: init?.cache ?? "no-store",
    headers: buildHeaders(init),
  })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  if (response.status === 204) {
    return undefined as T
  }

  return response.json() as Promise<T>
}
