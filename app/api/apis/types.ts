export type CourseSummary = {
  id: number
  name: string
}

export type StudentSummary = {
  id: number
  first_name: string
  last_name: string
  email?: string | null
  phone?: string | null
  father?: string | null
  birth_date?: string | null
  imageUrl?: string | null
  activo?: boolean
  course?: CourseSummary | null
}

export type TeacherSummary = {
  id: number
  first_name: string
  last_name: string
  email?: string | null
  phone?: string | null
  age?: number | null
  imageUrl?: string | null
  activo?: boolean
}

export type FatherSummary = {
  id: number
  first_name: string
  last_name: string
  email?: string | null
  phone?: string | null
  age?: number | null
  imageUrl?: string | null
  activo?: boolean
}

export type BlogTeacher = {
  first_name?: string
  last_name?: string
}

export type BlogPost = {
  id: number
  title: string
  content: string
  imageUrl?: string | null
  created_at: string
  teacher?: BlogTeacher | null
}
