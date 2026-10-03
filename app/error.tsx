'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-[#001f3f] mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-8">An error occurred. Please try again.</p>
        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="w-full px-6 py-3 bg-[#001f3f] text-white rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Try Again
          </button>
          <a
            href="/"
            className="block w-full px-6 py-3 bg-[#d4af37] text-[#001f3f] rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
