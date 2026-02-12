/**
 * Teachers API functions using the centralized API client.
 */
import { apiClient } from '@/lib/api/client';
import API_CONFIG from '@/lib/api/config';
import type { Teacher, TeacherCreate, TeacherUpdate } from '@/lib/api/types';

export const fetchTeachers = async (): Promise<Teacher[]> => {
  const response = await apiClient.get<Teacher[]>(
    `${API_CONFIG.ENDPOINTS.TEACHERS}/all`
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  return response.data || [];
};

export const fetchTeacherById = async (id: number): Promise<Teacher> => {
  const response = await apiClient.get<Teacher>(
    `${API_CONFIG.ENDPOINTS.TEACHERS}/${id}`
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  if (!response.data) {
    throw new Error('Teacher not found');
  }
  
  return response.data;
};

export const fetchTeacherPosts = async (teacherId: number): Promise<unknown[]> => {
  const response = await apiClient.get<unknown[]>(
    `${API_CONFIG.ENDPOINTS.TEACHERS}/${teacherId}/posts`
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  return response.data || [];
};

export const createTeacher = async (teacher: TeacherCreate): Promise<Teacher> => {
  const response = await apiClient.post<Teacher>(
    `${API_CONFIG.ENDPOINTS.TEACHERS}/`,
    teacher
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  if (!response.data) {
    throw new Error('Failed to create teacher');
  }
  
  return response.data;
};

export const updateTeacher = async (
  id: number,
  teacher: TeacherUpdate
): Promise<Teacher> => {
  const response = await apiClient.put<Teacher>(
    `${API_CONFIG.ENDPOINTS.TEACHERS}/${id}`,
    teacher
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  if (!response.data) {
    throw new Error('Failed to update teacher');
  }
  
  return response.data;
};

export const deleteTeacher = async (id: number): Promise<void> => {
  const response = await apiClient.delete<{ message: string }>(
    `${API_CONFIG.ENDPOINTS.TEACHERS}/${id}`
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
};

export const uploadTeacherImage = async (
  teacherId: number,
  file: File
): Promise<{ message: string; image_url: string }> => {
  const response = await apiClient.upload<{ message: string; image_url: string }>(
    `${API_CONFIG.ENDPOINTS.TEACHERS}/${teacherId}/upload`,
    file
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  if (!response.data) {
    throw new Error('Failed to upload image');
  }
  
  return response.data;
};
