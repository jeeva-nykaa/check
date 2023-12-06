import apiClient from '@/api/client';
import type { UserData, UserDataResponse } from '@/types/User';

export const fetchUserDetails = async (): Promise<
  UserData | null | undefined
> => {
  try {
    const data: UserDataResponse = await apiClient.get('users/me');
    return data?.data || undefined;
  } catch (error: any) {
    throw new Error(error);
  }
};
