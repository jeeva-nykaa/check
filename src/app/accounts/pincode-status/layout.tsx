import TabHeader from '@/components/TabHeader';

interface PincodeStatusLayoutProps {
  children: React.ReactNode;
}

const Tabs = [
  {
    id: 1,
    link: '/accounts/pincode-status/non-serviceable',
    label: 'Non-serviceable',
  },
  {
    id: 2,
    link: '/accounts/pincode-status/recently-activated',
    label: 'Recently Activated',
  },
];

export default function PincodeStatusLayout({
  children,
}: PincodeStatusLayoutProps) {
  return (
    <>
      <TabHeader tabs={Tabs} />
      {children}
    </>
  );
}
