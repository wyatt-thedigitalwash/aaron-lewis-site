// Social icons moved to Header per design update. Footer is copyright + legal only.

import Link from "next/link";
import CookieChoicesLink from "@/components/legal/CookieChoicesLink";

const LEGAL_LINKS = [
  { label: "Terms", href: "/legal/terms" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Copyright (DMCA)", href: "/legal/dmca" },
  { label: "Cybersecurity", href: "/legal/cybersecurity" },
  { label: "TCPA", href: "/legal/tcpa" },
  { label: "Do Not Sell My Personal Information", href: "/legal/privacy#s10-2" },
];

const LINK_CLASS = "inline-block py-2 hover:text-ink";

function FooterCopyright() {
  return (
    <section className="border-t border-rule bg-bg px-4 py-10 lg:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
        {/* Copyright */}
        <p className="text-xs text-ink-muted">
          &copy; Borchetta Entertainment Group, LLC d/b/a Big Machine Records.
        </p>

        {/* Legal links */}
        <div className="flex flex-wrap items-center justify-center gap-x-1 text-xs text-ink-muted">
          {LEGAL_LINKS.map((link, i) => (
            <span key={link.label} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true">&middot;</span>}
              <Link href={link.href} className={LINK_CLASS}>
                {link.label}
              </Link>
            </span>
          ))}
          <span className="flex items-center gap-1">
            <span aria-hidden="true">&middot;</span>
            <CookieChoicesLink className={LINK_CLASS} />
          </span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <FooterCopyright />
    </footer>
  );
}
