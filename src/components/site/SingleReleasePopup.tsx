"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";

export function SingleReleasePopup() {
  const [phase, setPhase] = useState<"pending" | "visible" | "closing" | "closed">("pending");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  // Check sessionStorage client-side and show if not seen
  useEffect(() => {
    if (sessionStorage.getItem("popup-seen")) {
      setPhase("closed");
    } else {
      setPhase("visible");
    }
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (phase === "visible") {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    }
    if (phase === "closed") {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  // Escape key
  useEffect(() => {
    if (phase !== "visible") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  // Focus trap
  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const focusable = [closeButtonRef.current, ctaRef.current].filter(Boolean) as HTMLElement[];
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  const handleClose = useCallback(() => {
    sessionStorage.setItem("popup-seen", "1");
    setPhase("closing");
    setTimeout(() => setPhase("closed"), 300);
  }, []);

  if (phase === "pending" || phase === "closed") return null;

  const isOpen = phase === "visible";
  const isClosing = phase === "closing";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.88)",
        opacity: isClosing ? 0 : isOpen ? 1 : 0,
        transition: isClosing
          ? "opacity 300ms ease-in"
          : "opacity 400ms ease-out",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      role="presentation"
    >
      {/* Close button — fixed to viewport corner */}
      <button
        ref={closeButtonRef}
        type="button"
        onClick={handleClose}
        aria-label="Close"
        className="fixed right-6 top-6 z-[70] text-white transition-opacity duration-200 hover:opacity-60"
      >
        <X size={28} />
      </button>

      {/* Modal content — no card, floating on overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="New single announcement"
        onKeyDown={onKeyDown}
        className="flex w-[90vw] max-w-[520px] flex-col items-center text-center"
        style={{
          opacity: isClosing ? 0 : isOpen ? 1 : 0,
          transform: isClosing
            ? "scale(0.97)"
            : isOpen
              ? "scale(1)"
              : "scale(0.95)",
          transition: isClosing
            ? "opacity 250ms ease-in, transform 250ms ease-in"
            : "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Cover art */}
        <div
          className="relative aspect-square w-full max-w-[480px]"
          style={{ boxShadow: "0 8px 40px rgba(0, 0, 0, 0.5)" }}
        >
          <Image
            src="/singles/AaronLewis_GiveMyCountryBack_Single.png"
            alt="Give My Country Back single cover"
            fill
            className="object-cover"
          />
        </div>

        {/* Eyebrow */}
        <p
          className="mt-6 text-[0.85rem] uppercase tracking-[0.25em] text-accent"
          style={{ fontFamily: "'Clarendon', serif" }}
        >
          New Single
        </p>

        {/* Title */}
        <p className="mt-2 font-display text-[1.75rem] text-white md:text-[2.25rem]">
          Give My Country Back
        </p>

        {/* CTA */}
        <a
          ref={ctaRef}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 bg-accent px-14 py-4 text-[0.9rem] font-bold uppercase tracking-[0.15em] text-white transition-[background-color,transform] duration-200 hover:scale-[1.03] hover:bg-accent-hover"
          style={{ fontFamily: "'Clarendon', serif" }}
        >
          Listen Now
          <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}
