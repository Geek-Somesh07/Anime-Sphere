import Link from "next/link";
import { AnimeCard } from "@/components/anime/anime-card";
import { ChevronRight } from "lucide-react";

interface AnimeSectionProps {
  title: string;
  animeList: {
    id: string;
    title: string;
    image: string;
    description?: string;
    episodes?: number;
    genre?: string[];
    rating?: string;
  }[];
  viewAllLink?: string;
  limit?: number;
}

export function AnimeSection({
  title,
  animeList,
  viewAllLink,
  limit = 6,
}: AnimeSectionProps) {
  // Limit the number of anime shown in the section
  const limitedAnimeList = animeList.slice(0, limit);

  return (
    <section className="py-8">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          {viewAllLink && (
            <Link
              href={viewAllLink}
              className="flex items-center text-sm text-muted-foreground hover:text-primary"
            >
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {limitedAnimeList.map((anime) => (
            <AnimeCard
              key={anime.id}
              id={anime.id}
              title={anime.title}
              image={anime.image}
              description={anime.description}
              episodes={anime.episodes}
              genre={anime.genre}
              rating={anime.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
