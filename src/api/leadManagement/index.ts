import apiClient from '@/api/client';
import { ENDPOINT_URLS } from '@/api/uri';
import type {
  LeadManagementResponseType,
  ReasonList,
} from '@/types/LeadManagement';
import { TransformResponseData } from '@/types/LeadManagement';

export const fetchLeadManagementDetails = async (
  query: string = '',
): Promise<LeadManagementResponseType | null | undefined> => {
  const url = `${ENDPOINT_URLS.LEAD_MANAGEMENT}?q=${encodeURIComponent(query)}`;
  try {
    const data: any = await apiClient.get(url);
    const response = data?.data ? TransformResponseData(data?.data) : undefined;
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const fetchReasonList = async (): Promise<Array<ReasonList>> => {
  const url = `${ENDPOINT_URLS.LEAD_MANAGEMENT}/reason-list`;
  try {
    const data: any = await apiClient.get(url);
    const response = data?.data || null;
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateStatus = async (
  id: string,
  reason: string,
): Promise<boolean> => {
  const url = `${ENDPOINT_URLS.LEAD_MANAGEMENT}/${id}/`;
  try {
    const data: any = await apiClient.put(url, { reason });
    const response = data?.success === 'true';
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};
