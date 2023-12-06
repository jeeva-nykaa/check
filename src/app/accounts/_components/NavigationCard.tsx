import Link from 'next/link';
import { GoChevronRight } from 'react-icons/go';

import AnimatedButton from '@/components/animations/AnimatedButton';

import type { AccountsPageNavLinkProps } from './constants';

const NavigationCard: React.FC<AccountsPageNavLinkProps> = (props) => {
  const { label, icon, subText, link } = props;
  return (
    <AnimatedButton className="flex w-full cursor-pointer items-center justify-between px-20">
      <Link href={link} className="flex items-center">
        <div>{icon()}</div>
        <div className="pl-20 text-left">
          <div className="text-16 text-textColor">{label}</div>
          <div className="text-12 text-subTextColor">{subText}</div>
        </div>
      </Link>
      <GoChevronRight />
    </AnimatedButton>
  );
};

export default NavigationCard;
