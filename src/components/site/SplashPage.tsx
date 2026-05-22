"use client";

import { useEffect } from "react";
import Image from "next/image";
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
      aria-label="New single announcement"
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
            "url(/heroes/AarowLewis_SingleSplashPage_HeroMobile.png)",
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
            "url(/heroes/AarowLewis_SingleSplashPage_HeroDesktop.jpg)",
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
              src="/singles/AaronLewis_GiveMyCountryBack_Single.png"
              alt="Give My Country Back single cover"
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
              className="relative h-auto w-[260px] min-[480px]:w-[300px] md:w-[clamp(340px,30vw,520px)]"
              style={{ animation: "splashFadeUp 600ms ease 500ms both" }}
            >
              <Image
                src="/branding/AaronLewis_SingleGiveMyCountryBack_WhiteLogo.png"
                alt="Aaron Lewis - Give My Country Back - New Single"
                width={800}
                height={800}
                className="h-auto w-full"
                priority
              />
            </div>

            {/* Buttons */}
            <div
              className="mt-10 flex flex-col items-center gap-4 min-[480px]:flex-row min-[480px]:justify-center min-[480px]:gap-4"
              style={{ animation: "splashFadeUp 600ms ease 800ms both" }}
            >
              <a
                href="https://aaronlewis.ffm.to/givemycountryback"
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
