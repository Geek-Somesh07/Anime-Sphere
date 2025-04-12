import { HeroCarousel } from "@/components/home/hero-carousel";
import { AnimeSection } from "@/components/home/anime-section";
import { getAnimeByCategory } from "@/lib/data";

export default function HomePage() {
  const popularAnime = getAnimeByCategory("popular");
  const newReleases = getAnimeByCategory("new-releases");
  const trending = getAnimeByCategory("trending");
  const movies = getAnimeByCategory("movies");

  return (
    <div className="space-y-8 pb-10">
      <HeroCarousel />
      <AnimeSection
        title="Popular Now"
        animeList={popularAnime}
        viewAllLink="/popular"
        limit={6}
      />
      <AnimeSection
        title="New Releases"
        animeList={newReleases}
        viewAllLink="/new-releases"
        limit={6}
      />
      <AnimeSection
        title="Trending"
        animeList={trending}
        viewAllLink="/trending"
        limit={6}
      />
      <AnimeSection
        title="Movies"
        animeList={movies}
        viewAllLink="/movies"
        limit={6}
      />
    </div>
  );
}
