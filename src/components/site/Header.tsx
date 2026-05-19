"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { SocialIcons } from "./SocialIcons";
import { ALBUM_TITLE, PRESAVE_URL, ctaCopy, availabilityCopy } from "@/lib/campaign";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Tour", href: "/tour" },
  { label: "Music", href: "/music" },
  { label: "Videos", href: "/videos" },
];

const EXTERNAL_NAV = [
  { label: "Merch", href: "https://aaronlewismerch.myshopify.com/" },
];

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-[17px] font-medium transition-colors ${
        active
          ? "text-ink after:absolute after:left-0 after:bottom-[-6px] after:h-px after:w-full after:bg-accent"
          : "text-ink-muted hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );
}

function ExternalNavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in new tab)`}
      onClick={onClick}
      className="flex items-center gap-0.5 text-[17px] font-medium text-ink-muted transition-colors hover:text-ink"
    >
      {label}
    </a>
  );
}

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Focus first nav link when drawer opens
  useEffect(() => {
    if (drawerOpen) {
      requestAnimationFrame(() => {
        firstLinkRef.current?.focus();
      });
    }
  }, [drawerOpen]);

  // Close on route change
  useEffect(() => {
    closeDrawer();
  }, [pathname, closeDrawer]);

  // Close on Escape
  useEffect(() => {
    if (!drawerOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeDrawer();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen, closeDrawer]);

  // Scroll-based header background — debounced to avoid unnecessary re-renders
  const scrolledRef = useRef(false);
  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 50;
        if (isScrolled !== scrolledRef.current) {
          scrolledRef.current = isScrolled;
          setScrolled(isScrolled);
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const allNavItems = [
    ...NAV_ITEMS.map((item) => ({ ...item, external: false })),
    ...EXTERNAL_NAV.map((item) => ({ ...item, external: true })),
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-bg transition-colors duration-300 ${
        scrolled ? "border-rule" : "border-transparent"
      }`}
    >
      {/* Desktop: three-column grid */}
      <div className="relative mx-auto hidden h-[80px] max-w-[1920px] items-center justify-between px-6 md:px-8 lg:flex lg:px-12">
        {/* Left: wordmark */}
        <Link href="/" aria-label="Aaron Lewis - Home">
          <Image
            src="/branding/AaronLewis_LogoName.png"
            alt="Aaron Lewis"
            width={160}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Center: nav — absolutely positioned so it's truly centered regardless of left/right widths */}
        <nav
          aria-label="Primary"
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-8"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              active={pathname === item.href}
            />
          ))}
          {EXTERNAL_NAV.map((item) => (
            <ExternalNavLink
              key={item.href}
              href={item.href}
              label={item.label}
            />
          ))}
        </nav>

        {/* Right: social icons */}
        <SocialIcons size={22} />
      </div>

      {/* Mobile: wordmark + hamburger/close toggle */}
      <div className="mx-auto flex h-[60px] max-w-screen-2xl items-center justify-between px-6 md:px-8 lg:hidden">
        <Link href="/" aria-label="Aaron Lewis - Home">
          <Image
            src="/branding/AaronLewis_LogoName.png"
            alt="Aaron Lewis"
            width={160}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <button
          ref={toggleButtonRef}
          type="button"
          onClick={toggleDrawer}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          aria-controls="mobile-drawer"
          className="text-ink transition-transform duration-150 ease-out"
          style={{ transform: drawerOpen ? "rotate(0deg)" : "rotate(0deg)" }}
        >
          <span
            className="block transition-transform duration-150 ease-out"
            style={{ transform: drawerOpen ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            {drawerOpen ? <X size={28} /> : <Menu size={28} />}
          </span>
        </button>
      </div>

      {/* Mobile drawer — renders below the header */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal={drawerOpen}
        aria-label="Site navigation"
        aria-hidden={!drawerOpen}
        className={`fixed inset-x-0 bottom-0 top-[60px] z-40 overflow-hidden bg-bg transition-[opacity,transform] duration-200 ease-out lg:hidden ${
          drawerOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav
          aria-label="Primary"
          className="flex h-full flex-col items-start gap-5 px-6 pt-8"
        >
          {allNavItems.map((item, i) =>
            item.external ? (
              <a
                key={item.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.label} (opens in new tab)`}
                onClick={closeDrawer}
                className="flex items-center gap-1 font-display text-3xl font-normal text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                ref={i === 0 ? (firstLinkRef as React.Ref<HTMLAnchorElement>) : undefined}
                href={item.href}
                className={`font-display text-3xl font-normal transition-colors ${
                  pathname === item.href
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          {/* Social icons */}
          <SocialIcons
            size={24}
            className="mt-8 flex gap-6"
          />

        </nav>
      </div>
    </header>
  );
}
