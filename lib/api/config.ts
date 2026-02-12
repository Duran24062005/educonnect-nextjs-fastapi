/**
 * API configuration and base URL management.
 */

const getApiUrl = (): string => {
  // In production, use relative URLs or environment variable
  if (typeof window !== 'undefined') {
    // Client-side: use environment variable or default
    return process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
  }
  // Server-side: use environment variable or default
  return process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
};

export const API_CONFIG = {
  BASE_URL: getApiUrl(),
  TIMEOUT: 30000, // 30 seconds
  ENDPOINTS: {
    TEACHERS: '/teachers',
    STUDENTS: '/students',
    FATHERS: '/fathers',
    COURSES: '/courses',
    GRADES: '/grades',
    POSTS: '/posts',
    AUTH: '/auth',
  },
} as const;

export default API_CONFIG;
