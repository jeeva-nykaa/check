"use client";

import { useRouter } from "next/navigation";

export default function PageNotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <h2>404 | Page not found!</h2>
      <button
        className="flex cursor-pointer mt-10 h-38 w-100 items-center justify-center rounded bg-theme text-12 font-bold text-white shadow  focus:shadow-sm focus:outline-none"
        type="submit"
        onClick={() => router.push("/")}
      >
        Return Home
      </button>
    </div>
  );
}
