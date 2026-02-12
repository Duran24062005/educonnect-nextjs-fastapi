/**
 * Fathers API functions using the centralized API client.
 */
import { apiClient } from '@/lib/api/client';
import API_CONFIG from '@/lib/api/config';
import type { Father } from '@/lib/api/types';

export const fetchFathers = async (): Promise<Father[]> => {
  const response = await apiClient.get<Father[]>(
    `${API_CONFIG.ENDPOINTS.FATHERS}/all`
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  return response.data || [];
};

export const fetchFatherById = async (id: number): Promise<Father> => {
  const response = await apiClient.get<Father>(
    `${API_CONFIG.ENDPOINTS.FATHERS}/${id}`
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  if (!response.data) {
    throw new Error('Father not found');
  }
  
  return response.data;
};
