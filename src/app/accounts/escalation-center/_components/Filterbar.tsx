import classNames from 'classnames';
import { IoIosClose } from 'react-icons/io';

import type { EscalationStats } from '@/types/Escalation';

interface FilterBarProps {
  statusStats: Array<EscalationStats>;
  status: Array<string>;
  setStatus(status: Array<string>): void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  statusStats,
  status,
  setStatus,
}) => {
  return (
    <div className="mt-12 flex w-full gap-10 overflow-x-scroll">
      {statusStats?.map((statusoption: EscalationStats) => {
        return (
          <button
            type="submit"
            key={statusoption.slug}
            className={classNames(
              'flex items-center justify-center rounded-full  px-12 py-6 text-12 text-subTextColor',
              {
                'border border-lightBorder bg-white': !status?.includes(
                  statusoption.slug,
                ),
                'border border-theme bg-theme/10': status?.includes(
                  statusoption.slug,
                ),
              },
            )}
            onClick={() => {
              if (status?.includes(statusoption.slug)) {
                setStatus(status?.filter((slug) => slug !== statusoption.slug));
              } else {
                setStatus([...status, statusoption.slug]);
              }
            }}
          >
            {statusoption.status}({String(statusoption.count)})
            {status?.includes(statusoption.slug) && (
              <div className="ml-4 flex h-12 w-12 items-center justify-center rounded-full bg-theme">
                <IoIosClose style={{ color: 'white' }} />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
