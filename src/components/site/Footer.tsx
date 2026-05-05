
// Social icon SVG components. Using inline SVGs because lucide-react does not
// include brand icons. Each renders at the given size prop.
function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SpotifyIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function AppleMusicIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.8-.335-2.22-1.178-.38-.762-.166-1.73.613-2.274.34-.238.727-.375 1.132-.463.46-.1.928-.16 1.39-.25.264-.05.514-.14.707-.34.18-.19.25-.42.253-.67.01-.63.004-1.26.004-1.89V8.617c0-.12-.013-.24-.053-.355-.058-.17-.18-.272-.355-.295a1.69 1.69 0 00-.318-.014c-.658.06-1.316.12-1.973.186l-3.39.326c-.03.003-.058.01-.09.012-.2.023-.34.13-.387.328-.024.1-.035.204-.036.307-.003.708 0 1.416 0 2.124v7.22c0 .397-.046.79-.2 1.163-.263.638-.716 1.057-1.378 1.269a3.186 3.186 0 01-1.074.18c-.973.04-1.844-.36-2.257-1.234-.352-.747-.163-1.658.573-2.242.335-.265.724-.41 1.13-.508.488-.118.983-.176 1.47-.28.218-.047.428-.118.607-.26.27-.216.36-.51.363-.844.008-.72.003-1.44.003-2.16V5.844c0-.263.038-.52.152-.76.138-.29.368-.47.66-.536.18-.04.365-.06.55-.08l3.727-.36 2.47-.238c.06-.006.12-.007.18-.015.404-.04.68.198.727.6.01.088.013.177.013.266 0 1.988 0 3.976.003 5.964z" />
    </svg>
  );
}

function AmazonMusicIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
    </svg>
  );
}

function PandoraIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 18V6h4a4 4 0 0 1 0 8H8" />
    </svg>
  );
}

function YoutubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/AaronLewisMusic", Icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/aaronlewismusic", Icon: InstagramIcon },
  { label: "X", href: "https://twitter.com/aaronlewismusic", Icon: XIcon },
  { label: "Spotify", href: "https://open.spotify.com/artist/2t2XKfWKLXpFIjFwy1K8wx", Icon: SpotifyIcon },
  { label: "Apple Music", href: "https://itunes.apple.com/us/artist/aaron-lewis/413422387", Icon: AppleMusicIcon },
  { label: "Amazon Music", href: "https://www.amazon.com/Aaron-Lewis/e/B004LUW7ME", Icon: AmazonMusicIcon },
  { label: "Pandora", href: "https://pandora.app.link/d6dT1kYpcGb", Icon: PandoraIcon },
  { label: "YouTube", href: "https://www.youtube.com/user/AaronLewisTV", Icon: YoutubeIcon },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "https://www.bigmachinelabelgroup.com/privacy-notice/" },
  { label: "Terms & Conditions", href: "https://www.bigmachinelabelgroup.com/terms/" },
  { label: "Do Not Sell My Personal Information", href: "https://www.bigmachinelabelgroup.com/privacy-notice/" },
];

function FooterCopyright() {
  return (
    <section className="border-t border-rule bg-bg px-4 py-10 lg:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        {/* Social icons */}
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} (opens in new tab)`}
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <link.Icon size={20} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-ink-muted">
          &copy; 2026{" "}
          <a
            href="https://www.bigmachinelabelgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            Big Machine Label Group
          </a>
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
