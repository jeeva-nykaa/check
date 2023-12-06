// lib
import { Suspense } from 'react';

// api
import { fetchUserDetails } from '@/api/userDetails';
import AnimatedButton from '@/components/animations/AnimatedButton';

import AccountsPageBody from './_components/Body';
import { accountPageLinks } from './_components/constants';
import AccountsPageHeader from './_components/Header';

export default async function Accounts() {
  const data = await fetchUserDetails();

  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <div className="flex min-h-screen flex-col">
        <div className="flex-1">
          {data && (
            <>
              <AccountsPageHeader userData={data} />
              <AccountsPageBody accountPageLinks={accountPageLinks} />
            </>
          )}
        </div>
        <div className="mt-auto px-20 pb-20">
          <AnimatedButton className="flex h-48 w-full items-center justify-center rounded-sm border border-divider text-theme focus:bg-none">
            Logout
          </AnimatedButton>
        </div>
      </div>
    </Suspense>
  );
}
