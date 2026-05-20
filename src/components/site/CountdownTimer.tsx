"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-07-17T00:00:00-05:00").getTime();

function getTimeLeft() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function PreOrderButton() {
  return (
    <button
      type="button"
      onClick={() => {
        document.getElementById("vinyl")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="mt-10 cursor-pointer bg-accent px-12 py-3.5 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-accent-hover"
      style={{ fontFamily: "'Clarendon', serif", borderRadius: 0, border: "none" }}
    >
      Pre-Order Now
    </button>
  );
}

export function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) {
    return (
      <p
        className="text-center font-display text-[clamp(1.5rem,3vw,2.5rem)] text-white"
      >
        Available Now
      </p>
    );
  }

  const units = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center">
            <span className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-ink">
              {pad(u.value)}
            </span>
            <span
              className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-ink-muted"
              style={{ fontFamily: "'Clarendon', serif" }}
            >
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-none text-ink-muted">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
