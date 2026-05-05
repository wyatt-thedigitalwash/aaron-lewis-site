// About page placeholders to flag with BMLG:
// - Portrait image (using campaign asset as placeholder)
// - Bio copy (agency-written, four paragraphs)
// - Pull quote (agency-written placeholder)
// - Career markers (based on public info, verify accuracy)

import type { Metadata } from "next";
import Image from "next/image";
import { EmailSignup } from "@/components/site/EmailSignup";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Aaron Lewis. From Staind frontman to country songwriter, the long road and the latest chapter.",
};

// Placeholder bio copy. Agency-written pending BMLG approval.
const BIO_PARAGRAPHS = [
  "Aaron Lewis came up the hard way. Before the country records, the gold plaques, and the tour buses with his name on the side, he was the voice of Staind, the New England rock band that sold tens of millions of albums and built a sound out of plain talk and heavy guitars.",
  "Country music was never a pivot. It was a return. Lewis grew up on his grandfather's farm in rural Vermont, raised on the Hag, Cash, Jones, and Haggard. When he stepped away from the rock world to make his first country record, it surprised the industry. It surprised no one who actually knew him.",
  "Across a run of solo records, including chart-topping releases on Big Machine Label Group, Lewis has built a body of work that reads like a working man's diary. Songs about land, family, faith, regret, and the way America keeps changing on people who never asked it to. He sings what he believes. The audience has rewarded him for it.",
  "Give My Country Back is the latest chapter. Twelve tracks recorded with the same acoustic backbone that built his solo catalog. No hedging. No compromise. Just the songs and the man who wrote them.",
];

// Placeholder pull quote. Replace with a real, BMLG-approved quote when available.
const PULL_QUOTE =
  "I don\u2019t write songs to chase a trend. I write what I see. If that lands with people, that\u2019s the win.";

// Placeholder career markers based on public information. Verify dates and details with BMLG.
const MARKERS = [
  { year: "1995", text: "Co-founds Staind in Springfield, Massachusetts" },
  {
    year: "2001",
    text: "\u201CIt\u2019s Been Awhile\u201D becomes one of the most-played rock songs of the year",
  },
  { year: "2011", text: "Releases Town Line, his first solo country EP" },
  {
    year: "2012",
    text: "The Road debuts at number one on the Billboard country albums chart",
  },
  {
    year: "2016",
    text: "Sinner debuts at number one on the Billboard country albums chart",
  },
  {
    year: "2019",
    text: "State I\u2019m In released, continuing the solo country chapter",
  },
  { year: "2023", text: "The Hill released" },
  { year: "2026", text: "Give My Country Back, the new album" },
];

function Hero() {
  return (
    <section className="bg-bg pb-12 pt-0 md:px-8 md:pt-24 lg:pb-20 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Portrait */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden md:border md:border-rule">
            <Image
              src="/images/AaronLewis_Image.jpeg"
              alt="Aaron Lewis portrait"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 lg:col-span-6 lg:px-0">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
            About
          </p>
          <h1 className="font-display text-5xl font-bold leading-none text-ink lg:text-7xl">
            Aaron Lewis
          </h1>
          <p className="mt-4 font-display text-2xl font-semibold text-ink-muted">
            Singer. Songwriter. Country, on his terms.
          </p>
        </div>
      </div>
    </section>
  );
}

function BioCopy() {
  return (
    <section className="bg-bg px-6 pb-20 md:px-8 lg:pb-32">
      <div className="mx-auto max-w-3xl">
        {BIO_PARAGRAPHS.map((text, i) => (
          <p
            key={i}
            className={`mb-6 text-lg leading-relaxed text-ink ${
              i === 0
                ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:leading-none first-letter:text-ink"
                : ""
            }`}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

function PullQuote() {
  return (
    <section
      data-bg="elevated"
      className="bg-elevated px-6 py-16 md:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Accent rule */}
        <div className="mx-auto mb-8 h-px w-10 bg-accent" />

        <blockquote>
          <p className="font-display text-3xl font-semibold italic leading-tight text-ink lg:text-4xl">
            &ldquo;{PULL_QUOTE}&rdquo;
          </p>
          <cite className="mt-8 block text-xs font-medium not-italic uppercase tracking-[0.2em] text-ink-muted">
            Aaron Lewis
          </cite>
        </blockquote>
      </div>
    </section>
  );
}

function CareerMarkers() {
  return (
    <section className="bg-bg px-6 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
          Career
        </p>
        <h2 className="mb-12 font-display text-4xl font-bold text-ink lg:text-5xl">
          Selected Markers
        </h2>
        <div>
          {MARKERS.map((marker) => (
            <div
              key={marker.year}
              className="flex border-b border-rule py-6"
            >
              <span className="w-24 shrink-0 font-display text-2xl font-bold text-ink">
                {marker.year}
              </span>
              <span className="text-base text-ink lg:text-lg">
                {marker.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Hero />
      <BioCopy />
      <PullQuote />
      <CareerMarkers />
      <EmailSignup />
    </>
  );
}
