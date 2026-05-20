// Brand icons via react-icons (Fa6 + Si sets). Standard library, current marks.
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaSpotify,
  FaApple,
  FaAmazon,
  FaYoutube,
} from "react-icons/fa6";
import { SiPandora } from "react-icons/si";
import type { IconType } from "react-icons";

const SOCIALS: { Icon: IconType; label: string; url: string }[] = [
  { Icon: FaFacebookF, label: "Facebook", url: "https://www.facebook.com/AaronLewisMusic" },
  { Icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/aaronlewismusic" },
  { Icon: FaXTwitter, label: "X", url: "https://twitter.com/aaronlewismusic" },
  { Icon: FaSpotify, label: "Spotify", url: "https://open.spotify.com/artist/2t2XKfWKLXpFIjFwy1K8wx" },
  { Icon: FaApple, label: "Apple Music", url: "https://itunes.apple.com/us/artist/aaron-lewis/413422387" },
  { Icon: FaAmazon, label: "Amazon Music", url: "https://www.amazon.com/Aaron-Lewis/e/B004LUW7ME" },
  { Icon: SiPandora, label: "Pandora", url: "https://pandora.app.link/d6dT1kYpcGb" },
  { Icon: FaYoutube, label: "YouTube", url: "https://www.youtube.com/user/AaronLewisTV" },
];

export function SocialIcons({
  size = 18,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={className ?? "flex items-center gap-4"}>
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${s.label} (opens in new tab)`}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-ink-muted transition-colors duration-150 hover:text-ink"
        >
          <s.Icon size={size} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
