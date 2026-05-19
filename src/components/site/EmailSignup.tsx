"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { COUNTRIES } from "@/lib/countries";

export function EmailSignup({
  heading = "Stay on the list.",
  subhead = "New music, tour dates, and announcements straight to your inbox.",
}: {
  heading?: string;
  subhead?: string;
}) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "already" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = (data.get("firstName") as string).trim();
    const lastName = (data.get("lastName") as string).trim();
    const email = (data.get("email") as string).trim();
    const zipCode = (data.get("zip") as string).trim();
    const phone = (data.get("phone") as string).trim();
    const country = (data.get("country") as string).trim();

    // Client-side validation
    const fieldErrors: Record<string, boolean> = {};
    if (!firstName) fieldErrors.firstName = true;
    if (!lastName) fieldErrors.lastName = true;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      fieldErrors.email = true;

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, lastName, zipCode, phone, country }),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setStatus("success");
      } else if (res.status === 409) {
        setStatus("already");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const isSubmitted = status === "success" || status === "already";

  return (
    <section data-bg="elevated" className="bg-elevated px-6 py-20 md:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Eyebrow */}
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
          Mailing List
        </p>

        {isSubmitted ? (
          <>
            <h2 className="font-display text-5xl font-normal leading-tight text-ink lg:text-6xl">
              {status === "success"
                ? "You\u2019re on the list."
                : "You\u2019re already subscribed."}
            </h2>
            <p className="mt-3 max-w-md text-base text-ink-muted">
              Check your inbox for updates.
            </p>
          </>
        ) : (
          <>
            {/* Heading */}
            <h2 className="font-display text-5xl font-normal leading-tight text-ink lg:text-6xl">
              {heading}
            </h2>

            {/* Subhead */}
            <p className="mt-3 max-w-md text-base text-ink-muted">
              {subhead}
            </p>

            <form className="mt-12" onSubmit={handleSubmit} noValidate>
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
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-accent">Required</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full border-0 border-b border-ink-muted/40 bg-transparent px-0 py-2 text-base text-ink transition-colors hover:border-ink/60 focus:border-accent focus:outline-none"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-accent">Required</p>
                  )}
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
                  {errors.email && (
                    <p className="mt-1 text-xs text-accent">Required</p>
                  )}
                </div>
              </div>

              {/* Row 2: Zip, Phone, Country */}
              <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-3 lg:gap-8">
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

                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border-0 border-b border-ink-muted/40 bg-transparent px-0 py-2 text-base text-ink transition-colors hover:border-ink/60 focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
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
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-ink-muted"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Button */}
              <div className="mt-6 flex lg:mt-8 lg:justify-end">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-[2px] border border-ink bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:border-accent hover:bg-accent hover:text-ink disabled:opacity-50 lg:w-auto"
                >
                  {status === "loading" ? "Submitting..." : "Sign Up"}
                </button>
              </div>

              {/* Error message */}
              {status === "error" && (
                <p className="mt-4 text-sm text-accent">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </>
        )}

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-ink-muted/70">
          By submitting this form, you agree to the Big Machine Label Group{" "}
          <a
            href="https://www.bigmachinelabelgroup.com/privacy-notice"
            target="_blank"
            rel="noopener noreferrer"
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
