import { site } from "@/lib/content";

export function NowPlaying() {
  return (
    <iframe
      title={`${site.nowPlaying.title} by ${site.nowPlaying.artist} on Spotify`}
      src={site.nowPlaying.spotifyEmbed}
      className="h-20 w-full overflow-hidden rounded-xl"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}
