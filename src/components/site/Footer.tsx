// Social icons moved to Header per design update. Footer is copyright + legal only.

import Link from "next/link";

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms & Conditions", href: "https://www.bigmachinelabelgroup.com/terms/" },
  { label: "Do Not Sell My Personal Information", href: "/privacy" },
];

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
          {LEGAL_LINKS.map((link, i) => {
            const isExternal = link.href.startsWith("http");
            return (
              <span key={link.label} className="flex items-center gap-1">
                {i > 0 && <span aria-hidden="true">&middot;</span>}
                {isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 hover:text-ink"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="inline-block py-2 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                )}
              </span>
            );
          })}
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
