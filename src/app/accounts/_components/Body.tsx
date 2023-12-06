import type { AccountsPageNavLinkProps } from './constants';
import NavigationCard from './NavigationCard';

type AccountsPageBodyProps = {
  accountPageLinks: AccountsPageNavLinkProps[];
};

const AccountsPageBody: React.FC<AccountsPageBodyProps> = (props) => {
  const { accountPageLinks } = props;
  return (
    <div className="mt-20 flex flex-col gap-24">
      {accountPageLinks?.map((navItems: AccountsPageNavLinkProps) => {
        const { label, icon, subText, link } = navItems;
        return (
          <NavigationCard
            key={label}
            label={label}
            icon={icon}
            subText={subText}
            link={link}
          />
        );
      })}
    </div>
  );
};

export default AccountsPageBody;
