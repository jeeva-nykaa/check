import type { Escalation } from '@/types/Escalation';
import { formatDate } from '@/utils';

interface EscalationCardProps {
  escalation: Escalation;
}

const EscalationCard: React.FC<EscalationCardProps> = ({ escalation }) => {
  const {
    retailerName,
    issues,
    status,
    createdAt,
    kaptureTicketId,
    // substatusColor,
  } = escalation;
  return (
    <div className="flex flex-col rounded-md border border-lightBorder p-10">
      <div className="flex flex-col">
        <div className="text-14 text-textColor">{retailerName}</div>
        <div className="text-12 text-subTextColor">
          {issues[0].issue} ({kaptureTicketId})
        </div>
      </div>
      <div className="my-10 flex w-full border-t border-lightBorder" />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="text-12 text-subTextColor">Status</div>
          <div className="text-12 text-[#001325]">{status}</div>
        </div>
        <div className="flex items-center gap-6">
          <div className="h-4 w-4 rounded-full bg-subTextColor" />
          <div>
            <div className="text-12 text-subTextColor">Created On</div>
            <div className="text-12 text-subTextColor">
              {formatDate(createdAt)}
            </div>
          </div>
        </div>
        <div className="">
          <button type="submit" className="text-12 font-medium text-theme">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default EscalationCard;
