import { useEffect, useState } from 'react';

import { fetchLeadManagementDetails } from '@/api/leadManagement';
import type { LeadManagementResponseType } from '@/types/LeadManagement';

export const useLeadManagementData = (
  query: string,
  defaultValue: LeadManagementResponseType | null,
) => {
  const [response, setResponse] = useState({
    isLoading: false,
    leadManagementData: defaultValue,
    serverError: null,
  });

  const fetchData = async () => {
    try {
      const data = await fetchLeadManagementDetails(query);
      setResponse({
        serverError: null,
        leadManagementData: data || null,
        isLoading: false,
      });
    } catch (error: any) {
      setResponse({
        leadManagementData: null,
        serverError: error,
        isLoading: false,
      });
    }
  };

  useEffect(() => {
    setResponse({
      ...response,
      isLoading: true,
    });
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { ...response };
};
