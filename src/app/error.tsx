"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-6xl font-normal text-ink lg:text-7xl">
        Something Went Wrong
      </h1>
      <p className="mt-6 max-w-md text-lg text-ink-muted">
        An unexpected error occurred. Please try again.
      </p>
      <div className="mt-10 flex gap-4">
        <button
          onClick={() => reset()}
          className="rounded-[2px] bg-accent px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-[2px] border border-ink bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-bg"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
