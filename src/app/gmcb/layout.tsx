"use client";

import { useEffect } from "react";

export default function GmcbLayout({ children }: { children: React.ReactNode }) {
  // Hide site chrome (header, footer, splash) when this layout mounts
  useEffect(() => {
    document.body.classList.add("landing-page");
    return () => {
      document.body.classList.remove("landing-page");
    };
  }, []);

  return <>{children}</>;
}
