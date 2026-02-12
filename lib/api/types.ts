/**
 * TypeScript types for API responses.
 */

export interface ApiResponse<T> {
  data?: T;
  error?: {
    error: boolean;
    message: string;
    status_code: number;
    details?: unknown;
  };
}

export interface Teacher {
  id: number;
  first_name: string;
  last_name: string;
  birth_date?: string;
  email: string;
  phone: string;
  imageUrl?: string;
  created_at: string;
  updated_at: string;
  posts?: Post[];
}

export interface TeacherCreate {
  first_name: string;
  last_name: string;
  birth_date?: string;
  email: string;
  phone: string;
  password: string;
  imageUrl?: string;
}

export interface TeacherUpdate {
  first_name?: string;
  last_name?: string;
  birth_date?: string;
  email?: string;
  phone?: string;
  password?: string;
  imageUrl?: string;
}

export interface Student {
  id: number;
  first_name: string;
  last_name: string;
  birth_date?: string;
  email: string;
  phone: string;
  imageUrl?: string;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
  created_at: string;
  updated_at: string;
  teacher_id?: number;
}

export interface Course {
  id: number;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Grade {
  id: number;
  student_id: number;
  course_id: number;
  grade: number;
  created_at: string;
  updated_at: string;
}

export interface Father {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;
}
