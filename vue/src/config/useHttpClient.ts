import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface HttpClientOptions {
  excludedUrls?: string[];
  global: AxiosRequestConfig;
  optOutAuth?: boolean;
}

const axiosInstance = axios.create();

export const useHttpClient = (options?: HttpClientOptions): AxiosInstance => {
  if (!options?.optOutAuth) {


    axiosInstance.interceptors.response.use(undefined, async errorResponse => {
      const { status, statusText, data } = errorResponse.response;

      const error = new Error(errorResponse.message);
      error.name = errorResponse.name;
      error.stack = errorResponse.stack;

      return {
        error,
        status,
        statusText,
        errorMessage: data?.message,
      };
    });
  }

  return axiosInstance;
};