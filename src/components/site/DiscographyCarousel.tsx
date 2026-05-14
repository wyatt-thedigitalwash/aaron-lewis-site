// Custom 5-up coverflow carousel. No external carousel library.
// Center slide full-size, ±1 medium, ±2 smallest. Loop-aware positioning.
// Real-time drag following for touch and mouse, with snap-back on release.
// TODO: When BMLG provides streaming links, populate album objects with streamUrl.

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Album = {
  title: string;
  year: number;
  coverUrl?: string;
  streamUrl?: string;
};

/** Signed shortest-path distance around a loop. Returns -2..+2 for 5 items. */
function signedLoopDistance(i: number, center: number, total: number): number {
  let diff = i - center;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

const STYLE_CONFIG: Record<
  number,
  { scale: number; opacity: number; z: number }
> = {
  0: { scale: 1, opacity: 1, z: 30 },
  1: { scale: 0.75, opacity: 0.6, z: 20 },
  2: { scale: 0.55, opacity: 0.3, z: 10 },
};

function getStyle(absDist: number) {
  return STYLE_CONFIG[absDist] ?? { scale: 0, opacity: 0, z: 0 };
}

function getOffset(signed: number): string {
  switch (signed) {
    case 0:
      return "0px";
    case -1:
      return "calc(var(--inner-offset) * -1)";
    case 1:
      return "var(--inner-offset)";
    case -2:
      return "calc(var(--outer-offset) * -1)";
    case 2:
      return "var(--outer-offset)";
    default:
      return signed < 0
        ? "calc(var(--outer-offset) * -1.5)"
        : "calc(var(--outer-offset) * 1.5)";
  }
}

const SNAP_THRESHOLD = 50;
const CLICK_THRESHOLD = 5;

export function DiscographyCarousel({ albums }: { albums: Album[] }) {
  const total = albums.length;
  const [centerIndex, setCenterIndex] = useState(0);

  // Drag state — all tracking via refs to avoid stale closures.
  // Only isDragging and dragOffset are React state (they drive rendering).
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const dragLocked = useRef(false);
  const dragCancelled = useRef(false);
  const justDragged = useRef(false);
  const isTouchActive = useRef(false); // blocks mouse handlers during touch
  const dragOffsetRef = useRef(0); // mirror of dragOffset for sync reads

  const prev = useCallback(
    () => setCenterIndex((c) => (c - 1 + total) % total),
    [total]
  );
  const next = useCallback(
    () => setCenterIndex((c) => (c + 1) % total),
    [total]
  );

  // --- Drag end (single call per gesture) ---
  const handleDragEnd = useCallback(
    (finalOffset: number) => {
      if (Math.abs(finalOffset) > SNAP_THRESHOLD) {
        justDragged.current = true;
        if (finalOffset < 0) next();
        else prev();
        setTimeout(() => {
          justDragged.current = false;
        }, 100);
      } else if (Math.abs(finalOffset) >= CLICK_THRESHOLD) {
        justDragged.current = true;
        setTimeout(() => {
          justDragged.current = false;
        }, 100);
      }
      setIsDragging(false);
      setDragOffset(0);
      dragOffsetRef.current = 0;
    },
    [prev, next]
  );

  // --- Touch handlers ---
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isTouchActive.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartY.current = e.touches[0].clientY;
    dragLocked.current = false;
    dragCancelled.current = false;
    setIsDragging(true);
    setDragOffset(0);
    dragOffsetRef.current = 0;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (dragCancelled.current) return;

    const dx = e.touches[0].clientX - dragStartX.current;
    const dy = e.touches[0].clientY - dragStartY.current;

    if (!dragLocked.current) {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
        dragCancelled.current = true;
        setIsDragging(false);
        setDragOffset(0);
        dragOffsetRef.current = 0;
        return;
      }
      if (Math.abs(dx) > 10) {
        dragLocked.current = true;
      }
    }

    if (dragLocked.current) {
      setDragOffset(dx);
      dragOffsetRef.current = dx;
    }
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!dragCancelled.current) {
      handleDragEnd(dragOffsetRef.current);
    }
    // Reset touch flag after a tick so synthesized mouse events are blocked
    setTimeout(() => {
      isTouchActive.current = false;
    }, 300);
  }, [handleDragEnd]);

  // --- Mouse handlers ---
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    // Block mouse events that are synthesized from touch
    if (isTouchActive.current) return;
    e.preventDefault();
    dragStartX.current = e.clientX;
    dragLocked.current = true;
    dragCancelled.current = false;
    setIsDragging(true);
    setDragOffset(0);
    dragOffsetRef.current = 0;
  }, []);

  useEffect(() => {
    if (!isDragging || isTouchActive.current) return;

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - dragStartX.current;
      setDragOffset(dx);
      dragOffsetRef.current = dx;
    };

    const onMouseUp = () => {
      handleDragEnd(dragOffsetRef.current);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, handleDragEnd]);

  // --- Slide click ---
  const handleSlideClick = useCallback(
    (i: number, album: Album) => {
      if (justDragged.current) return;
      const signed = signedLoopDistance(i, centerIndex, total);
      if (signed === 0 && album.streamUrl) {
        window.open(album.streamUrl, "_blank", "noopener,noreferrer");
      } else if (signed !== 0) {
        setCenterIndex(i);
      }
    },
    [centerIndex, total]
  );

  // --- Keyboard ---
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    },
    [prev, next]
  );

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Discography"
      onKeyDown={onKeyDown}
      tabIndex={0}
      className={`carousel-coverflow relative mx-auto outline-none select-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
    >
      {/* Slide area */}
      <div
        className="relative mx-auto"
        style={{ height: "var(--carousel-h)" }}
      >
        {albums.map((album, i) => {
          const signed = signedLoopDistance(i, centerIndex, total);
          const absDist = Math.abs(signed);
          const { scale, opacity, z } = getStyle(absDist);
          const offset = getOffset(signed);
          const isActive = signed === 0;
          const dragPx = isDragging ? `${dragOffset}px` : "0px";

          return (
            <div
              key={album.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${album.title}, ${album.year}`}
              aria-current={isActive ? "true" : undefined}
              className="absolute top-0 left-1/2"
              style={{
                width: "var(--slide-w)",
                transform: `translateX(-50%) translateX(${offset}) translateX(${dragPx}) scale(${scale})`,
                opacity,
                zIndex: z,
                transition: isDragging
                  ? "none"
                  : "transform 400ms ease-out, opacity 400ms ease-out",
              }}
            >
              <button
                type="button"
                onClick={() => handleSlideClick(i, album)}
                className={`block w-full text-left ${
                  isDragging
                    ? ""
                    : isActive
                      ? album.streamUrl
                        ? "cursor-pointer"
                        : "cursor-default"
                      : "cursor-pointer"
                }`}
                aria-label={
                  isActive && album.streamUrl
                    ? `Play ${album.title}`
                    : isActive
                      ? album.title
                      : `Go to ${album.title}`
                }
              >
                {/* Cover */}
                <div className="aspect-square w-full">
                  {album.coverUrl ? (
                    <Image
                      src={album.coverUrl}
                      alt={`${album.title} album cover`}
                      width={600}
                      height={600}
                      className="pointer-events-none h-full w-full object-cover"
                      draggable={false}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-bg">
                      <span className="font-display text-lg text-ink-muted">
                        {album.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Metadata */}
                <div
                  className="mt-6"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: isDragging
                      ? "none"
                      : "opacity 400ms ease-out",
                  }}
                >
                  <p className="text-center text-lg font-medium text-ink">
                    {album.title}
                  </p>
                  <p className="mt-1 text-center text-base text-ink-muted">
                    {album.year}
                  </p>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Arrow buttons — hidden on mobile */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous album"
        className="absolute left-0 top-[calc(var(--carousel-h)/2)] z-40 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[2px] border border-rule bg-transparent text-ink-muted transition-colors hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:flex"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next album"
        className="absolute right-0 top-[calc(var(--carousel-h)/2)] z-40 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[2px] border border-rule bg-transparent text-ink-muted transition-colors hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:flex"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
