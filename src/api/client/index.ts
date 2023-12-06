import { isBrowser } from '@/utils';

import { getCookieStore } from './helpers';

class ApiClient {
  private baseURL: string;

  private timeout: number;

  constructor(baseURL: string, timeout = 30000) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);
    let token = null;
    if (!isBrowser()) {
      // Server side - reading cookie using cookies() method
      const cookieStore = await getCookieStore();
      const tokenCookie = cookieStore.get('token');
      token = tokenCookie?.value;
    } else {
      // Client side - reading cookie from document
      const cookieString = document.cookie;
      const cookiePairs = cookieString.split(';');
      const tokenPair = cookiePairs.find((pair) =>
        pair.trim().startsWith('token='),
      );
      token = tokenPair?.split('=')[1]?.trim() ?? null;
    }
    try {
      const response = await fetch(`${this.baseURL}/${endpoint}`, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Token ${token}`,
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`Resource not found: ${response.url}`);
        } else if (response.status === 401) {
          throw new Error(`Unauthorized: ${response.statusText}`);
        } else if (response.status === 500) {
          throw new Error(`Internal Server Error: ${response.statusText}`);
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      }

      return await response.json();
    } catch (error) {
      if (
        typeof DOMException !== 'undefined' &&
        error instanceof DOMException &&
        error.name === 'AbortError'
      ) {
        throw new Error('Request timed out');
      } else {
        throw error;
      }
    } finally {
      clearTimeout(timeoutId);
    }
  }

  public async get<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    return this.request(endpoint, {
      ...options,
      method: 'GET',
    });
  }

  public async post<T>(
    endpoint: string,
    data: any,
    options: RequestInit = {},
  ): Promise<T> {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
        ...(options.headers || {}),
      },
      body: JSON.stringify(data),
    });
  }

  public async put<T>(
    endpoint: string,
    data: any,
    options: RequestInit = {},
  ): Promise<T> {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
        ...(options.headers || {}),
      },
      body: JSON.stringify(data),
    });
  }

  public async delete<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    return this.request(endpoint, {
      ...options,
      method: 'DELETE',
    });
  }
}

const apiClient = new ApiClient(process.env.NEXT_PUBLIC_API_URL || '');
export default apiClient;
