# Aaron Lewis Website Reference

## Project
- Client: Big Machine Label Group
- Artist: Aaron Lewis
- Album: Give My Country Back (release date July 10, 2026)
- Domain: aaronlewismusic.com (rebuild, replacing WordPress)
- Stack: Next.js 16, TypeScript, Tailwind, App Router, src/ directory
- Deployment: Vercel
- Email: Resend (transactional only, newsletter form is non-functional UI placeholder)

## Campaign State
- Current state: PRE_SAVE (album not yet released)
- On release day, change CAMPAIGN_STATE constant from "PRE_SAVE" to "AVAILABLE_NOW"
- Pre-save CTA copy: "Pre-Save Now"
- Available CTA copy: "Listen Now"
- Pre-save URL placeholder: https://aaronlewis.lnk.to/TheHillWE (BMLG to provide correct GMCB link)

Define this as a TypeScript constant in `src/lib/campaign.ts` that the rest of the site reads from. Single source of truth.

## Brand Colors (CSS variables in globals.css)
```
--bg: #0A0A0A
--bg-elevated: #141414
--ink: #D9CFB8
--ink-muted: #8A8275
--accent: #A8302E
--accent-hover: #8F2725
--rule: #2A2620
```

Set body background to `--bg` and body text to `--ink`.

## Typography
- Display: Domine from Google Fonts, weights 400, 500, 600, and 700, used for h1-h4 and CTAs
- Variable name in code is --font-zilla, kept for compatibility. Font family is Domine.
- Body: Inter from Google Fonts, weights 400 and 500, used for body, nav, forms
- Load both via `next/font/google` in `src/app/layout.tsx`
- Tailwind config: extend fontFamily with `display: ['var(--font-zilla)']` and `sans: ['var(--font-inter)']`
- Default body uses `sans`, h1-h4 use `display` via Tailwind classes

## Tone of Voice Rules
- Short declarative sentences
- No marketing exclamations (no "Don't miss out", "Stream now", "Get yours today")
- Album titles in italics, song titles in quotes
- No em dashes anywhere
- No emoji
- Sentence case for body, title case for headings

## Anti-patterns Forbidden on This Build
- Centered hero with subtitle and feature grid below
- Pill buttons or rounded buttons over 2px radius
- Gradient backgrounds or gradient text
- Lucide icons in colored circles
- 3-column "Why Aaron" or "Featured" card grids
- Auto-playing video or audio
- Particle effects, animated text reveals, parallax

## Visual References
- Sturgill Simpson and Tyler Childers album sites (image-forward, dark, asymmetric)
- Tour poster layouts (type and image, no ornament)
- Big Machine artist sites for the rock/country crossover house style
- Vinyl sleeve typography hierarchy

## Site Architecture
Pages:
- `/` (Home)
- `/tour` (Tour, Bandsintown widget)
- `/music` (Music, GMCB prominent + back catalog)
- `/videos` (24-video YouTube grid, note: rename from /video on old site)
- `/about` (Bio)

External links:
- Merch: https://aaronlewismerch.myshopify.com/
- The Hill Shop: https://shop.aaronlewismusic.com/

## Header
- Script "Aaron Lewis" logotype on the left, links home
- Nav right: Home, Tour, Music, Videos, About, Merch (external, with small external arrow), The Hill Shop (external, with small external arrow)
- Pre-save CTA button far right (uses CAMPAIGN_STATE to render correct copy)
- Mobile: hamburger drawer, full-screen overlay, black bg, bone text

## Footer (above footer copyright section)

### Email Signup Section (global, sits above footer copyright on every page)
- Heading: "Get Email Updates"
- Fields: First Name, Last Name, Email, Zip Code, Country (dropdown with full country list)
- Submit button: "Sign Up"
- Form is non-functional UI for the mock (no submission handler, no API route)
- Below form: "By submitting this form, you agree to the Big Machine Label Group Privacy Policy." with link to https://bigmachinelabelgroup.com/privacy-policy
- Layout: dark background, full width, fields in a row on desktop, stacked on mobile

### Footer Copyright Section
- Social icon row: Facebook, Instagram, X, Spotify, Apple Music, Amazon Music, Pandora, YouTube
- "© 2026 Big Machine Label Group" with link to https://www.bigmachinelabelgroup.com/
- Legal links: Privacy (https://www.bigmachinelabelgroup.com/privacy-notice/), Terms & Conditions (https://www.bigmachinelabelgroup.com/terms/), Do Not Sell My Personal Information (https://www.bigmachinelabelgroup.com/privacy-notice/)

### Social URLs
- Facebook: https://www.facebook.com/AaronLewisMusic
- Instagram: https://www.instagram.com/aaronlewismusic
- X: https://twitter.com/aaronlewismusic
- Spotify: https://open.spotify.com/artist/2t2XKfWKLXpFIjFwy1K8wx
- Apple Music: https://itunes.apple.com/us/artist/aaron-lewis/413422387
- Amazon Music: https://www.amazon.com/Aaron-Lewis/e/B004LUW7ME
- Pandora: https://pandora.app.link/d6dT1kYpcGb
- YouTube: https://www.youtube.com/user/AaronLewisTV

## Page Content

### Home
Sections in order:
1. Hero (full-bleed campaign banner, album title lockup, pre-save CTA)
2. Album feature (album art + tracklist placeholder + pre-save links)
3. Tour preview (next 4 dates from Bandsintown widget, link to /tour)
4. Video preview (latest 3 videos, link to /videos)
5. Email signup (global section)

### Tour
- Heading: "Tour"
- Bandsintown widget embed (artist name: Aaron Lewis)
- Subhead copy: "Find Aaron on the road."

### Music
- Hero: GMCB album art + title + pre-save CTA
- Section: "The New Album" with placeholder description copy
- Section: "Discography" with back catalog as a grid (album art, title, year, link out to streaming)
- Back catalog albums (placeholder, BMLG to confirm full list):
  - The Hill (2023)
  - State I'm In (2019)
  - Sinner (2016)
  - The Road (2012)
  - Town Line EP (2011)

### Videos
- Heading: "Videos"
- Grid of 24 videos as YouTube thumbnails with title underneath, click opens YouTube in new tab
- Use YouTube thumbnail URL pattern: `https://i.ytimg.com/vi/{VIDEO_ID}/maxresdefault.jpg`
- Video list (in order):
  1. Aaron Lewis - Let's Go Fishing (Acoustic) - https://www.youtube.com/watch?v=VEpAWX1Q_Nc
  2. Aaron Lewis - Over Me (Lyric Video) - https://www.youtube.com/watch?v=p8G06wUl8bE
  3. Aaron Lewis - Little More Mine (Lyric Video) - https://www.youtube.com/watch?v=b099xpDmThQ
  4. Aaron Lewis - Outlaw (Lyric Video) - https://www.youtube.com/watch?v=T6Y071Dd1VI
  5. Aaron Lewis - Only In My Mind (Lyric Video) - https://www.youtube.com/watch?v=LkvPEDWoxeM
  6. Aaron Lewis - That's My Life (Lyric Video) - https://www.youtube.com/watch?v=CHcdBOO1kYI
  7. Aaron Lewis - Up To Me (Lyric Video) - https://www.youtube.com/watch?v=91ayiTdYExg
  8. Aaron Lewis - Spinnin' (Lyric Video) - https://www.youtube.com/watch?v=42zn4cIP-VY
  9. Aaron Lewis - Over The Hill (Lyric Video) - https://www.youtube.com/watch?v=vR05aktzEJA
  10. Aaron Lewis - Made In China (Lyric Video) - https://www.youtube.com/watch?v=s9e9c1NtOK4
  11. Aaron Lewis - Let's Go Fishing (Lyric Video) - https://www.youtube.com/watch?v=1Iao0M9A49Q
  12. Aaron Lewis Album Release Performance (Live) - https://www.youtube.com/watch?v=A1N8VaABKR0
  13. Aaron Lewis Performs "Am I The Only One" (CANDACE) - https://www.youtube.com/watch?v=of-vRQ5SNcQ
  14. Aaron Lewis - Am I The Only One (Lyric Video / Explicit) - https://www.youtube.com/watch?v=zT9WUIfdKIA
  15. Aaron Lewis - State I'm In (Official Video) - https://www.youtube.com/watch?v=P-nAvDi1x2U
  16. Aaron Lewis - Northern Redneck (Acoustic) - https://www.youtube.com/watch?v=PZhAtFQ5_mY
  17. Aaron Lewis - That Ain't Country (Acoustic) - https://www.youtube.com/watch?v=dIslaje3c38
  18. Aaron Lewis - Granddaddy's Gun (Official Video) - https://www.youtube.com/watch?v=H74RqPzKrY0
  19. Aaron Lewis - Forever (Official Video) - https://www.youtube.com/watch?v=K2WwB9casfM
  20. Aaron Lewis - Forever (Official Live Version) - https://www.youtube.com/watch?v=IRdIT0ZT-EQ
  21. Aaron Lewis - Endless Summer (Official Video) - https://www.youtube.com/watch?v=IL6quWwTiRk
  22. Aaron Lewis - Endless Summer (Official Live Video) - https://www.youtube.com/watch?v=opx4aWKqjp8
  23. Aaron Lewis - Intro (Acoustic) Live - https://www.youtube.com/watch?v=HyufE80cJ8U
  24. Aaron Lewis - Country Boy (Official Video) - https://www.youtube.com/watch?v=vsQzw_Ax8Cw

### About
- Heading: "About"
- Placeholder bio copy (PENDING BMLG APPROVAL):

> Aaron Lewis first came to prominence as the frontman of Staind, the multi-platinum rock band whose raw intensity defined a generation of hard rock. With seven studio albums and over 15 million records sold worldwide, Staind cemented Lewis as one of the most recognizable voices in modern rock.
>
> In 2011, Lewis stepped into the country world with *Town Line*, an EP that arrived with the quiet confidence of someone who had been listening to outlaw country longer than he had been playing arenas. The transition was no gimmick. It was a homecoming. His debut solo album *The Road* followed in 2012, and a string of records, *Sinner* (2016), *State I'm In* (2019), and *The Hill* (2023), built a solo catalog rooted in plainspoken storytelling and traditional country instrumentation.
>
> Lewis signed with Big Machine Label Group, bringing his unfiltered perspective to one of Nashville's most prominent homes. His writing has never chased trends. He sings about what he sees, what he remembers, and what he refuses to let go of.
>
> His new album, *Give My Country Back*, arrives July 10, 2026. It is the next chapter.

- Placeholder portrait image slot
- Bio copy is placeholder pending BMLG approval (see Placeholder Log)

## Image Assets
Files currently in `/public/images`:
- `AaronLewis_Hero.jpg` (home hero, desktop)
- `AaronLewis_Hero_Mobile.jpg` (home hero, mobile)
- `AaronLewis_AlbumCover_Vertical.jpg` (home album feature, music page hero)
- `AaronLewis_Image.jpeg` (about page portrait)
- `AaronLewis_Image2.jpg` (held, not currently placed)

Pending from BMLG:
- Dedicated 1200x630 Open Graph image (currently using AaronLewis_Hero.jpg as fallback)
- Additional press photography for future use
- Album artwork for back catalog discography (currently text placeholders)

## Placeholder Log
Items currently using placeholder or stand-in content:
- Pre-save URL (using TheHillWE link as stand-in, BMLG to provide correct GMCB pre-save link)
- About page bio copy (written by agency, BMLG to approve)
- Music page album descriptions (written by agency)
- Back catalog list (verify with BMLG)
- Email form submission endpoint (UI only, non-functional)
- Press photography beyond the 5 campaign assets
