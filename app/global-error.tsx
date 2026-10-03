'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-[#001f3f] mb-4">Application Error</h1>
            <p className="text-gray-600 mb-8">Something went wrong. Please try again.</p>
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-[#001f3f] text-white rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
