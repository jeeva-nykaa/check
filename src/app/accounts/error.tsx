'use client';

// Error components must be Client Components
import { useEffect } from 'react';

import AnimatedButton from '@/components/animations/AnimatedButton';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-white text-textColor">
      <h2>Something went wrong!</h2>
      <AnimatedButton
        className="mt-10 flex h-42 w-fit items-center justify-center rounded-sm border border-divider bg-white p-10 text-14 text-theme"
        onClick={() => reset()}
      >
        Try again
      </AnimatedButton>
    </div>
  );
}
