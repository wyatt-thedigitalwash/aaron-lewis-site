"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ctaCopy, PRESAVE_URL } from "@/lib/campaign";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Tour", href: "/tour" },
  { label: "Music", href: "/music" },
  { label: "Videos", href: "/videos" },
  { label: "About", href: "/about" },
];

const EXTERNAL_NAV = [
  { label: "Merch", href: "https://aaronlewismerch.myshopify.com/" },
  { label: "The Hill Shop", href: "https://shop.aaronlewismusic.com/" },
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
      className={`relative text-sm font-medium transition-colors ${
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
      className="flex items-center gap-0.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
    >
      {label}
      <ArrowUpRight size={14} />
    </a>
  );
}

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDrawer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setDrawerOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });
  }, []);

  const closeDrawer = useCallback(() => {
    if (!drawerOpen || closeTimer.current) return;
    setIsVisible(false);
    closeTimer.current = setTimeout(() => {
      setDrawerOpen(false);
      closeTimer.current = null;
    }, 250);
  }, [drawerOpen]);

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

  // Animated close on route change
  useEffect(() => {
    if (drawerOpen) {
      closeDrawer();
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const allNavItems = [
    ...NAV_ITEMS.map((item) => ({ ...item, external: false })),
    ...EXTERNAL_NAV.map((item) => ({ ...item, external: true })),
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rule bg-bg">
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-4 lg:h-[72px] lg:px-6">
        <Link href="/" aria-label="Aaron Lewis - Home">
          <Image
            src="/images/aaron-lewis-signature.png"
            alt="Aaron Lewis"
            width={160}
            height={40}
            priority
            className="h-8 w-auto lg:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
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
          <a
            href={PRESAVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${ctaCopy()} (opens in new tab)`}
            className="rounded-[2px] bg-accent px-6 py-2.5 text-sm font-medium tracking-wide text-ink shadow-[inset_0_0_0_1px_rgba(188,180,166,0.2)] transition-colors hover:bg-accent-hover"
          >
            {ctaCopy()}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={openDrawer}
          aria-label="Open menu"
          className="text-ink lg:hidden"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`fixed inset-0 z-[60] flex flex-col bg-bg transition-opacity duration-300 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Header bar */}
          <div
            className={`flex h-[60px] items-center justify-between px-4 transition-transform duration-300 ease-out ${
              isVisible ? "translate-y-0" : "-translate-y-2"
            }`}
          >
            <Link href="/" onClick={closeDrawer} aria-label="Aaron Lewis - Home">
              <Image
                src="/images/aaron-lewis-signature.png"
                alt="Aaron Lewis"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={closeDrawer}
              aria-label="Close menu"
              className="text-ink"
            >
              <X size={28} />
            </button>
          </div>

          {/* Nav items with staggered entrance */}
          <nav
            aria-label="Primary"
            className="flex flex-1 flex-col items-start gap-6 px-6 pt-10"
          >
            {allNavItems.map((item, i) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.label} (opens in new tab)`}
                  onClick={closeDrawer}
                  className={`flex items-center gap-1 font-display text-3xl font-semibold text-ink-muted transition-all duration-300 ease-out hover:text-ink ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${75 + i * 50}ms` }}
                >
                  {item.label}
                  <ArrowUpRight size={20} />
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeDrawer}
                  className={`font-display text-3xl font-semibold transition-all duration-300 ease-out ${
                    pathname === item.href
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                  } ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${75 + i * 50}ms` }}
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href={PRESAVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ctaCopy()} (opens in new tab)`}
              onClick={closeDrawer}
              className={`mt-4 rounded-[2px] bg-accent px-6 py-3 font-display text-xl font-semibold tracking-wide text-ink shadow-[inset_0_0_0_1px_rgba(188,180,166,0.2)] transition-all duration-300 ease-out hover:bg-accent-hover ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: `${75 + allNavItems.length * 50}ms`,
              }}
            >
              {ctaCopy()}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
