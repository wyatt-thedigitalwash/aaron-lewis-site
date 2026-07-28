"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRESAVE_URL } from "@/lib/campaign";
import { useSplash } from "./SplashGate";

export function SplashPage() {
  const { active, closing, dismiss } = useSplash();

  // Body scroll lock
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="New album announcement"
      className="fixed inset-0 z-[9999]"
      style={{
        backgroundColor: "#1a1a1a",
        opacity: closing ? 0 : 1,
        transition: "opacity 500ms ease",
      }}
    >
      {/* Ghost background image — mobile */}
      <div
        aria-hidden="true"
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage:
            "url(/heroes/AarowLewis_GiveMyCountryBack_Album_HeroMobile.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          transform: "scale(1.1)",
        }}
      />
      {/* Ghost background image — desktop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "url(/heroes/AarowLewis_GiveMyCountryBack_Album_HeroDesktop.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          transform: "scale(1.1)",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(196,75,63,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Split layout */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 md:flex-row md:px-0">
        {/* LEFT: Album art */}
        <div className="flex w-full items-center justify-center md:h-full md:w-1/2">
          <div
            className="splashCover relative aspect-square w-[300px] min-[400px]:w-[320px] md:w-[65%] md:max-w-[480px]"
            style={{
              animation:
                "splashScale 700ms cubic-bezier(0.16, 1, 0.3, 1) 300ms both",
            }}
          >
            <Image
              src="/album_art/AarowLewis_GiveMyCountryBack_AlbumCover.jpg"
              alt="Give My Country Back album cover"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT: Text + CTAs */}
        <div className="flex w-full items-center justify-center pt-8 md:h-full md:w-1/2 md:justify-start md:pl-[4vw] md:pt-0">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div
              className="relative h-auto w-[280px] min-[480px]:w-[340px] md:w-[clamp(360px,32vw,540px)]"
              style={{ animation: "splashFadeUp 600ms ease 500ms both" }}
            >
              <Image
                src="/branding/ArrowLewis_GiveMyCountryBack_LogoText.png"
                alt="Aaron Lewis - Give My Country Back"
                width={1600}
                height={360}
                className="h-auto w-full"
                priority
              />
            </div>

            <p
              className="mt-4 font-display text-2xl text-ink min-[480px]:text-3xl md:text-[clamp(1.75rem,2.5vw,2.5rem)]"
              style={{ animation: "splashFadeUp 600ms ease 650ms both" }}
            >
              New Album Out Now
            </p>

            {/* Buttons */}
            <div
              className="mt-10 flex flex-col items-center gap-4 min-[480px]:flex-row min-[480px]:justify-center min-[480px]:gap-4"
              style={{ animation: "splashFadeUp 600ms ease 800ms both" }}
            >
              <a
                href={PRESAVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-[480px]:w-auto bg-accent px-10 py-3.5 text-center text-[0.75rem] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-accent-hover"
                style={{ fontFamily: "'Clarendon', serif" }}
              >
                Listen Now
              </a>
              <button
                type="button"
                onClick={dismiss}
                className="w-full min-[480px]:w-auto cursor-pointer bg-transparent px-10 py-3.5 text-center text-[0.75rem] font-bold uppercase tracking-[0.15em] transition-colors duration-200"
                style={{
                  fontFamily: "'Clarendon', serif",
                  color: "rgba(255,255,255,0.5)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                }}
              >
                Enter Site
              </button>
            </div>

            {/* Arbitration / class-action notice, directly under the entry
                buttons so no visitor can claim they had no notice of it. */}
            <p
              className="mt-5 max-w-[320px] text-center text-[11px] leading-relaxed tracking-[0.3px] text-white/55 min-[480px]:max-w-[440px]"
              style={{ animation: "splashFadeUp 600ms ease 950ms both" }}
            >
              By entering, you consent to our{" "}
              <Link
                href="/legal/terms"
                className="font-semibold text-white/85 underline decoration-white/40 underline-offset-2 transition-colors hover:text-accent"
              >
                Terms &amp; Conditions
              </Link>
              , including{" "}
              <Link
                href="/legal/terms#section-17"
                className="font-semibold text-white/85 underline decoration-white/40 underline-offset-2 transition-colors hover:text-accent"
              >
                binding arbitration
              </Link>{" "}
              and a{" "}
              <Link
                href="/legal/terms#class-action-waiver"
                className="font-semibold text-white/85 underline decoration-white/40 underline-offset-2 transition-colors hover:text-accent"
              >
                waiver of class action rights
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes splashScale {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes splashFadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .splashCover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
          transition: box-shadow 300ms ease;
        }
        .splashCover:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 120px rgba(196,75,63,0.18);
        }
      `}</style>
    </div>
  );
}
