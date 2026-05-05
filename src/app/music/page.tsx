// Music page placeholders to flag with BMLG:
// - Tracklist (12 placeholder rows)
// - Album description copy (agency-written)
// - Back catalog list (verify completeness)
// - Album artwork for back catalog (currently text placeholders)
// - Streaming links for back catalog albums (cards do not link out yet)

import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  ALBUM_TITLE,
  PRESAVE_URL,
  ctaCopy,
  availabilityCopy,
} from "@/lib/campaign";
import { EmailSignup } from "@/components/site/EmailSignup";

export const metadata: Metadata = {
  title: "Music",
  description:
    "The music of Aaron Lewis. New album Give My Country Back available July 10.",
};

// Placeholder tracklist. Real song titles and durations to be provided by BMLG.
const TRACKLIST = [
  { num: 1, title: "Track One", duration: "3:42" },
  { num: 2, title: "Track Two", duration: "4:18" },
  { num: 3, title: "Track Three", duration: "3:55" },
  { num: 4, title: "Track Four", duration: "4:01" },
  { num: 5, title: "Track Five", duration: "3:28" },
  { num: 6, title: "Track Six", duration: "4:37" },
  { num: 7, title: "Track Seven", duration: "3:14" },
  { num: 8, title: "Track Eight", duration: "4:52" },
  { num: 9, title: "Track Nine", duration: "3:33" },
  { num: 10, title: "Track Ten", duration: "4:09" },
  { num: 11, title: "Track Eleven", duration: "3:47" },
  { num: 12, title: "Track Twelve", duration: "5:02" },
];

// Verify the back catalog list with BMLG (5 titles based on public discography).
// Streaming links for back catalog albums still needed from BMLG.
const DISCOGRAPHY = [
  { title: "The Hill", year: "2023", art: "/album_art/AaronLewis_TheHill.jpeg" },
  { title: "State I'm In", year: "2019", art: "/album_art/AaronLewis_TheStateImIn.jpg" },
  { title: "Sinner", year: "2016", art: "/album_art/AaronLewis_Sinner.jpg" },
  { title: "The Road", year: "2012", art: "/album_art/AaronLewis_TheRoad.jpg" },
  { title: "Town Line EP", year: "2011", art: "/album_art/AaronLewis_TownLine.jpeg" },
];

function FeaturedHero() {
  return (
    <section className="bg-bg pb-16 pt-0 md:px-8 md:pt-24 lg:pb-24 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Album poster */}
        <div className="lg:col-span-5">
          <Image
            src="/images/AaronLewis_AlbumCover_Vertical.jpg"
            alt="Aaron Lewis Give My Country Back album cover"
            width={1080}
            height={1440}
            priority
            className="w-full"
          />
        </div>

        {/* Content */}
        <div className="px-6 lg:col-span-7 lg:px-0">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
            The New Album
          </p>
          <h1 className="font-display text-5xl font-bold leading-none text-ink lg:text-7xl">
            {ALBUM_TITLE}
          </h1>
          <p className="mt-4 font-display text-xl font-semibold text-ink-muted">
            {availabilityCopy()}
          </p>
          <p className="mt-8 max-w-prose text-base text-ink lg:text-lg">
            <em>{ALBUM_TITLE}</em> is the latest record from Aaron Lewis.
            Twelve tracks built on acoustic backbone and lived-in honesty. The
            kind of country that sounds like the front porch sounds when no one
            is performing.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={PRESAVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ctaCopy()} (opens in new tab)`}
              className="inline-flex items-center rounded-[2px] bg-accent px-6 py-3 text-sm font-medium uppercase tracking-wide text-ink shadow-[inset_0_0_0_1px_rgba(188,180,166,0.2)] transition-colors hover:bg-accent-hover"
            >
              {ctaCopy()}
              <ArrowUpRight size={16} className="ml-2" />
            </a>
            <a
              href="#tracklist"
              className="inline-flex items-center rounded-[2px] border border-ink bg-transparent px-6 py-3 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-bg"
            >
              View Tracklist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tracklist() {
  return (
    <section id="tracklist" className="bg-bg px-6 pb-16 md:px-8 lg:pb-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 font-display text-3xl font-bold text-ink lg:text-4xl">
          Tracklist
        </h2>
        <div>
          {TRACKLIST.map((track) => (
            <div
              key={track.num}
              className="flex items-center border-b border-rule py-4"
            >
              <span className="w-10 shrink-0 text-sm font-medium text-ink-muted">
                {String(track.num).padStart(2, "0")}
              </span>
              <span className="text-base text-ink">{track.title}</span>
              <span className="ml-auto text-sm text-ink-muted">
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
      data-bg="elevated"
      className="bg-elevated px-6 py-20 md:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
          Catalog
        </p>
        <h2 className="mb-12 font-display text-4xl font-bold text-ink lg:text-5xl">
          Discography
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {DISCOGRAPHY.map((album) => (
            <div key={album.title}>
              <Image
                src={album.art}
                alt={`${album.title} album artwork`}
                width={600}
                height={600}
                className="aspect-square w-full object-cover"
              />
              <p className="mt-4 text-base font-medium text-ink">
                {album.title}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{album.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MusicPage() {
  return (
    <>
      <FeaturedHero />
      <Tracklist />
      <Discography />
      <EmailSignup />
    </>
  );
}
