import './globals.css';

import type { Metadata } from 'next';

import { checkAuth } from '@/api/client/auth';

import LoginPage from './_components/LoginPage';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Disha web',
  description: 'Disha by Superstore',
};

// https://nextjs.org/docs/messages/app-static-to-dynamic-error
export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await checkAuth();
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        <div className="container flex justify-center">
          <div className="min-h-screen w-full border bg-white sm:w-360">
            {auth ? children : <LoginPage />}
          </div>
        </div>
      </body>
    </html>
  );
}
