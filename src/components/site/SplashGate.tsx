"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SplashPage } from "./SplashPage";

const SplashContext = createContext({
  active: false,
  closing: false,
  dismiss: () => {},
});

export function useSplash() {
  return useContext(SplashContext);
}

export function SplashGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname.startsWith("/gmcb");

  const [state, setState] = useState<"loading" | "splash" | "closing" | "site">("loading");

  useEffect(() => {
    if (isLanding) {
      setState("site");
      return;
    }
    const alreadyDismissed = sessionStorage.getItem("splash_dismissed_album") === "true";
    setState(alreadyDismissed ? "site" : "splash");
  }, [isLanding]);

  const dismiss = useCallback(() => {
    sessionStorage.setItem("splash_dismissed_album", "true");
    setState("closing");
    setTimeout(() => setState("site"), 500);
  }, []);

  const splashActive = state === "loading" || state === "splash" || state === "closing";
  const showSplash = state === "splash" || state === "closing";

  return (
    <SplashContext.Provider value={{ active: splashActive, closing: state === "closing", dismiss }}>
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
