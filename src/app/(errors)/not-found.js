import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 antialiased">
      <div className="text-center p-12 rounded-2xl shadow-xl bg-white max-w-lg w-full">
        <h1 className="text-8xl font-bold text-gray-900 mb-4 tracking-tighter">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-10 text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-xl text-white font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-black"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
