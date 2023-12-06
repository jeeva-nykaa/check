import { useState } from 'react';
import { LuStore } from 'react-icons/lu';

import BottomSheet from '@/components/BottomSheet';
import type { LeadManagement, ReasonList } from '@/types/LeadManagement';
import { findDateDifference } from '@/utils';

import UpdateStatus from './UpdateStatus';

interface LeadManagementCardProps {
  leadManagement: LeadManagement;
  reasonList: Array<ReasonList>;
}

const LeadManagementCard: React.FC<LeadManagementCardProps> = ({
  leadManagement,
  reasonList,
}) => {
  const { businessName, phoneNumber, address, reason, createdAt, id } =
    leadManagement;
  const [filter, setFilter] = useState(false);
  return (
    <div className="flex flex-col rounded-md border border-lightBorder p-10">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-14 text-textColor">{businessName}</div>
          <div className="text-12 text-subTextColor">{address}</div>
          <div className="text-12 text-subTextColor">
            {phoneNumber.substring(3)}
          </div>
        </div>
        <LuStore className="h-20 w-20 text-theme" />
      </div>
      <div className="my-10 flex w-full border-t border-lightBorder" />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="text-12 text-subTextColor">Status</div>
          <div className="... w-80 truncate text-12 text-[#001325]">
            {reason}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="h-4 w-4 rounded-full bg-subTextColor" />
          <div>
            <div className="text-12 text-subTextColor">Last Updated</div>
            <div className="text-12 text-subTextColor">
              {findDateDifference(createdAt)} days ago
            </div>
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            className="text-12 font-medium text-theme"
            onClick={(e) => {
              e.preventDefault();
              setFilter(true);
            }}
          >
            Update Status
          </button>
          {filter && (
            <BottomSheet
              open={filter}
              onDismiss={() => setFilter(false)}
              showCloseButton
              showHeader={false}
            >
              <UpdateStatus
                businessName={businessName}
                phoneNumber={phoneNumber}
                reasonList={reasonList}
                id={id}
              />
            </BottomSheet>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadManagementCard;
