'use client';

import './globals.css';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <div className="container flex h-full justify-center">
          <div className="min-h-screen w-full border bg-white sm:w-360">
            <div className="flex h-full w-full flex-col items-center justify-center bg-white text-textColor">
              <h2>Something went wrong!</h2>
              <button
                type="submit"
                className="mt-10 flex h-42 w-fit items-center justify-center rounded-sm border border-divider bg-white p-10 text-14 text-theme"
                onClick={() => reset()}
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
