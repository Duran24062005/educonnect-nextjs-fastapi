/**
 * Courses API functions using the centralized API client.
 */
import { apiClient } from '@/lib/api/client';
import API_CONFIG from '@/lib/api/config';
import type { Course } from '@/lib/api/types';

export const fetchCourses = async (): Promise<Course[]> => {
  const response = await apiClient.get<Course[]>(
    `${API_CONFIG.ENDPOINTS.COURSES}/leng`
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  return response.data || [];
};

export const fetchCourseById = async (id: number): Promise<Course> => {
  const response = await apiClient.get<Course>(
    `${API_CONFIG.ENDPOINTS.COURSES}/${id}`
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  if (!response.data) {
    throw new Error('Course not found');
  }
  
  return response.data;
};
