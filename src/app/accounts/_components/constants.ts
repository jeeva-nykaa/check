import { GrLocation } from 'react-icons/gr';
import { LuStore } from 'react-icons/lu';
import { RiCustomerService2Line } from 'react-icons/ri';

export interface AccountsPageNavLinkProps {
  link: string;
  subText: string;
  label: string;
  icon: any;
}

export const accountPageLinks: AccountsPageNavLinkProps[] = [
  {
    link: '/accounts/lead-management',
    label: 'Lead Management',
    subText: 'View your saved leads',
    icon: LuStore,
  },
  {
    link: '/accounts/escalation-center',
    label: 'Escalation Center',
    subText: 'View all type of escalation raised by BDE',
    icon: RiCustomerService2Line,
  },
  {
    link: '/accounts/pincode-status',
    label: 'Pincode Status',
    subText: 'List of pincodes recently updated',
    icon: GrLocation,
  },
];
