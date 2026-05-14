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
      <h2 className="font-display text-4xl font-normal text-accent lg:text-5xl">
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
    <section className="relative min-h-[calc(100dvh-60px)] w-full bg-bg lg:min-h-[90vh]">
      {/* Desktop hero — portrait on left half, fading to black */}
      <div
        className="absolute inset-y-0 left-0 hidden w-[58%] md:block"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 60%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, black 0%, black 60%, transparent 100%)",
        }}
      >
        <Image
          src="/images/heros/AarowLewis_Hero.jpg"
          alt="Aaron Lewis portrait"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Mobile hero — same portrait as desktop */}
      <Image
        src="/images/heros/AarowLewis_Hero.jpg"
        alt="Aaron Lewis portrait"
        fill
        priority
        className="block object-cover object-[center_35%] md:hidden"
      />

      {/* Mobile bottom gradient overlay for text legibility */}
      <div
        className="absolute inset-x-0 bottom-0 top-[40%] md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(14,14,14,0.7) 60%, rgba(14,14,14,0.92) 100%)",
        }}
      />

      {/* Desktop bottom-edge gradient */}
      <div className="absolute inset-0 hidden bg-gradient-to-t from-bg to-transparent to-30% md:block" />

      {/* Content layer — lockup, availability, CTA */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-[10%] md:inset-y-0 md:left-[48%] md:right-0 md:flex md:items-center md:justify-center md:pb-0 md:px-8">
        <div className="w-full text-center md:max-w-[700px]">
          {/* Campaign lockup */}
          <a
            href={PRESAVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pre-save Give My Country Back (opens in new tab)"
            className="mx-auto inline-block transition-opacity duration-200 hover:opacity-90"
          >
            <Image
              src="/branding/ArrowLewis_GiveMyCountryBack_LogoText.png"
              alt="Aaron Lewis - Give My Country Back"
              width={1600}
              height={360}
              priority
              className="mx-auto w-full max-w-[85vw] sm:max-w-[75vw] md:max-w-[480px] lg:max-w-[560px] xl:max-w-[640px]"
            />
          </a>

          {/* Availability */}
          <p className="mt-4 text-3xl font-medium text-ink sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
            {availabilityCopy()}
          </p>

          {/* CTA */}
          <div className="mt-6">
            <a
              href={PRESAVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ctaCopy()} (opens in new tab)`}
              className="inline-flex w-full max-w-[260px] items-center justify-center rounded-[2px] bg-accent px-8 py-3 text-sm font-medium uppercase tracking-wide text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] transition-colors hover:bg-accent-hover md:w-auto md:max-w-none md:px-10 md:py-4 md:text-base lg:text-lg"
            >
              {ctaCopy()}
              <ArrowUpRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AlbumFeature() {
  return (
    <section data-bg="dark" className="bg-bg px-6 py-20 lg:px-8 lg:py-32">
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
          <h2 className="font-display text-5xl font-normal text-accent lg:text-7xl">
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
      data-bg="dark"
      className="bg-bg px-6 py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 font-display text-4xl font-normal text-accent lg:text-5xl">
          Tour
        </h2>

        <div role="region" aria-label="Tour Dates">
          <div
            className="bit-widget-initializer"
            data-artist-name="Aaron Lewis"
            data-display-local-dates="false"
            data-display-past-dates="false"
            data-auto-style="false"
            data-text-color="#BCB2A5"
            data-link-color="#B63D35"
            data-background-color="#0E0E0E"
            data-display-limit="10"
            data-display-lineup="false"
            data-display-play-my-city="true"
            data-separator-color="#2A2622"
          />
        </div>
        <Script
          src="https://widget.bandsintown.com/main.min.js"
          strategy="afterInteractive"
        />

        <div className="mt-10 flex justify-center">
          <Link
            href="/tour"
            className="inline-flex items-center rounded-[2px] border border-ink bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            View All Dates
            <ArrowUpRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function VideoPreview() {
  return (
    <section data-bg="dark" className="bg-bg px-6 py-20 lg:px-8 lg:py-32">
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
              <div className="relative aspect-video overflow-hidden border border-rule">
                <Image
                  src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={`${video.title} thumbnail`}
                  fill
                  className="object-cover"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-bg/0 transition-colors duration-200 group-hover:bg-bg/30" />
                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <Play size={48} className="fill-ink text-ink" />
                </div>
              </div>
              <p className="mt-3 text-base font-medium text-ink transition-colors duration-200 group-hover:text-accent">
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
      <TourPreview />
      <AlbumFeature />
      <VideoPreview />
      <EmailSignup />
    </>
  );
}
