import type { WithContext, MusicGroup, BreadcrumbList } from "schema-dts";

const BASE_URL = "https://aaronlewismusic.com";

export const musicGroupSchema: WithContext<MusicGroup> = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Aaron Lewis",
  url: BASE_URL,
  description:
    "Aaron Lewis is a country music artist and the lead vocalist of Staind. Known for albums like The Road, Sinner, The Hill, and Give My Country Back.",
  genre: ["Country", "Country Rock"],
  sameAs: [
    "https://www.facebook.com/AaronLewisMusic",
    "https://www.instagram.com/aaronlewismusic",
    "https://twitter.com/aaronlewismusic",
    "https://open.spotify.com/artist/2t2XKfWKLXpFIjFwy1K8wx",
    "https://www.youtube.com/user/AaronLewisTV",
    "https://itunes.apple.com/us/artist/aaron-lewis/413422387",
    "https://www.amazon.com/Aaron-Lewis/e/B004LUW7ME",
  ],
  image: `${BASE_URL}/og-image.png`,
};

export function breadcrumbSchema(
  items: { name: string; url: string }[]
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const BASE = BASE_URL;
