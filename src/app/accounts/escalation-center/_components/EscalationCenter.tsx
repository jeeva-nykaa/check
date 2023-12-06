'use client';

import { useState } from 'react';

import { useEscalationData } from '@/api/escalationDetails/hooks';
import Spinner from '@/components/animations/Spinner';
import SearchBar from '@/components/SearchBar';
import type {
  EscalationResponseType,
  EscalationStats,
} from '@/types/Escalation';

import EscalationCard from './EscalationCard';
import FilterBar from './Filterbar';

interface EscalationCenterCompProps {
  data: EscalationResponseType;
  statusStats: Array<EscalationStats>;
}

const EscalationCenterComponent: React.FC<EscalationCenterCompProps> = ({
  data,
  statusStats,
}) => {
  const [status, setStatus] = useState<Array<string>>([]);
  const [query, setQuery] = useState<string>('');
  const { escalationData, serverError, isLoading } = useEscalationData(
    status,
    query,
    data,
  );
  return (
    <div className="px-16">
      <div className="sticky left-0 top-0 w-full border-b border-lightBorder bg-white py-16">
        <SearchBar
          searchText={query}
          placeholder="Search Ticket"
          onSearch={(value) => setQuery(value)}
        />
        <FilterBar
          statusStats={statusStats}
          status={status}
          setStatus={setStatus}
        />
      </div>

      <div className="my-16 flex h-screen flex-col gap-10 overflow-y-scroll">
        {isLoading ? (
          <Spinner />
        ) : (
          !serverError &&
          escalationData?.results?.map((escalation: any) => {
            return (
              <EscalationCard
                key={escalation.createdAt}
                escalation={escalation}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default EscalationCenterComponent;
