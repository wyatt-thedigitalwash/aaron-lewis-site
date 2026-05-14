// Bandsintown widget pulls dates dynamically from Aaron Lewis's Bandsintown artist page.
// Verify that Aaron Lewis's Bandsintown artist profile is set up and current dates are loaded there.
// If the widget renders empty, the issue is upstream at Bandsintown, not in this code.

import type { Metadata } from "next";
import Script from "next/script";
import { EmailSignup } from "@/components/site/EmailSignup";

export const metadata: Metadata = {
  title: "Tour",
  description: "Aaron Lewis tour dates and tickets.",
};

function PageHeader() {
  return (
    <section className="bg-bg px-6 pb-12 pt-24 md:px-8 lg:pb-16 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-display text-6xl font-normal leading-none text-ink lg:text-7xl">
          Tour
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink">
          Catch Aaron live. Tickets, venues, and dates below.
        </p>
      </div>
    </section>
  );
}

function BandsintownWidget() {
  return (
    <section className="bg-bg px-6 pb-20 md:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <div role="region" aria-label="Tour Dates">
          <div
            className="bit-widget-initializer"
            data-artist-name="Aaron Lewis"
            data-display-local-dates="false"
            data-display-past-dates="false"
            data-auto-style="false"
            data-text-color="#BCB2A5"
            data-link-color="#B63D35"
            data-background-color="#0E0E0E"
            data-display-limit="all"
            data-display-lineup="false"
            data-display-play-my-city="false"
            data-separator-color="#2A2622"
          />
        </div>
        <Script
          src="https://widget.bandsintown.com/main.min.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  );
}

export default function TourPage() {
  return (
    <>
      <PageHeader />
      <BandsintownWidget />
      <EmailSignup
        heading="Get tour announcements first."
        subhead="Sign up below to be the first to know when new dates are announced."
      />
    </>
  );
}
