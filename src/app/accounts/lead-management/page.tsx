import {
  fetchLeadManagementDetails,
  fetchReasonList,
} from '@/api/leadManagement';

import LeadManagementComponent from './_components/LeadManagement';

const LeadManagement: React.FC = async () => {
  const data = await fetchLeadManagementDetails();
  const reasonList = await fetchReasonList();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data && <LeadManagementComponent data={data} reasonList={reasonList} />}
    </>
  );
};

export default LeadManagement;
