"use client";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="w-full max-w-350 mx-auto text-center space-y-8 py-16">
        <h1 className="text-8xl sm:text-9xl font-bold text-orange-600 tracking-tight">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-100">
          Page not found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.{" "}
        </p>
        <div className="py-6">
          <div className="inline-block p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="text-6xl sm:text-7xl">🤔</div>
          </div>
        </div>
        <Link
          href="/"
          className="inline-block px-10 py-4 text-lg font-medium rounded-2xl
           bg-orange-600 hover:bg-orange-700 active:bg-orange-800
           text-white shadow-lg transition-colors duration-200"
        >
          Back to Home
        </Link>
        <p className="pt-12 text-sm text-gray-500 dark:text-gray-600">
          Still lost? →{" "}
          <Link href="/contact" className="text-orange-600 hover:underline">
            Contact us
          </Link>
        </p>
      </div>
    </div>
  );
}
