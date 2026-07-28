"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { COUNTRIES } from "@/lib/countries";
import { SMS_COUNTRIES } from "@/lib/subscribe-validation";

type FormStatus = "idle" | "loading" | "success" | "error";
type ErrorField = "email" | "phone" | "";

const DEFAULT_SUCCESS_HEAD = "You’re on the list.";
const DEFAULT_SUCCESS_SUB =
  "Check your inbox, and your phone for a text you can reply to and confirm SMS updates.";

// Keep only digits and auto-format a US number as NXX-NXX-XXXX as the fan types.
// Handles pastes that include a leading country code (1 or +1) or punctuation.
function formatUsPhone(value: string): string {
  let d = value.replace(/\D/g, "");
  if (d.length === 11 && d.startsWith("1")) d = d.slice(1);
  d = d.slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
}

const inputBase =
  "w-full border-0 border-b bg-transparent px-0 py-2 text-base text-ink transition-colors focus:outline-none";
const inputBorder = (invalid: boolean) =>
  invalid ? "border-accent" : "border-ink-muted/40 hover:border-ink/60 focus:border-accent";

export function EmailSignup({
  heading = "Stay on the list.",
  subhead = "New music, tour dates, and announcements straight to your inbox.",
}: {
  heading?: string;
  subhead?: string;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("United States");
  const [website, setWebsite] = useState(""); // honeypot

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorField, setErrorField] = useState<ErrorField>("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successHead, setSuccessHead] = useState(DEFAULT_SUCCESS_HEAD);
  const [successSub, setSuccessSub] = useState(DEFAULT_SUCCESS_SUB);

  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const isNorthAmerica = SMS_COUNTRIES.has(country);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return; // guard double-submit
    setStatus("loading");
    setErrorField("");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, zipCode, country, website }),
      });
      const data = await res.json().catch(() => null);

      if (res.ok) {
        if (data?.message) {
          setSuccessHead("Thanks.");
          setSuccessSub(data.message);
        }
        setStatus("success");
        return;
      }

      const field: ErrorField =
        data?.field === "email" || data?.field === "phone" ? data.field : "";
      setErrorField(field);
      setErrorMessage(data?.error || "Something went wrong. Please try again.");
      setStatus("error");
      requestAnimationFrame(() => {
        if (field === "email") emailRef.current?.focus();
        else if (field === "phone") phoneRef.current?.focus();
      });
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  const isSubmitted = status === "success";

  return (
    <section data-bg="elevated" className="bg-elevated px-6 py-20 md:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Eyebrow */}
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
          Mailing List
        </p>

        {isSubmitted ? (
          <div role="status" aria-live="polite">
            <h2 className="font-display text-5xl font-normal leading-tight text-ink lg:text-6xl">
              {successHead}
            </h2>
            <p className="mt-3 max-w-md text-base text-ink-muted">{successSub}</p>
          </div>
        ) : (
          <>
            {/* Heading */}
            <h2 className="font-display text-5xl font-normal leading-tight text-ink lg:text-6xl">
              {heading}
            </h2>

            {/* Subhead */}
            <p className="mt-3 max-w-md text-base text-ink-muted">{subhead}</p>

            <form className="mt-12" onSubmit={handleSubmit} noValidate>
              {/* Honeypot — hidden from real users, bots auto-fill it */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

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
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`${inputBase} ${inputBorder(false)}`}
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
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`${inputBase} ${inputBorder(false)}`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">
                    Email
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    aria-invalid={errorField === "email"}
                    aria-describedby={status === "error" ? "signup-error" : undefined}
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${inputBase} ${inputBorder(errorField === "email")}`}
                  />
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
                    inputMode="numeric"
                    autoComplete="postal-code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className={`${inputBase} ${inputBorder(false)}`}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">
                    Phone Number{isNorthAmerica ? "" : " (optional)"}
                  </label>
                  {isNorthAmerica ? (
                    <div className={`flex items-center border-0 border-b ${inputBorder(errorField === "phone")}`}>
                      <span className="pr-2 text-base text-ink-muted select-none" aria-hidden="true">+1</span>
                      <input
                        ref={phoneRef}
                        type="tel"
                        id="phone"
                        name="phone"
                        inputMode="numeric"
                        placeholder="555-555-5555"
                        required
                        aria-required="true"
                        aria-invalid={errorField === "phone"}
                        aria-describedby={status === "error" ? "signup-error" : undefined}
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(formatUsPhone(e.target.value))}
                        className="w-full border-0 bg-transparent px-0 py-2 text-base text-ink placeholder:text-ink-muted/50 focus:outline-none"
                      />
                    </div>
                  ) : (
                    <input
                      ref={phoneRef}
                      type="tel"
                      id="phone"
                      name="phone"
                      inputMode="tel"
                      aria-invalid={errorField === "phone"}
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`${inputBase} ${inputBorder(errorField === "phone")}`}
                    />
                  )}
                </div>

                <div>
                  <label htmlFor="country" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      name="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full appearance-none border-0 border-b border-ink-muted/40 bg-transparent px-0 py-2 pr-8 text-base text-ink transition-colors hover:border-ink/60 focus:border-accent focus:outline-none"
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
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
                <p id="signup-error" role="alert" className="mt-4 text-sm text-accent">
                  {errorMessage || "Something went wrong. Please try again."}
                </p>
              )}
            </form>
          </>
        )}

        {/* Disclaimer — legally required SMS consent when collecting phone via Laylo. */}
        <p className="mt-8 text-xs leading-relaxed text-ink-muted/70">
          By submitting this form you agree to receive email and recurring automated marketing
          text messages. We will text you once to confirm your number, reply to opt in. Consent
          is not a condition of purchase. Message and data rates may apply. See the Big Machine
          Records{" "}
          <Link href="/privacy" className="text-ink-muted underline hover:text-ink">
            Privacy Policy
          </Link>
          , and Laylo&apos;s{" "}
          <a
            href="https://docs.laylo.com/en/articles/6497431-terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted underline hover:text-ink"
          >
            Terms
          </a>
          {" "}and{" "}
          <a
            href="https://docs.laylo.com/en/articles/6497219-privacy-and-gdpr-policy"
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
