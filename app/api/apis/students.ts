/**
 * Students API functions using the centralized API client.
 */
import { apiClient } from '@/lib/api/client';
import API_CONFIG from '@/lib/api/config';
import type { Student } from '@/lib/api/types';

export const fetchStudents = async (): Promise<Student[]> => {
  const response = await apiClient.get<Student[]>(
    `${API_CONFIG.ENDPOINTS.STUDENTS}/all/`
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  return response.data || [];
};

export const fetchStudentById = async (id: number): Promise<Student> => {
  const response = await apiClient.get<Student>(
    `${API_CONFIG.ENDPOINTS.STUDENTS}/${id}`
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  if (!response.data) {
    throw new Error('Student not found');
  }
  
  return response.data;
};
