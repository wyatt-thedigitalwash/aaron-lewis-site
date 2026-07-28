"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { readConsent } from "./consent";
import { useSplash, EXEMPT_PATHS } from "@/components/site/SplashGate";

// Shown once, right after the cookie choice is made, so the arbitration /
// class-action-waiver notice is front and center instead of buried in the
// footer. Persists acknowledgement separately from cookie consent.
const STORAGE_KEY = "al-terms-gate";

function readAcknowledged(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return !!window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return false;
  }
}

function writeAcknowledged(): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, new Date().toISOString());
  } catch {
    /* storage unavailable -- notice will simply reappear next visit */
  }
}

export default function TermsGate() {
  const pathname = usePathname();
  const router = useRouter();
  const { entered, markEntered } = useSplash();
  const [show, setShow] = useState(false);

  const maybeShow = useCallback(() => {
    // Case A: stranded on a splash-exempt page (e.g. /legal/terms) without
    // having entered. The splash itself is hidden here, so this is the only
    // way back into the site -- always available regardless of whether the
    // notice was acknowledged in a past session.
    if (!entered && EXEMPT_PATHS.some((p) => pathname.startsWith(p))) {
      setShow(true);
      return;
    }
    // Case B: backup notice after a cookie decision, shown once ever.
    if (readAcknowledged()) {
      setShow(false);
      return;
    }
    setShow(entered && !!readConsent());
  }, [entered, pathname]);

  useEffect(() => {
    maybeShow();
    window.addEventListener("cookie-consent-decided", maybeShow);
    return () => window.removeEventListener("cookie-consent-decided", maybeShow);
  }, [maybeShow]);

  const enter = () => {
    writeAcknowledged();
    setShow(false);
    // Edge case: a returning visitor who already decided cookies in a past
    // session, but hasn't entered *this* session yet, can land this popup
    // while sitting on a splash-exempt page (e.g. /legal/terms). Treat this
    // click the same as accepting on the splash itself: mark them entered
    // and send them back into the site instead of stranding them here. If
    // they're already entered, this is just a normal in-place dismissal.
    if (!entered && EXEMPT_PATHS.some((p) => pathname.startsWith(p))) {
      markEntered();
      router.push("/");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:left-auto sm:right-4 sm:max-w-[420px]">
      <div className="border border-text-body/20 bg-background-alt/95 p-4 shadow-2xl backdrop-blur-sm sm:p-6">
        <p className="font-body text-[12.5px] leading-relaxed text-text-accent sm:text-sm">
          Your use of this website constitutes your consent to our{" "}
          <Link href="/legal/terms" className="font-semibold underline hover:text-text-header">
            Terms &amp; Conditions
          </Link>
          , which includes your agreement to{" "}
          <Link href="/legal/terms#section-17" className="font-semibold underline hover:text-text-header">
            arbitrate any claims
          </Link>{" "}
          as well as a{" "}
          <Link href="/legal/terms#class-action-waiver" className="font-semibold underline hover:text-text-header">
            waiver of any class action rights
          </Link>
          .
        </p>
        <button type="button" onClick={enter} className="cc-btn cc-btn-primary mt-3 w-full sm:mt-5">
          {entered ? "Close" : "Enter Site"}
        </button>
      </div>
    </div>
  );
}
