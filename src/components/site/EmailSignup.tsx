import { ArrowRight, ChevronDown } from "lucide-react";
import { COUNTRIES } from "@/lib/countries";

export function EmailSignup({
  heading = "Stay on the list.",
  subhead = "New music, tour dates, and announcements straight to your inbox.",
}: {
  heading?: string;
  subhead?: string;
}) {
  return (
    <section data-bg="elevated" className="bg-elevated px-6 py-20 md:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Eyebrow */}
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
          Mailing List
        </p>

        {/* Heading */}
        <h2 className="font-display text-4xl font-bold leading-tight text-ink lg:text-5xl">
          {heading}
        </h2>

        {/* Subhead */}
        <p className="mt-3 max-w-md text-base text-ink-muted">
          {subhead}
        </p>

        {/* Non-functional UI placeholder. BMLG to provide list provider integration. */}
        <form className="mt-12">
          {/* Row 1: First Name, Last Name, Email */}
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            <div>
              <label htmlFor="firstName" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full border-0 border-b border-ink-muted/40 bg-transparent px-0 py-2 text-base text-ink transition-colors hover:border-ink/60 focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full border-0 border-b border-ink-muted/40 bg-transparent px-0 py-2 text-base text-ink transition-colors hover:border-ink/60 focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border-0 border-b border-ink-muted/40 bg-transparent px-0 py-2 text-base text-ink transition-colors hover:border-ink/60 focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2: Zip, Country, Button */}
          <div className="mt-6 grid items-end gap-6 lg:mt-8 lg:grid-cols-4 lg:gap-8">
            <div>
              <label htmlFor="zip" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">
                Zip Code
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                className="w-full border-0 border-b border-ink-muted/40 bg-transparent px-0 py-2 text-base text-ink transition-colors hover:border-ink/60 focus:border-accent focus:outline-none"
              />
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="country" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">
                Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  defaultValue=""
                  className="w-full appearance-none border-0 border-b border-ink-muted/40 bg-transparent px-0 py-2 pr-8 text-base text-ink-muted transition-colors hover:border-ink/60 focus:border-accent focus:outline-none [&:not([value=''])]:text-ink"
                >
                  <option value="" disabled>
                    Select Your Country
                  </option>
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-ink-muted"
                />
              </div>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-[2px] border border-ink bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:border-accent hover:bg-accent hover:text-ink lg:w-auto"
              >
                Sign Up
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </form>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-ink-muted/70">
          By submitting this form, you agree to the Big Machine Label Group{" "}
          <a
            href="https://bigmachinelabelgroup.com/privacy-policy"
            className="text-ink-muted underline hover:text-ink"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
