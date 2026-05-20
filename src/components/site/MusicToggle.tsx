"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Selection = "album" | "single" | null;

const ALBUM_ROW_1 = [
  { label: "Spotify", href: "#" },
  { label: "Apple Music", href: "#" },
  { label: "Amazon Music", href: "#" },
  { label: "YouTube Music", href: "#" },
];

const ALBUM_ROW_2 = [
  { label: "iTunes", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Deezer", href: "#" },
];

const SINGLE_ROW_1 = [
  { label: "Spotify", href: "#" },
  { label: "Apple Music", href: "#" },
  { label: "Amazon Music", href: "#" },
  { label: "YouTube Music", href: "#" },
];

const SINGLE_ROW_2 = [
  { label: "iTunes", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Deezer", href: "#" },
];

const btnStyle = { fontFamily: "'Clarendon', serif" } as const;

export function MusicToggle() {
  const [selected, setSelected] = useState<Selection>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  function handleClick(item: "album" | "single") {
    const next = selected === item ? null : item;
    setSelected(next);
    if (next && buttonsRef.current) {
      setTimeout(() => {
        buttonsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 300);
    }
  }

  // Desktop card styles
  function cardStyleDesktop(item: "album" | "single") {
    if (!selected) return {};
    if (selected === item) {
      return {
        opacity: 1,
        transform: "scale(1.02)",
        transition: "all 500ms cubic-bezier(0.16, 1, 0.3, 1)",
      };
    }
    return {
      opacity: 0.3,
      filter: "brightness(0.5) saturate(0.5)",
      transform: "scale(0.97)",
      transition: "all 500ms cubic-bezier(0.16, 1, 0.3, 1)",
    };
  }

  function shadowStyle(item: "album" | "single") {
    if (selected === item) return "0 20px 60px rgba(0,0,0,0.7)";
    return "0 16px 48px rgba(0,0,0,0.5)";
  }

  // Mobile: which is the "other" item for the thumbnail
  const other: "album" | "single" = selected === "album" ? "single" : "album";

  return (
    <section className="bg-bg px-6 py-20 md:px-8">
      <div className="mx-auto max-w-[1200px]">

        {/* ── Desktop layout ── */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8">
          <div
            className="flex cursor-pointer flex-col items-center transition-transform duration-300 hover:scale-[1.03]"
            style={cardStyleDesktop("album")}
            onClick={() => handleClick("album")}
          >
            <Image
              src="/album_art/AarowLewis_GiveMyCountryBack_AlbumCover.jpg"
              alt="Give My Country Back album cover"
              width={1080}
              height={1080}
              className="w-full"
              style={{ boxShadow: shadowStyle("album") }}
            />
            <p
              className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent"
              style={btnStyle}
            >
              New Album
            </p>
            <p className="mt-1 font-display text-[1.1rem] text-white">
              Give My Country Back
            </p>
          </div>

          <div
            className="flex cursor-pointer flex-col items-center transition-transform duration-300 hover:scale-[1.03]"
            style={cardStyleDesktop("single")}
            onClick={() => handleClick("single")}
          >
            <Image
              src="/singles/AaronLewis_GiveMyCountryBack_Single.png"
              alt="Give My Country Back single cover"
              width={1080}
              height={1080}
              className="w-full"
              style={{ boxShadow: shadowStyle("single") }}
            />
            <p
              className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent"
              style={btnStyle}
            >
              New Single
            </p>
            <p className="mt-1 font-display text-[1.1rem] text-white">
              Give My Country Back
            </p>
          </div>
        </div>

        {/* ── Mobile layout — static, no toggle ── */}
        <div className="flex flex-col items-center gap-12 md:hidden">
          {/* Album */}
          <div className="flex w-[260px] flex-col items-center text-center">
            <Image
              src="/album_art/AarowLewis_GiveMyCountryBack_AlbumCover.jpg"
              alt="Give My Country Back album cover"
              width={540}
              height={540}
              className="w-full"
              style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.5)" }}
            />
            <p
              className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent"
              style={btnStyle}
            >
              New Album
            </p>
            <p className="mt-1 font-display text-[1.1rem] text-white">
              Give My Country Back
            </p>
            <p
              className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-ink-muted"
              style={btnStyle}
            >
              Pre-Save / Pre-Order
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {[...ALBUM_ROW_1, ...ALBUM_ROW_2].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ink px-5 py-2.5 text-center text-[0.65rem] font-bold uppercase tracking-[0.1em] text-bg transition-opacity hover:opacity-80"
                  style={btnStyle}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Single */}
          <div className="flex w-[260px] flex-col items-center text-center">
            <Image
              src="/singles/AaronLewis_GiveMyCountryBack_Single.png"
              alt="Give My Country Back single cover"
              width={540}
              height={540}
              className="w-full"
              style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.5)" }}
            />
            <p
              className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent"
              style={btnStyle}
            >
              New Single
            </p>
            <p className="mt-1 font-display text-[1.1rem] text-white">
              Give My Country Back
            </p>
            <p
              className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent"
              style={btnStyle}
            >
              Out Now
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {[...SINGLE_ROW_1, ...SINGLE_ROW_2].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ink px-5 py-2.5 text-center text-[0.65rem] font-bold uppercase tracking-[0.1em] text-bg transition-opacity hover:opacity-80"
                  style={btnStyle}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Button row — slides in when selected ── */}
        <div
          ref={buttonsRef}
          style={{
            maxHeight: selected ? 300 : 0,
            opacity: selected ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 400ms ease, opacity 400ms ease",
          }}
        >
          <div className="mt-10 flex flex-col items-center text-center">
            {selected === "album" && (
              <>
                <p
                  className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-ink-muted"
                  style={btnStyle}
                >
                  Pre-Save / Pre-Order
                </p>
                <div className="flex w-full flex-col gap-2 md:flex-row md:flex-wrap md:justify-center md:gap-3">
                  {ALBUM_ROW_1.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-ink px-7 py-3.5 text-center text-[0.7rem] font-bold uppercase tracking-[0.1em] text-bg transition-opacity hover:opacity-80 md:inline-block md:py-3"
                      style={btnStyle}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
                <div className="mt-2 flex w-full flex-col gap-2 md:mt-3 md:flex-row md:flex-wrap md:justify-center md:gap-3">
                  {ALBUM_ROW_2.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-ink px-7 py-3.5 text-center text-[0.7rem] font-bold uppercase tracking-[0.1em] text-bg transition-opacity hover:opacity-80 md:inline-block md:py-3"
                      style={btnStyle}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </>
            )}

            {selected === "single" && (
              <>
                <p
                  className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent"
                  style={btnStyle}
                >
                  Out Now
                </p>
                <div className="flex w-full flex-col gap-2 md:flex-row md:flex-wrap md:justify-center md:gap-3">
                  {SINGLE_ROW_1.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-ink px-7 py-3.5 text-center text-[0.7rem] font-bold uppercase tracking-[0.1em] text-bg transition-opacity hover:opacity-80 md:inline-block md:py-3"
                      style={btnStyle}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
                <div className="mt-2 flex w-full flex-col gap-2 md:mt-3 md:flex-row md:flex-wrap md:justify-center md:gap-3">
                  {SINGLE_ROW_2.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-ink px-7 py-3.5 text-center text-[0.7rem] font-bold uppercase tracking-[0.1em] text-bg transition-opacity hover:opacity-80 md:inline-block md:py-3"
                      style={btnStyle}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
