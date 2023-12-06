import { useState } from 'react';

import { updateStatus } from '@/api/leadManagement';
import type { ReasonList } from '@/types/LeadManagement';

interface UpdateStatusProps {
  businessName: string;
  phoneNumber: string;
  reasonList: Array<ReasonList>;
  id: string;
}

const UpdateStatus: React.FC<UpdateStatusProps> = ({
  businessName,
  phoneNumber,
  reasonList,
  id,
}) => {
  const [selectedStatus, setSelectedStatus] = useState('');
  const handleUpdateStatus = async () => {
    if (selectedStatus.length > 0) {
      const response = await updateStatus(id, selectedStatus);
      console.log(response);
    }
  };
  return (
    <div className="mt-30">
      <div className="text-22 font-semibold text-textColor">{businessName}</div>
      <div className="mt-2 text-14 text-subTextColor">
        {phoneNumber.substring(3)}
      </div>
      <div className="my-20 text-14 font-medium text-textColor">
        How was your visit ?
      </div>
      {reasonList?.map((value) => {
        return (
          <button
            type="button"
            className="flex w-full items-center justify-between pb-14"
            key={value.slug}
            onClick={() => setSelectedStatus(value.slug)}
          >
            <div className="text-12 text-subTextColor"> {value.reason}</div>
            <input
              type="checkbox"
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="custom-checkbox"
              value={value.reason}
              checked={value.slug === selectedStatus}
            />
          </button>
        );
      })}
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleUpdateStatus();
        }}
        className="mt-22 h-42 w-full rounded-md bg-theme text-14 text-white"
      >
        Update Status
      </button>
    </div>
  );
};

export default UpdateStatus;
