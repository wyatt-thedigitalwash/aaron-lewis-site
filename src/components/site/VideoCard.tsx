"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export function VideoCard({
  title,
  videoId,
}: {
  title: string;
  videoId: string;
}) {
  const [thumbSrc, setThumbSrc] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  );

  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${title} on YouTube (opens in new tab)`}
      className="group block focus:outline-2 focus:outline-offset-2 focus:outline-accent"
    >
      <div className="relative aspect-video overflow-hidden border border-rule">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbSrc}
          alt={`${title} thumbnail`}
          width={480}
          height={270}
          loading="lazy"
          decoding="async"
          onError={() =>
            setThumbSrc(
              `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
            )
          }
          className="h-full w-full object-cover"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-bg/0 transition-colors duration-200 group-hover:bg-bg/30" />
        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <Play size={48} className="fill-ink text-ink" aria-hidden="true" />
        </div>
      </div>
      <p className="mt-3 text-base font-medium text-ink transition-colors duration-200 group-hover:text-accent">
        {title}
      </p>
    </a>
  );
}
