import {
  fetchEscalationDetails,
  fetchEscalationStatusStats,
} from '@/api/escalationDetails';

import EscalationCenterComponent from './_components/EscalationCenter';

interface EscalationCenterProps {}

const EscalationCenter: React.FC<EscalationCenterProps> = async () => {
  const data = await fetchEscalationDetails();
  const statusStats = await fetchEscalationStatusStats();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data && (
        <EscalationCenterComponent data={data} statusStats={statusStats} />
      )}
    </>
  );
};

export default EscalationCenter;
