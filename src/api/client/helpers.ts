'use server';

import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { cookies } from 'next/headers';

export async function getCookieStore() {
  const cookieStore = cookies();
  return new Promise<ReadonlyRequestCookies>((resolve) =>
    // eslint-disable-next-line no-promise-executor-return
    setTimeout(() => {
      resolve(cookieStore);
    }, 1000),
  );
}
