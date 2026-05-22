import type { Metadata } from "next";
import { ShopifyCollection } from "@/components/site/ShopifyCollection";
import { EmailSignup } from "@/components/site/EmailSignup";
import { FadeIn } from "@/components/site/FadeIn";
import { breadcrumbSchema, BASE } from "@/lib/schema";

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: BASE },
  { name: "Merch", url: `${BASE}/gmcb-merch` },
]);

export const metadata: Metadata = {
  title: "Merch",
  description:
    "Shop official Aaron Lewis merch. Vinyl, apparel, and more from the Give My Country Back collection.",
  alternates: { canonical: "https://aaronlewismusic.com/gmcb-merch" },
  openGraph: {
    title: "Merch | Aaron Lewis",
    description:
      "Shop official Aaron Lewis merch. Vinyl, apparel, and more from the Give My Country Back collection.",
    url: "https://aaronlewismusic.com/gmcb-merch",
    siteName: "Aaron Lewis",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merch | Aaron Lewis",
    description:
      "Shop official Aaron Lewis merch. Vinyl, apparel, and more from the Give My Country Back collection.",
    images: ["/og-image.png"],
  },
};

function PageHeader() {
  return (
    <section className="bg-bg px-6 pb-12 pt-24 md:px-8 lg:pb-16 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-display text-6xl font-normal leading-none text-ink lg:text-7xl">
          Merch
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink">
          Official Give My Country Back merchandise.
        </p>
      </div>
    </section>
  );
}

export default function MerchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <FadeIn direction="none" duration={400}><PageHeader /></FadeIn>
      <FadeIn>
        <section className="bg-bg px-6 pb-20 md:px-8 lg:pb-32">
          <div className="mx-auto max-w-[1200px]">
            <ShopifyCollection />
          </div>
        </section>
      </FadeIn>
      <FadeIn><EmailSignup /></FadeIn>
    </>
  );
}
