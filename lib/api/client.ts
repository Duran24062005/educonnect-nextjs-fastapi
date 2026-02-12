/**
 * Centralized API client with error handling and TypeScript types.
 */
import API_CONFIG from './config';

export interface ApiError {
  error: boolean;
  message: string;
  status_code: number;
  details?: unknown;
}

export interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
}

class ApiClient {
  private baseURL: string;
  private timeout: number;

  constructor(baseURL: string = API_CONFIG.BASE_URL, timeout: number = API_CONFIG.TIMEOUT) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    const defaultHeaders: HeadersInit = {
      'Content-Type': 'application/json',
    };

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(url, {
        ...config,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Handle non-JSON responses
      const contentType = response.headers.get('content-type');
      if (!contentType?.includes('application/json')) {
        if (!response.ok) {
          return {
            error: {
              error: true,
              message: `HTTP ${response.status}: ${response.statusText}`,
              status_code: response.status,
            },
          };
        }
        return { data: (await response.text()) as T };
      }

      const data = await response.json();

      if (!response.ok) {
        return {
          error: {
            error: true,
            message: data.message || data.detail || `HTTP ${response.status}`,
            status_code: response.status,
            details: data.details || data,
          },
        };
      }

      return { data };
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return {
            error: {
              error: true,
              message: 'Request timeout',
              status_code: 408,
            },
          };
        }
        return {
          error: {
            error: true,
            message: error.message || 'Network error',
            status_code: 0,
          },
        };
      }
      return {
        error: {
          error: true,
          message: 'Unknown error occurred',
          status_code: 0,
        },
      };
    }
  }

  async get<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  async post<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }

  async upload<T>(
    endpoint: string,
    file: File,
    additionalData?: Record<string, unknown>,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    const formData = new FormData();
    formData.append('file', file);
    
    if (additionalData) {
      Object.entries(additionalData).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
    }

    const url = `${this.baseURL}${endpoint}`;
    
    // For file uploads, don't set Content-Type header - browser will set it with boundary
    const config: RequestInit = {
      ...options,
      method: 'POST',
      body: formData,
    };

    // Remove Content-Type from headers if present
    if (config.headers) {
      const headers = new Headers(config.headers);
      headers.delete('Content-Type');
      config.headers = headers;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(url, {
        ...config,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const contentType = response.headers.get('content-type');
      if (!contentType?.includes('application/json')) {
        if (!response.ok) {
          return {
            error: {
              error: true,
              message: `HTTP ${response.status}: ${response.statusText}`,
              status_code: response.status,
            },
          };
        }
        return { data: (await response.text()) as T };
      }

      const data = await response.json();

      if (!response.ok) {
        return {
          error: {
            error: true,
            message: data.message || data.detail || `HTTP ${response.status}`,
            status_code: response.status,
            details: data.details || data,
          },
        };
      }

      return { data };
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return {
            error: {
              error: true,
              message: 'Request timeout',
              status_code: 408,
            },
          };
        }
        return {
          error: {
            error: true,
            message: error.message || 'Network error',
            status_code: 0,
          },
        };
      }
      return {
        error: {
          error: true,
          message: 'Unknown error occurred',
          status_code: 0,
        },
      };
    }
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export class for custom instances if needed
export { ApiClient };
