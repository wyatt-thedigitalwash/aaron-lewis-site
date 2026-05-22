import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Tracking } from "@/components/site/Tracking";
import { SplashGate } from "@/components/site/SplashGate";
import { musicGroupSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aaronlewismusic.com"),
  title: {
    default: "Aaron Lewis",
    template: "%s | Aaron Lewis",
  },
  description:
    "The official site of Aaron Lewis. Tour dates, new music, videos, and merch from the country artist and Staind frontman.",
  icons: {
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Aaron Lewis",
    description:
      "The official site of Aaron Lewis. Tour dates, new music, videos, and merch from the country artist and Staind frontman.",
    siteName: "Aaron Lewis",
    images: [{ url: "/og-image.png", width: 1200, height: 630, type: "image/png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/sas4nlb.css" />
        <meta name="theme-color" content="#0E0E0E" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="robots" content="noimageai" />
        <meta name="robots" content="noai" />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroupSchema) }}
        />
        <Tracking />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P5H8FXB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
          {/* Meta Pixel noscript fallback */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1858545644702596&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <SplashGate>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </SplashGate>
      </body>
    </html>
  );
}
