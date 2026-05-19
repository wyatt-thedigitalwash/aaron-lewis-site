import type { Metadata } from "next";
import Image from "next/image";
import { availabilityCopy } from "@/lib/campaign";
import { FadeIn } from "@/components/site/FadeIn";

export const metadata: Metadata = {
  title: "Give My Country Back - Aaron Lewis",
  robots: "noindex, nofollow",
};

const STREAMING_ROW_1 = [
  { label: "Apple Music", href: "#" },
  { label: "Spotify", href: "#" },
  { label: "Amazon Music", href: "#" },
  { label: "YouTube Music", href: "#" },
];

const STREAMING_ROW_2 = [
  { label: "iTunes", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Deezer", href: "#" },
];

function StreamingButtons({ row1 = STREAMING_ROW_1, row2 = STREAMING_ROW_2 }: {
  row1?: typeof STREAMING_ROW_1;
  row2?: typeof STREAMING_ROW_2;
}) {
  const btnClass =
    "inline-block bg-ink px-7 py-3 text-center text-[0.7rem] font-bold uppercase tracking-[0.1em] text-bg transition-opacity hover:opacity-80";
  const btnStyle = { fontFamily: "'Clarendon', serif" };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap justify-center gap-3">
        {row1.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={btnClass}
            style={btnStyle}
          >
            {s.label}
          </a>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {row2.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={btnClass}
            style={btnStyle}
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function AlbumHero() {
  return (
    <section className="relative w-full bg-bg" style={{ height: "100dvh" }}>
      {/* Desktop hero — portrait on left half, fading to black */}
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

          <p className="mt-4 font-display text-[2rem] font-normal text-ink sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
            {availabilityCopy()}
          </p>

          <div className="mt-8">
            <StreamingButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

function SingleSection() {
  return (
    <section className="relative overflow-hidden bg-bg px-6 py-24 md:px-8 lg:py-32">
      {/* Ghost background — mobile */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: "url(/heroes/AarowLewis_SingleSplashPage_HeroMobile.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
          maskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "destination-in" as never,
        }}
      />
      {/* Ghost background — desktop */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: "url(/heroes/AarowLewis_SingleSplashPage_HeroDesktop.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
          maskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "destination-in" as never,
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center text-center">
        {/* Single cover */}
        <div className="relative aspect-square w-[340px] md:w-[500px]">
          <Image
            src="/singles/AaronLewis_GiveMyCountryBack_Single.png"
            alt="Give My Country Back single cover"
            fill
            className="object-cover"
            style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.5)" }}
          />
        </div>

        {/* Logo */}
        <div className="mt-8 w-[240px] md:w-[320px]">
          <Image
            src="/branding/AaronLewis_SingleGiveMyCountryBack_WhiteLogo.png"
            alt="Aaron Lewis - Give My Country Back"
            width={800}
            height={800}
            className="h-auto w-full"
          />
        </div>

        {/* Eyebrow */}
        <p
          className="mt-6 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-accent"
          style={{ fontFamily: "'Clarendon', serif" }}
        >
          New Single
        </p>

        {/* Streaming buttons */}
        <div className="mt-10">
          <StreamingButtons />
        </div>
      </div>
    </section>
  );
}

function MerchSection() {
  return (
    <section className="bg-elevated px-6 py-16 md:px-8">
      <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
        <p
          className="mb-4 text-[0.7rem] uppercase tracking-[0.25em] text-accent"
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

export default function GmcbPage() {
  return (
    <>
      <AlbumHero />
      <FadeIn>
        <SingleSection />
      </FadeIn>
      <FadeIn>
        <MerchSection />
      </FadeIn>
    </>
  );
}
