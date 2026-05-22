// Music page placeholders to flag with BMLG:
// - Album description copy (agency-written)
// - Back catalog list (verify completeness)
// - Streaming links for back catalog albums (carousel items do not link out yet)

import type { Metadata } from "next";
import Image from "next/image";
import {
  ALBUM_TITLE,
  PRESAVE_URL,
  ctaCopy,
  availabilityCopy,
} from "@/lib/campaign";
import { breadcrumbSchema, BASE } from "@/lib/schema";
import { EmailSignup } from "@/components/site/EmailSignup";
import { FadeIn } from "@/components/site/FadeIn";
import { DiscographyCarousel } from "@/components/site/DiscographyCarousel";
import type { Album } from "@/components/site/DiscographyCarousel";
import { ShopifyCollection } from "@/components/site/ShopifyCollection";

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: BASE },
  { name: "Music", url: `${BASE}/music` },
]);

export const metadata: Metadata = {
  title: "Music",
  description:
    "Stream and explore the music of Aaron Lewis. Featuring Give My Country Back and the full discography from The Hill to Town Line.",
  alternates: { canonical: "https://aaronlewismusic.com/music" },
  openGraph: {
    title: "Music | Aaron Lewis",
    description:
      "Stream and explore the music of Aaron Lewis. Featuring Give My Country Back and the full discography from The Hill to Town Line.",
    url: "https://aaronlewismusic.com/music",
    siteName: "Aaron Lewis",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Music | Aaron Lewis",
    description:
      "Stream and explore the music of Aaron Lewis. Featuring Give My Country Back and the full discography from The Hill to Town Line.",
    images: ["/og-image.png"],
  },
};

// Verify the back catalog list with BMLG (5 titles based on public discography).
// Streaming links for back catalog albums still needed from BMLG.
const DISCOGRAPHY: Album[] = [
  { title: "The Hill", year: 2023, coverUrl: "/album_art/AaronLewis_TheHill.jpeg" },
  { title: "State I'm In", year: 2019, coverUrl: "/album_art/AaronLewis_TheStateImIn.jpg" },
  { title: "Sinner", year: 2016, coverUrl: "/album_art/AaronLewis_Sinner.jpg" },
  { title: "The Road", year: 2012, coverUrl: "/album_art/AaronLewis_TheRoad.jpg" },
  { title: "Town Line EP", year: 2011, coverUrl: "/album_art/AaronLewis_TownLine.jpeg" },
];

function FeaturedHero() {
  return (
    <section className="bg-bg lg:h-[calc(100dvh-80px)]">
      <div className="grid lg:grid-cols-2 lg:h-full">
        {/* Album art — full height left half */}
        <div className="relative aspect-square bg-bg lg:aspect-auto">
          <Image
            src="/album_art/AarowLewis_GiveMyCountryBack_AlbumCover.jpg"
            alt="Aaron Lewis Give My Country Back album cover"
            fill
            priority
            className="object-contain object-center"
          />
        </div>

        {/* Content — right half, vertically centered */}
        <div className="flex items-center px-6 py-16 md:px-12 lg:px-16 lg:py-24">
          <div>
            <h1 className="font-display text-5xl font-normal leading-none text-ink lg:text-7xl">
              {ALBUM_TITLE}
            </h1>
            <p className="mt-4 font-display text-xl font-normal text-ink-muted">
              {availabilityCopy()}
            </p>
            <p className="mt-8 max-w-prose text-base text-ink lg:text-lg">
              <em>{ALBUM_TITLE}</em> is the latest record from Aaron Lewis.
              Twelve tracks built on acoustic backbone and lived-in honesty. The
              kind of country that sounds like the front porch sounds when no one
              is performing.
            </p>
            <div className="mt-10">
              <a
                href={PRESAVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${ctaCopy()} (opens in new tab)`}
                className="inline-flex items-center rounded-[2px] bg-accent px-6 py-3 text-sm font-medium uppercase tracking-wide text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] transition-colors hover:bg-accent-hover"
              >
                {ctaCopy()}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


const TRACKLIST = [
  { num: 1, title: "The Door", duration: "3:28" },
  { num: 2, title: "Bad Thing To Be Good At", duration: "4:25" },
  { num: 3, title: "Too High For This", duration: "3:20" },
  { num: 4, title: "List Of Things To Quit", duration: "3:22" },
  { num: 5, title: "Give My Country Back", duration: "3:00" },
  { num: 6, title: "People I've Known", duration: "4:20" },
  { num: 7, title: "Let Go Like The Rain", duration: "3:18" },
  { num: 8, title: "A Showman's Life", duration: "4:41" },
  { num: 9, title: "Keeping Up With The Jonesin'", duration: "3:24" },
  { num: 10, title: "Duct Tape And Bailing Wire", duration: "5:52" },
];

function Tracklist() {
  return (
    <section id="tracklist" className="bg-bg px-6 py-20 md:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 font-display text-5xl font-normal text-accent lg:text-6xl">
          Tracklist
        </h2>
        <div>
          {TRACKLIST.map((track) => (
            <div
              key={track.num}
              className="flex items-center border-b border-rule py-4"
            >
              <span className="w-12 shrink-0 text-lg font-medium text-ink-muted">
                {String(track.num).padStart(2, "0")}
              </span>
              <span className="text-lg text-ink">{track.title}</span>
              <span className="ml-auto text-base text-ink-muted">
                {track.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Discography() {
  return (
    <section
      data-bg="dark"
      className="bg-bg px-6 py-20 md:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 font-display text-5xl font-normal text-accent lg:text-6xl">
          Discography
        </h2>
        <DiscographyCarousel albums={DISCOGRAPHY} />
      </div>
    </section>
  );
}

export default function MusicPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <FeaturedHero />
      <FadeIn>
        <section className="bg-bg px-6 pb-0 pt-20 md:px-8 lg:pt-32">
          <div className="mx-auto max-w-[1200px]">
            <ShopifyCollection />
          </div>
        </section>
      </FadeIn>
      <FadeIn><Tracklist /></FadeIn>
      <FadeIn><Discography /></FadeIn>
      <FadeIn><EmailSignup /></FadeIn>
    </>
  );
}
