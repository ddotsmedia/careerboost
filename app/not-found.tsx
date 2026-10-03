import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001f3f] via-[#0a3a6b] to-[#001f3f] px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-[#d4af37] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-[#d4af37] text-[#001f3f] rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center gap-2 justify-center"
          >
            Go Home
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/articles"
            className="block px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] rounded-lg font-semibold hover:bg-[#d4af37]/10 transition"
          >
            Read Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
