// Full tracking stack matching aaronlewismusic.com production tag-for-tag.
// GTM-P5H8FXB, Google Ads, GA4 (3 properties), Universal Analytics,
// Meta Pixel (3 IDs), Audigent/Hadron, Evidon cookie consent.
// All external scripts use lazyOnload to avoid blocking the main thread during initial interaction.

import Script from "next/script";

export function Tracking() {
  return (
    <>
      {/* 1. Initialize dataLayer before GTM loads (just variable assignments, no network) */}
      <Script id="datalayer-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'waitForPageviewEvent': true,
            'platform': 'Grand Royal'
          });
        `}
      </Script>

      {/* 2. Initialize Audigent dataLayer and geo (just variable assignments, no network) */}
      <Script id="aud-datalayer-init" strategy="beforeInteractive">
        {`
          window.audDataLayer = window.audDataLayer || [];
          window.PUSH_GLOBAL = { geo_ip_country: 'US' };
        `}
      </Script>

      {/* 3. GTM loader — afterInteractive so it fires before lazyOnload scripts */}
      <Script id="gtm-loader" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P5H8FXB');
        `}
      </Script>

      {/* 4a. Google Ads conversion (existing) */}
      <Script
        id="google-ads-conversion"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/destination?id=AW-659932453&cx=c&gtm=4e65d0"
      />

      {/* 4b. Google Ads gtag (AW-17574370157) */}
      <Script
        id="google-ads-new"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17574370157"
      />
      <Script id="google-ads-new-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17574370157');
        `}
      </Script>

      {/* 5. GA4 properties */}
      <Script
        id="ga4-property-1"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-1H4SDH1258&cx=c&gtm=4e65d0"
      />
      <Script
        id="ga4-property-2"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-FVWZ0RM4DH&l=audDataLayer"
      />

      {/* 6. Universal Analytics legacy */}
      <Script
        id="universal-analytics"
        strategy="lazyOnload"
        src="https://www.google-analytics.com/analytics.js"
      />

      {/* 7. Meta Pixel base library */}
      <Script
        id="meta-pixel-base"
        strategy="lazyOnload"
        src="https://connect.facebook.net/en_US/fbevents.js"
      />

      {/* 8. Meta Pixel initialization (3 pixel IDs) */}
      <Script id="meta-pixel-init" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1610676822579054');
          fbq('init', '327646454344180');
          fbq('init', '223455138793586');
          fbq('init', '1858545644702596');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* 9. TikTok Pixel */}
      <Script id="tiktok-pixel" strategy="afterInteractive">
        {`
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
            var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
            ttq.load('D26CTKBC77U110BN94C0');
            ttq.page();
          }(window, document, 'ttq');
        `}
      </Script>

      {/* 10. Audigent / Hadron */}

      <Script
        id="hadron-base"
        strategy="lazyOnload"
        src="https://cdn.hadronid.net/hadron.js?partner_id=139&sync=1"
      />
      <Script
        id="audigent-match"
        strategy="lazyOnload"
        src="https://a.ad.gt/api/v1/u/matches/139"
      />
      <Script
        id="audigent-partner"
        strategy="lazyOnload"
        src="https://p.ad.gt/api/v1/p/139"
      />

      {/* 11. Evidon cookie consent (5 scripts, order matters) */}
      <Script
        id="evidon-translations"
        strategy="lazyOnload"
        src="https://c.evidon.com/sitenotice/7155/translations/en-122142.js"
        charSet="utf-8"
      />
      <Script
        id="evidon-settings"
        strategy="lazyOnload"
        src="https://c.evidon.com/sitenotice/7155/aaronlewismusic/settings.js"
        charSet="utf-8"
      />
      <Script
        id="evidon-themes"
        strategy="lazyOnload"
        src="https://c.evidon.com/sitenotice/7155/snthemes.js"
        charSet="utf-8"
      />
      <Script
        id="evidon-location"
        strategy="lazyOnload"
        src="https://c.evidon.com/geo/country.js"
        charSet="utf-8"
      />
      <Script
        id="evidon-notice"
        strategy="lazyOnload"
        src="https://c.evidon.com/sitenotice/evidon-sitenotice-tag.js"
        charSet="utf-8"
      />
    </>
  );
}
