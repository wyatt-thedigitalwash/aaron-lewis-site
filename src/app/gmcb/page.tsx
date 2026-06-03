import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/site/FadeIn";
import { EmailSignup } from "@/components/site/EmailSignup";
import { CountdownTimer, PreOrderButton } from "@/components/site/CountdownTimer";
import { ShopifyCollection } from "@/components/site/ShopifyCollection";

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

        <ShopifyCollection collectionId="336832987325" />
      </div>
    </section>
  );
}

/* ─── Section 3: Album Pre-Save (split layout) ─── */

const ALBUM_BUTTONS = [
  { label: "Download on iTunes", href: "https://aaronlewis.ffm.to/givemycountryback-al" },
  { label: "Pre-Save on Spotify", href: "https://aaronlewis.ffm.to/givemycountryback-al" },
  { label: "Pre-Add on Apple Music", href: "https://aaronlewis.ffm.to/givemycountryback-al" },
  { label: "Pre-Save on Amazon Music", href: "https://aaronlewis.ffm.to/givemycountryback-al" },
  { label: "Pre-Save on YouTube Music", href: "https://aaronlewis.ffm.to/givemycountryback-al" },
];

const SINGLE_BUTTONS = [
  { label: "Spotify", href: "https://open.spotify.com/track/2FL6eDT5elqDFPCo0XnkHo" },
  { label: "Apple Music", href: "https://music.apple.com/us/song/give-my-country-back/6767604468" },
  { label: "Amazon Music", href: "https://music.amazon.com/tracks/B0H12S6DHB/?ref=dm_ff_amazonmusic_3p&tag=featurefm-20" },
  { label: "YouTube Music", href: "https://music.youtube.com/watch?v=M9Wo_In0X6U" },
  { label: "iTunes", href: "https://geo.music.apple.com/us/album/give-my-country-back/6767604325?app=itunes&ls=1" },
  { label: "YouTube", href: "https://www.youtube.com/watch?v=M9Wo_In0X6U" },
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
        <section className="bg-elevated px-6 py-20 md:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ShopifyCollection collectionId="336833052861" />
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <EmailSignup />
      </FadeIn>
    </>
  );
}
