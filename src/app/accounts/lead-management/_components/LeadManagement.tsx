'use client';

import { useState } from 'react';

import { useLeadManagementData } from '@/api/leadManagement/hooks';
import Spinner from '@/components/animations/Spinner';
import SearchBar from '@/components/SearchBar';
import type {
  LeadManagementResponseType,
  ReasonList,
} from '@/types/LeadManagement';

import LeadManagementCard from './LeadManagementCard';

interface LeadManagementCompProps {
  data: LeadManagementResponseType;
  reasonList: Array<ReasonList>;
}

const LeadManagementComponent: React.FC<LeadManagementCompProps> = ({
  data,
  reasonList,
}) => {
  const [query, setQuery] = useState<string>('');
  const { leadManagementData, serverError, isLoading } = useLeadManagementData(
    query,
    data,
  );
  return (
    <div className="px-16">
      <div className="sticky left-0 top-0 w-full border-b border-lightBorder bg-white py-16">
        <SearchBar
          searchText={query}
          placeholder="Search Retailers"
          onSearch={(value) => setQuery(value)}
        />
      </div>

      <div className="my-16 flex h-screen flex-col gap-10 overflow-y-scroll">
        {isLoading ? (
          <Spinner />
        ) : (
          !serverError &&
          leadManagementData?.results?.map((leadManagement: any) => {
            return (
              <LeadManagementCard
                key={leadManagement.createdAt}
                leadManagement={leadManagement}
                reasonList={reasonList}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default LeadManagementComponent;
