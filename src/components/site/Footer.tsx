// Social icons moved to Header per design update. Footer is copyright + legal only.

const LEGAL_LINKS = [
  { label: "Privacy", href: "https://www.bigmachinelabelgroup.com/privacy-notice/" },
  { label: "Terms & Conditions", href: "https://www.bigmachinelabelgroup.com/terms/" },
  { label: "Do Not Sell My Personal Information", href: "https://www.bigmachinelabelgroup.com/privacy-notice/" },
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
          {LEGAL_LINKS.map((link, i) => (
            <span key={link.label} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true">&middot;</span>}
              <a href={link.href} className="hover:text-ink">
                {link.label}
              </a>
            </span>
          ))}
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
