'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TabHeaderProps {
  tabs: any;
}

const TabHeader: React.FC<TabHeaderProps> = ({ tabs }) => {
  const path = usePathname();
  return (
    <div className="flex w-full overflow-x-scroll border-b border-lightBorder">
      {tabs?.map((tab: any) => {
        return (
          <div
            key={tab.id}
            className={classNames(
              'px-12 pb-8 pt-12 min-w-fit text-14 font-medium cursor-pointer',
              {
                'border-b-2 border-theme text-theme': tab.link === path,
                'border-none text-subTextColor': tab.link !== path,
              },
            )}
          >
            <Link href={tab.link}>{tab.label}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default TabHeader;
