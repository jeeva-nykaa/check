import apiClient from '@/api/client';
import { ENDPOINT_URLS } from '@/api/uri';
import type {
  EscalationResponseType,
  EscalationStats,
} from '@/types/Escalation';
import { TransformResponseData } from '@/types/Escalation';

export const fetchEscalationDetails = async (
  query: string = '',
  status: string = '',
): Promise<EscalationResponseType | null | undefined> => {
  const url = `${ENDPOINT_URLS.MY_ESCALATIONS}?q=${encodeURIComponent(
    query,
  )}&status=${encodeURIComponent(status)}&page_size=50`;
  try {
    const data: any = await apiClient.get(url);
    const response = data?.data ? TransformResponseData(data?.data) : undefined;
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const fetchEscalationStatusStats = async (): Promise<
  Array<EscalationStats>
> => {
  const url = `${ENDPOINT_URLS.MY_ESCALATIONS}/escalation-status-stats`;
  try {
    const data: any = await apiClient.get(url);
    const response = data?.data || null;
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};
