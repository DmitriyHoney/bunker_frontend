import { baseInstance } from '@/api/index';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import router from '@/router';
import { clearStorageTokens, getStorageTokens } from '@/api/index';

export const useTokenInRequest = () => {
  baseInstance.interceptors.request.use((req) => {
    const { access } = getStorageTokens();
    access
      ? (req.headers.Authorization = 'Bearer ' + access)
      : clearStorageTokens();
    return req;
  });

  createAuthRefreshInterceptor(baseInstance, () => {
    clearStorageTokens();
    router.push('/');
  });
};
