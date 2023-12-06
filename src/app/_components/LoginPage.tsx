'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { checkAuth } from '@/api/client/auth';
import { checkUserAgent } from '@/utils';

const LoginPage: React.FC = () => {
  useEffect(() => {
    const userAgentType = checkUserAgent();
    if (userAgentType === 'mobile')
      // TODO : call webinterface from android - redirect to mobile login page
      console.log('Android detected');
  }, []);
  const [token, setToken] = useState('');
  const router = useRouter();
  const handleChange = async () => {
    document.cookie = `token=${token}`;
    const auth = await checkAuth();
    if (auth) {
      // TODO: redirect to dashboard
      router.refresh();
    } else {
      document.cookie = `token=`;
      // TODO: raise toast with error
    }
  };
  return (
    <div className="flex h-full flex-col items-center justify-start">
      <motion.div
        className="mt-50 flex h-50 w-50 items-center justify-center rounded-xl bg-theme p-2 text-12 text-white"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <h1>Disha</h1>
      </motion.div>
      <div className="flex h-full w-full flex-col items-center justify-center px-20">
        <div className="mb-6 w-full px-2">
          <input
            className="mb-2 block h-32 w-full appearance-none rounded border border-theme/50 bg-gray-200 px-4 py-2 text-12 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Token"
          />
        </div>
        <button
          className="flex h-38 w-100 items-center justify-center rounded bg-theme text-12 font-bold text-white shadow  focus:shadow-sm focus:outline-none"
          type="button"
          onClick={handleChange}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
