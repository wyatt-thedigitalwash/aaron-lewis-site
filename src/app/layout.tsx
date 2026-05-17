import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Tracking } from "@/components/site/Tracking";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aaronlewismusic.com"),
  title: {
    default: "Aaron Lewis",
    template: "%s | Aaron Lewis",
  },
  description:
    "The official site of Aaron Lewis. New album available July 10.",
  icons: {
    icon: "/favicon.jpg",
  },
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
      "The official site of Aaron Lewis. New album available July 10.",
    images: ["/open-graph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
        <meta name="robots" content="noimageai" />
        <meta name="robots" content="noai" />
      </head>
      <body className="min-h-full flex flex-col">
        <Tracking />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P5H8FXB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
