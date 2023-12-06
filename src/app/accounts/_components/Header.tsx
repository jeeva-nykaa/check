import { useMemo } from 'react';

import Avatar from '@/components/Avatar';
import type { UserData } from '@/types/User';

type UserDataProps = {
  userData: UserData;
};

const AccountsPageHeader: React.FC<UserDataProps> = (props) => {
  const { name } = props.userData;
  const AvatarComponent = useMemo(() => {
    return <Avatar username={name} />;
  }, [name]);
  return (
    <div className="px-20">
      <div className="mt-100 flex w-full items-center justify-between">
        <div className="flex flex-col">
          <div className="text-16 text-subTextColor">Hello,</div>
          <div className="text-20 font-bold text-textColor">{name}</div>
        </div>
        <div>{AvatarComponent}</div>
      </div>
      <div className="mt-10 flex items-center">
        <div className="text-12 font-normal text-divider">+917871601256</div>
        <div className="flex w-full border-t border-divider" />
      </div>
    </div>
  );
};

export default AccountsPageHeader;
