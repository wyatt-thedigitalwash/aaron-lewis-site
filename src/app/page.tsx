import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowUpRight, Play } from "lucide-react";
import {
  ALBUM_TITLE,
  PRESAVE_URL,
  ctaCopy,
  availabilityCopy,
} from "@/lib/campaign";
import { EmailSignup } from "@/components/site/EmailSignup";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The official site of Aaron Lewis. New album available July 10.",
};

const PREVIEW_VIDEOS = [
  {
    title: "Aaron Lewis - Let's Go Fishing (Acoustic)",
    id: "VEpAWX1Q_Nc",
    url: "https://www.youtube.com/watch?v=VEpAWX1Q_Nc",
  },
  {
    title: "Aaron Lewis - Over Me (Lyric Video)",
    id: "p8G06wUl8bE",
    url: "https://www.youtube.com/watch?v=p8G06wUl8bE",
  },
  {
    title: "Aaron Lewis - Little More Mine (Lyric Video)",
    id: "b099xpDmThQ",
    url: "https://www.youtube.com/watch?v=b099xpDmThQ",
  },
];


function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={PRESAVE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${ctaCopy()} (opens in new tab)`}
      className={`inline-flex items-center gap-2 rounded-[2px] bg-accent px-8 py-3 font-sans text-base font-medium text-ink transition-colors hover:bg-accent-hover ${className}`}
    >
      {ctaCopy()}
      <ArrowUpRight size={16} />
    </a>
  );
}

function SectionHeader({
  title,
  linkLabel,
  linkHref,
}: {
  title: string;
  linkLabel: string;
  linkHref: string;
}) {
  return (
    <div className="mb-10 flex items-baseline justify-between">
      <h2 className="font-display text-3xl font-bold text-ink lg:text-4xl">
        {title}
      </h2>
      <Link
        href={linkHref}
        className="flex items-center gap-1 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
      >
        {linkLabel}
        <ArrowUpRight size={14} />
      </Link>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[calc(100dvh-60px)] w-full lg:min-h-[90vh]">
      {/* Desktop hero */}
      <Image
        src="/images/AaronLewis_HeroNew.png"
        alt="Aaron Lewis Give My Country Back album campaign"
        fill
        priority
        className="hidden object-cover object-right md:block"
      />
      {/* Mobile hero */}
      <Image
        src="/images/AaronLewis_Mobile_HeroNew.png"
        alt="Aaron Lewis Give My Country Back album campaign"
        fill
        priority
        className="block object-cover object-center md:hidden"
      />

      {/* Mobile overlay -- darker for readability */}
      <div className="absolute inset-0 bg-bg/40 lg:hidden" />

      {/* Desktop bottom-edge gradient only */}
      <div className="absolute inset-0 hidden bg-gradient-to-t from-bg to-transparent to-40% lg:block" />

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[calc(100dvh-60px)] items-end px-6 pb-16 lg:min-h-[90vh] lg:items-center lg:justify-end lg:px-8">
        <div className="w-full max-w-7xl mx-auto lg:text-right">
          <p className="text-sm font-medium uppercase tracking-wider text-ink-muted">
            New Album
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold leading-tight text-ink lg:text-7xl">
            {ALBUM_TITLE}
          </h1>
          <p className="mt-4 font-display text-2xl font-semibold text-ink">
            {availabilityCopy()}
          </p>
          <div className="mt-8 lg:flex lg:justify-end">
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function AlbumFeature() {
  return (
    <section data-bg="dark" className="bg-bg px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Album art -- left column */}
        <div className="lg:col-span-2">
          <Image
            src="/images/AaronLewis_AlbumCover_Vertical.jpg"
            alt="Aaron Lewis Give My Country Back album cover"
            width={1080}
            height={1920}
            className="w-full"
          />
        </div>

        {/* Copy -- right column */}
        <div className="lg:col-span-3">
          <p className="text-sm font-medium uppercase tracking-wider text-ink-muted">
            The Album
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink lg:text-6xl">
            {ALBUM_TITLE}
          </h2>
          <p className="mt-6 max-w-prose text-lg text-ink">
            The new record from Aaron Lewis. Recorded raw and unfiltered,{" "}
            <em>{ALBUM_TITLE}</em> is a return to the sound that built him.
            Twelve tracks that read like a working man&apos;s diary, written with
            a steady hand and an open jaw. No hedging. No compromise.
          </p>
          <div className="mt-8">
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function TourPreview() {
  return (
    <section
      data-bg="elevated"
      className="bg-elevated px-6 py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Tour"
          linkLabel="View All Dates"
          linkHref="/tour"
        />

        <div role="region" aria-label="Tour Dates">
          <div
            className="bit-widget-initializer"
            data-artist-name="Aaron Lewis"
            data-display-local-dates="false"
            data-display-past-dates="false"
            data-auto-style="false"
            data-text-color="#BCB4A6"
            data-link-color="#A02B28"
            data-background-color="#141414"
            data-display-limit="5"
            data-display-lineup="false"
            data-display-play-my-city="false"
            data-separator-color="#2A2620"
          />
        </div>
        <Script
          src="https://widget.bandsintown.com/main.min.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  );
}

function VideoPreview() {
  return (
    <section data-bg="dark" className="bg-bg px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Videos"
          linkLabel="View All Videos"
          linkHref="/videos"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {PREVIEW_VIDEOS.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${video.title} (opens in new tab)`}
              className="group block"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={`${video.title} thumbnail`}
                  fill
                  className="object-cover"
                />
                {/* Hover overlay with play icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-bg/30 opacity-0 transition-opacity group-hover:opacity-100">
                  <Play size={48} className="text-ink" />
                </div>
              </div>
              <p className="mt-3 text-base font-medium text-ink">
                {video.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      {/* On mobile: Tour first, then Album. On desktop: Album first, then Tour. */}
      <div className="flex flex-col md:contents">
        <div className="order-2 md:order-none"><AlbumFeature /></div>
        <div className="order-1 md:order-none"><TourPreview /></div>
      </div>
      <VideoPreview />
      <EmailSignup />
    </>
  );
}
