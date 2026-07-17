import Image from "next/image";
import { PRESAVE_URL, ctaCopy, availabilityCopy } from "@/lib/campaign";

export function HeroSlider() {
  return (
    <section className="relative w-full bg-bg" style={{ height: "calc(100dvh - var(--nav-h))" }}>
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
          <a
            href={PRESAVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen to Give My Country Back (opens in new tab)"
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

          <p className="mt-4 font-display text-[2rem] font-normal text-ink sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
            {availabilityCopy()}
          </p>

          <div className="mt-8">
            <a
              href={PRESAVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ctaCopy()} (opens in new tab)`}
              className="inline-block rounded-[2px] bg-accent px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] transition-colors hover:bg-accent-hover"
            >
              {ctaCopy()}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
