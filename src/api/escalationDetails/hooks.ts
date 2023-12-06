import { useEffect, useState } from 'react';

import { fetchEscalationDetails } from '@/api/escalationDetails';
import type { EscalationResponseType } from '@/types/Escalation';

export const useEscalationData = (
  status: Array<string> | null,
  query: string,
  defaultValue: EscalationResponseType | null,
) => {
  const [response, setResponse] = useState({
    isLoading: false,
    escalationData: defaultValue,
    serverError: null,
  });

  const fetchData = async () => {
    try {
      const data = await fetchEscalationDetails(query, status?.join(','));
      setResponse({
        serverError: null,
        escalationData: data || null,
        isLoading: false,
      });
    } catch (error: any) {
      setResponse({
        escalationData: null,
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
  }, [status, query]);

  return { ...response };
};
