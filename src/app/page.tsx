import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Play } from "lucide-react";
import {
  ALBUM_TITLE,
  PRESAVE_URL,
  ctaCopy,
  availabilityCopy,
} from "@/lib/campaign";
import { breadcrumbSchema, BASE } from "@/lib/schema";
import { EmailSignup } from "@/components/site/EmailSignup";
import { FadeIn } from "@/components/site/FadeIn";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ActionRow } from "@/components/site/ActionRow";

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: BASE },
]);

export const metadata: Metadata = {
  title: { absolute: "Aaron Lewis | Official Site" },
  description:
    "The official site of Aaron Lewis. Tour dates, new music, videos, and merch from the country artist and Staind frontman.",
  alternates: { canonical: "https://aaronlewismusic.com" },
  openGraph: {
    title: "Aaron Lewis | Official Site",
    description:
      "The official site of Aaron Lewis. Tour dates, new music, videos, and merch from the country artist and Staind frontman.",
    url: "https://aaronlewismusic.com",
    siteName: "Aaron Lewis",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron Lewis | Official Site",
    description:
      "The official site of Aaron Lewis. Tour dates, new music, videos, and merch from the country artist and Staind frontman.",
    images: ["/og-image.png"],
  },
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
    </a>
  );
}

function SectionHeader({
  title,
  linkLabel,
  linkHref,
  external = false,
}: {
  title: string;
  linkLabel: string;
  linkHref: string;
  external?: boolean;
}) {
  const linkClass = "flex items-center gap-1 text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink";
  return (
    <div className="mb-10 flex items-baseline justify-between">
      <h2 className="font-display text-4xl font-normal text-accent lg:text-5xl">
        {title}
      </h2>
      {external ? (
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {linkLabel}
        </a>
      ) : (
        <Link href={linkHref} className={linkClass}>
          {linkLabel}
        </Link>
      )}
    </div>
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
            <em className="font-bold">{ALBUM_TITLE}</em>{" "}is a return to the sound that built him.
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
                  <Play size={48} className="fill-ink text-ink" aria-hidden="true" />
                </div>
              </div>
              <p className="mt-3 text-base font-medium text-ink transition-colors duration-200 group-hover:text-accent">
                {video.title}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/videos"
            className="inline-flex items-center rounded-[2px] border border-ink bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            View All Videos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <h1 className="sr-only">Aaron Lewis Official Site</h1>
      <HeroSlider />
      <ActionRow />
      <TourPreview />
      <VideoPreview />
      <EmailSignup />
    </>
  );
}
