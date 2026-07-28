"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SplashPage } from "./SplashPage";

const SplashContext = createContext({
  active: false,
  closing: false,
  // True only once the visitor has actually agreed (clicked Enter Site), as
  // opposed to just having the splash hidden because they're on an exempt page
  // like /legal. Cookie consent + TermsGate key off `entered`, not `active`,
  // so a visitor reading the Terms before entering is not treated as agreeing.
  entered: false,
  dismiss: () => {},
  markEntered: () => {},
});

export function useSplash() {
  return useContext(SplashContext);
}

// Routes where the splash never shows -- the site (or legal page) renders
// directly. /legal is exempt so a visitor deep-linking straight to a policy is
// never blocked by the album splash. Exported so TermsGate can offer an
// "Enter Site" escape hatch when a visitor is stranded on one of these pages.
export const EXEMPT_PATHS = ["/gmcb", "/legal"];

export function SplashGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isExempt = EXEMPT_PATHS.some((p) => pathname.startsWith(p));

  const [state, setState] = useState<"loading" | "splash" | "closing" | "site">("loading");
  const [entered, setEntered] = useState(false);
  // Visiting an exempt page never sets this -- it only hides the splash while
  // they're there, so navigating to any normal page re-gates them until they
  // explicitly enter.
  const enteredRef = useRef(false);

  useEffect(() => {
    if (enteredRef.current) {
      setState("site");
      return;
    }
    if (isExempt) {
      // Splash hidden on this route, but the visitor has NOT entered.
      setState("site");
      return;
    }
    if (sessionStorage.getItem("splash_dismissed_album") === "true") {
      enteredRef.current = true;
      setEntered(true);
      setState("site");
      return;
    }
    setState("splash");
  }, [isExempt]);

  const markEntered = useCallback(() => {
    try {
      sessionStorage.setItem("splash_dismissed_album", "true");
    } catch {
      /* private browsing / SSR */
    }
    enteredRef.current = true;
    setEntered(true);
  }, []);

  const dismiss = useCallback(() => {
    markEntered();
    setState("closing");
    setTimeout(() => setState("site"), 500);
  }, [markEntered]);

  const splashActive = state === "loading" || state === "splash" || state === "closing";
  const showSplash = state === "splash" || state === "closing";

  return (
    <SplashContext.Provider
      value={{ active: splashActive, closing: state === "closing", entered, dismiss, markEntered }}
    >
      <div
        style={{
          opacity: splashActive ? 0 : 1,
          pointerEvents: splashActive ? "none" : "auto",
          transition: state === "loading" ? "none" : "opacity 500ms ease",
        }}
      >
        {children}
      </div>

      {showSplash && <SplashPage />}
    </SplashContext.Provider>
  );
}
