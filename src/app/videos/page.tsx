import type { Metadata } from "next";
import { VideoCard } from "@/components/site/VideoCard";
import { EmailSignup } from "@/components/site/EmailSignup";
import { FadeIn } from "@/components/site/FadeIn";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch the music videos and live performances of Aaron Lewis.",
};

const VIDEOS = [
  { title: "Let's Go Fishing (Acoustic)", videoId: "VEpAWX1Q_Nc" },
  { title: "Over Me (Lyric Video)", videoId: "p8G06wUl8bE" },
  { title: "Little More Mine (Lyric Video)", videoId: "b099xpDmThQ" },
  { title: "Outlaw (Lyric Video)", videoId: "T6Y071Dd1VI" },
  { title: "Only In My Mind (Lyric Video)", videoId: "LkvPEDWoxeM" },
  { title: "That's My Life (Lyric Video)", videoId: "CHcdBOO1kYI" },
  { title: "Up To Me (Lyric Video)", videoId: "91ayiTdYExg" },
  { title: "Spinnin' (Lyric Video)", videoId: "42zn4cIP-VY" },
  { title: "Over The Hill (Lyric Video)", videoId: "vR05aktzEJA" },
  { title: "Made In China (Lyric Video)", videoId: "s9e9c1NtOK4" },
  { title: "Let's Go Fishing (Lyric Video)", videoId: "1Iao0M9A49Q" },
  { title: "Album Release Performance (Live)", videoId: "A1N8VaABKR0" },
  { title: "Am I The Only One (CANDACE)", videoId: "of-vRQ5SNcQ" },
  { title: "Am I The Only One (Lyric Video)", videoId: "zT9WUIfdKIA" },
  { title: "State I'm In (Official Video)", videoId: "P-nAvDi1x2U" },
  { title: "Northern Redneck (Acoustic)", videoId: "PZhAtFQ5_mY" },
  { title: "That Ain't Country (Acoustic)", videoId: "dIslaje3c38" },
  { title: "Granddaddy's Gun (Official Video)", videoId: "H74RqPzKrY0" },
  { title: "Forever (Official Video)", videoId: "K2WwB9casfM" },
  { title: "Forever (Official Live Version)", videoId: "IRdIT0ZT-EQ" },
  { title: "Endless Summer (Official Video)", videoId: "IL6quWwTiRk" },
  { title: "Endless Summer (Official Live Video)", videoId: "opx4aWKqjp8" },
  { title: "Intro (Acoustic) Live", videoId: "HyufE80cJ8U" },
  { title: "Country Boy (Official Video)", videoId: "vsQzw_Ax8Cw" },
];

export default function VideosPage() {
  return (
    <>
      {/* Page header */}
      <FadeIn direction="none" duration={400}>
        <section className="bg-bg px-6 pb-8 pt-24 md:px-8 lg:pb-12 lg:pt-32">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-display text-6xl font-normal leading-none text-ink lg:text-7xl">
              Videos
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink">
              Music videos, lyric videos, and live performances. New ones drop
              here first.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Video grid */}
      <FadeIn>
        <section className="bg-bg px-6 pb-20 md:px-8 lg:pb-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((video) => (
              <VideoCard
                key={video.videoId}
                title={video.title}
                videoId={video.videoId}
              />
            ))}
          </div>
        </section>
      </FadeIn>
      <FadeIn><EmailSignup /></FadeIn>
    </>
  );
}
