/**
 * Posts/Blogs API functions using the centralized API client.
 */
'use server';

import { apiClient } from '@/lib/api/client';
import API_CONFIG from '@/lib/api/config';
import type { Post } from '@/lib/api/types';

export const fetchBlogs = async (): Promise<Post[]> => {
  const response = await apiClient.get<Post[]>(
    `${API_CONFIG.ENDPOINTS.POSTS}/`
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  return response.data || [];
};

export const fetchBlogById = async (id: number): Promise<Post> => {
  const response = await apiClient.get<Post>(
    `${API_CONFIG.ENDPOINTS.POSTS}/${id}`
  );
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  if (!response.data) {
    throw new Error('Post not found');
  }
  
  return response.data;
};

export async function CreateBlogs(prevState: any, formData: FormData) {
  const teacher_id = 2; // TODO: Get from auth context

  if (!formData) {
    return { success: false, message: 'No se recibieron datos del formulario' };
  }

  const title = formData.get('title');
  const content = formData.get('content');
  const file = formData.get('file') as File | null;
  const teacher = teacher_id;

  if (!title || !content) {
    return { success: false, message: 'El titulo y el contenido son requeridos' };
  }

  try {
    if (file && file instanceof File) {
      // Upload with file
      const response = await apiClient.upload<{ success: boolean; message: string }>(
        `${API_CONFIG.ENDPOINTS.POSTS}/create/`,
        file,
        { title, content, teacher }
      );
      
      if (response.error) {
        return { success: false, message: response.error.message };
      }
      
      return { success: true, message: 'Formulario enviado con éxito' };
    } else {
      // Create without file
      const response = await apiClient.post<{ success: boolean; message: string }>(
        `${API_CONFIG.ENDPOINTS.POSTS}/create/`,
        { title, content, teacher }
      );
      
      if (response.error) {
        return { success: false, message: response.error.message };
      }
      
      return { success: true, message: 'Formulario enviado con éxito' };
    }
  } catch (error) {
    return { success: false, message: 'Error al enviar el formulario' };
  }
}
