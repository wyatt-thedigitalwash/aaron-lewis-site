import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: "noindex, nofollow",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-6xl font-normal text-ink lg:text-7xl">
        Page Not Found
      </h1>
      <p className="mt-6 max-w-md text-lg text-ink-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block rounded-[2px] border border-ink bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-bg"
      >
        Go Home
      </Link>
    </section>
  );
}
