import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/site/FadeIn";
import { EmailSignup } from "@/components/site/EmailSignup";
import { CountdownTimer, PreOrderButton } from "@/components/site/CountdownTimer";

export const metadata: Metadata = {
  title: "Give My Country Back - Aaron Lewis",
  robots: "noindex, nofollow",
};

/* ─── Section 1: Hero with Countdown ─── */

function HeroSection() {
  return (
    <section className="relative w-full bg-bg" style={{ height: "100dvh" }}>
      {/* Desktop hero — portrait left, fading right */}
      <div
        className="absolute inset-y-0 left-0 hidden w-[58%] md:block"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 40%, transparent 90%)",
          maskImage:
            "linear-gradient(to right, black 0%, black 40%, transparent 90%)",
        }}
      >
        <Image
          src="/heroes/AarowLewis_GiveMyCountryBack_Album_HeroDesktop.jpg"
          alt="Aaron Lewis Give My Country Back"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Mobile hero */}
      <Image
        src="/heroes/AarowLewis_GiveMyCountryBack_Album_HeroMobile.jpg"
        alt="Aaron Lewis Give My Country Back"
        fill
        priority
        className="block object-cover object-[center_35%] md:hidden"
      />

      {/* Mobile bottom gradient */}
      <div
        className="absolute inset-x-0 bottom-0 top-[40%] md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(14,14,14,0.7) 60%, rgba(14,14,14,1) 100%)",
        }}
      />

      {/* Desktop bottom-edge gradient */}
      <div className="absolute inset-0 hidden bg-gradient-to-t from-bg to-transparent to-30% md:block" />

      {/* Content layer */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-[10%] md:inset-y-0 md:left-[48%] md:right-0 md:flex md:items-center md:justify-center md:pb-0 md:px-8">
        <div className="w-full text-center md:max-w-[700px]">
          <Image
            src="/branding/ArrowLewis_GiveMyCountryBack_LogoText.png"
            alt="Aaron Lewis - Give My Country Back"
            width={1600}
            height={360}
            priority
            className="mx-auto w-full max-w-[85vw] sm:max-w-[75vw] md:max-w-[480px] lg:max-w-[560px] xl:max-w-[640px]"
          />

          <div className="mt-8">
            <CountdownTimer />
            <PreOrderButton />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: Vinyl Variations ─── */

const VINYL_CARDS = [
  {
    image: "/merch/vinyls/StandardRetail_Black.png",
    title: "Black Vinyl",
    subtitle: "Veteran-Designed Insert",
    href: "#",
  },
  {
    image: "/merch/vinyls/D2C_TranslucentRedBlackSwirls.png",
    title: "Translucent Red & Black Swirls Vinyl",
    subtitle: "D2C Exclusive",
    href: "#",
  },
  {
    image: "/merch/vinyls/D2C_RedWhiteBlueSplatter.png",
    title: "Red, White & Blue Splatter Vinyl",
    subtitle: "D2C Exclusive",
    href: "#",
  },
];

function VinylSection() {
  return (
    <section id="vinyl" className="bg-bg px-6 py-20 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="text-center">
          <p
            className="font-display leading-none text-accent"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            Album Out July 17th
          </p>
          <p
            className="mt-2 font-display text-ink"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            Pre-Order Your Exclusive Vinyl Now
          </p>
          <div
            className="mx-auto mt-6 mb-12"
            style={{ width: 80, height: 1, backgroundColor: "var(--rule)" }}
          />
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {VINYL_CARDS.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full scale-125 transition-transform duration-500 group-hover:scale-[1.28]"
                />
              </div>

              {/* Content */}
              <div className="-mt-4 px-5 pb-5 md:mt-0 md:pt-2">
                <p className="font-display text-[1.1rem] text-white text-center md:text-left">
                  {card.title}
                </p>

                {/* Button */}
                <div
                  className="mt-4 w-full bg-accent py-3 text-center text-[0.75rem] font-bold uppercase tracking-[0.12em] text-white transition-colors group-hover:bg-accent-hover"
                  style={{ fontFamily: "'Clarendon', serif" }}
                >
                  Pre-Order
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://aaronlewis.ffm.to/givemycountrybackalbum.TFU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-ink bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            Pre-Order Other Vinyl Variants
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Album Pre-Save (split layout) ─── */

const ALBUM_BUTTONS = [
  { label: "Download on iTunes", href: "#" },
  { label: "Pre-Save on Spotify", href: "#" },
  { label: "Pre-Add on Apple Music", href: "#" },
  { label: "Pre-Save on Amazon Music", href: "#" },
  { label: "Pre-Save on YouTube Music", href: "#" },
];

const SINGLE_BUTTONS = [
  { label: "Spotify", href: "#" },
  { label: "Apple Music", href: "#" },
  { label: "Amazon Music", href: "#" },
  { label: "YouTube Music", href: "#" },
  { label: "iTunes", href: "#" },
  { label: "YouTube", href: "#" },
];

const dspBtnStyle = { fontFamily: "'Clarendon', serif" } as const;

function DspButtons({ buttons }: { buttons: { label: string; href: string }[] }) {
  return (
    <div className="flex w-full flex-col gap-2.5">
      {buttons.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-ink text-center text-[0.8rem] font-bold uppercase tracking-[0.1em] text-bg transition-opacity hover:opacity-80"
          style={{ ...dspBtnStyle, padding: "16px 36px" }}
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}

function AlbumPreSaveSection() {
  return (
    <section className="bg-bg px-6 py-20 md:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center md:flex-row md:items-center">
        {/* Left: Album art */}
        <div className="flex w-full justify-center md:w-1/2">
          <Image
            src="/album_art/AarowLewis_GiveMyCountryBack_AlbumCover.jpg"
            alt="Aaron Lewis Give My Country Back album cover"
            width={1080}
            height={1080}
            className="w-full md:w-full"
            style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.5)" }}
          />
        </div>

        {/* Right: Buttons only */}
        <div className="mt-10 w-full md:mt-0 md:w-1/2 md:pl-[4vw]">
          <DspButtons buttons={ALBUM_BUTTONS} />
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: Single Streaming (split layout, reversed) ─── */

function SingleSection() {
  return (
    <section className="bg-bg px-6 py-20 md:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center md:flex-row-reverse">
        {/* Right: Single art */}
        <div className="flex w-full justify-center md:w-1/2">
          <Image
            src="/singles/AaronLewis_GiveMyCountryBack_Single.png"
            alt="Give My Country Back single cover"
            width={1080}
            height={1080}
            className="w-full md:w-full"
            style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.5)" }}
          />
        </div>

        {/* Left: Content */}
        <div className="mt-10 flex w-full flex-col items-center text-center md:items-start md:text-left md:mt-0 md:w-1/2 md:pr-[4vw]">
          <p
            className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-accent"
            style={dspBtnStyle}
          >
            Single
          </p>
          <p
            className="mt-3 font-display text-accent"
            style={{ fontSize: "clamp(2.5rem, 4vw, 3.25rem)" }}
          >
            Give My Country Back
          </p>
          <p
            className="mt-2 font-display text-ink"
            style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
          >
            Listen Now
          </p>
          <div className="mt-8 w-full">
            <DspButtons buttons={SINGLE_BUTTONS} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: Merch Placeholder ─── */

function MerchSection() {
  return (
    <section className="bg-elevated px-6 py-16 md:px-8">
      <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
        <p
          className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-accent"
          style={{ fontFamily: "'Clarendon', serif" }}
        >
          Merch
        </p>
        <p className="font-display text-3xl text-ink md:text-4xl">
          Coming Soon
        </p>
      </div>
    </section>
  );
}

/* ─── Page ─── */

export default function GmcbPage() {
  return (
    <>
      <HeroSection />
      <FadeIn>
        <VinylSection />
      </FadeIn>
      <FadeIn>
        <AlbumPreSaveSection />
      </FadeIn>
      <FadeIn>
        <SingleSection />
      </FadeIn>
      <FadeIn>
        <MerchSection />
      </FadeIn>
      <FadeIn>
        <EmailSignup />
      </FadeIn>
    </>
  );
}
