"use client";

export function HeroCta() {
  return (
    <button
      type="button"
      onClick={() => {
        document.getElementById("vinyl")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="cursor-pointer bg-accent px-12 py-3.5 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-accent-hover"
      style={{ fontFamily: "'Clarendon', serif", borderRadius: 0, border: "none" }}
    >
      Available Now
    </button>
  );
}
