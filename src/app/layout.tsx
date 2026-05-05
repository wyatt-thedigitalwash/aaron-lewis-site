import type { Metadata } from "next";
// CSS variable kept as --font-zilla for backwards compatibility. Font family swapped from Zilla Slab to Domine.
import { Domine, Inter } from "next/font/google";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import "./globals.css";

const domine = Domine({
  variable: "--font-zilla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aaronlewismusic.com"),
  title: {
    default: "Aaron Lewis",
    template: "%s | Aaron Lewis",
  },
  description:
    "The official site of Aaron Lewis. New album available July 10.",
  openGraph: {
    title: "Aaron Lewis",
    description:
      "The official site of Aaron Lewis. New album available July 10.",
    // TODO: Replace with dedicated 1200x630 OG image when BMLG provides one. AaronLewis_Hero.jpg used as fallback.
    images: ["/images/AaronLewis_Hero.jpg"],
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
    <html
      lang="en"
      className={`${domine.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
