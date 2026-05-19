import { PRESAVE_URL, ctaCopy } from "@/lib/campaign";

const PANELS = [
  {
    bg: "/singles/AaronLewis_GiveMyCountryBack_Single.png",
    bgPosition: "center",
    eyebrow: "New Single",
    title: "Give My Country Back",
    subtitle: null as string | null,
    cta: "Listen Now",
    href: "https://aaronlewis.ffm.to/givemycountryback.OWE",
  },
  {
    bg: "/album_art/AarowLewis_GiveMyCountryBack_AlbumCover.jpg",
    bgPosition: "center top",
    eyebrow: "New Album",
    title: "Give My Country Back",
    subtitle: null as string | null,
    cta: null as string | null,
    href: PRESAVE_URL,
  },
  {
    bg: "/images/heros/AaronLewis_OfficialHero.jpg",
    bgPosition: "center",
    eyebrow: "Official",
    title: "Merch Store",
    subtitle: null,
    cta: "Shop Now",
    href: "https://aaronlewismerch.myshopify.com",
  },
];

export function ActionRow() {
  return (
    <div className="mb-16 mt-8 md:mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {PANELS.map((panel, i) => {
          const subtitle = panel.subtitle ?? null;
          const cta = panel.cta ?? ctaCopy();

          return (
            <a
              key={i}
              href={panel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`action-panel group relative block aspect-square overflow-hidden ${
                i > 0 ? "md:border-l md:border-rule" : ""
              }`}
            >
              <div
                className="action-panel-bg absolute inset-0 transition-transform duration-500 ease-out"
                style={{
                  backgroundImage: `url(${panel.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: panel.bgPosition,
                }}
              />
              <div
                className="action-panel-gradient absolute inset-0 transition-all duration-300 ease-in-out"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.15) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 z-10 p-8">
                <p
                  className="mb-3 text-[0.875rem] font-bold uppercase tracking-[0.2em] text-accent md:text-[0.75rem]"
                  style={{ fontFamily: "'Clarendon', serif" }}
                >
                  {panel.eyebrow}
                </p>
                <p
                  className="mb-1 font-display text-[1.75rem] font-bold text-white md:text-[1.75rem]"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  {panel.title}
                </p>
                {subtitle && (
                  <p className="mb-2 text-sm italic text-white/60">
                    {subtitle}
                  </p>
                )}
                <p className="action-panel-cta text-base font-semibold text-white/80 md:text-sm">
                  {cta}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
