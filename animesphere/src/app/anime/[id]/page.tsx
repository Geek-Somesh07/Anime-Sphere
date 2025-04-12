import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAnimeById, animeData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

// Generate static params for all anime IDs
export function generateStaticParams() {
  return animeData.map((anime) => ({
    id: anime.id,
  }));
}

interface AnimePageProps {
  params: {
    id: string;
  };
}

export default function AnimePage({ params }: AnimePageProps) {
  const anime = getAnimeById(params.id);

  if (!anime) {
    notFound();
  }

  return (
    <div className="container px-4 md:px-6 py-8 pt-24 md:pt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
          <Image
            src={anime.image}
            alt={anime.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{anime.title}</h1>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-muted-foreground/20">
                {anime.rating}
              </span>
              <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-muted-foreground/20">
                {anime.type}
              </span>
              <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-muted-foreground/20 capitalize">
                {anime.status}
              </span>
              {anime.year && (
                <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-muted-foreground/20">
                  {anime.year}
                </span>
              )}
              {anime.studio && (
                <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-muted-foreground/20">
                  {anime.studio}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {anime.genres.map((genre) => (
              <Link
                key={genre}
                href={`/genre/${genre.toLowerCase()}`}
                className="inline-flex items-center rounded-md bg-primary/10 hover:bg-primary/20 text-primary px-2 py-1 text-xs font-medium transition-colors"
              >
                {genre}
              </Link>
            ))}
          </div>
          <div className="flex gap-4 pt-2">
            <Button size="lg" asChild>
              <Link href={`/watch/${anime.id}/episode/1`}>
                <Play className="mr-2 h-4 w-4" /> Watch Now
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Add to Watchlist
            </Button>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Synopsis</h2>
            <p className="text-muted-foreground leading-relaxed">
              {anime.description}
            </p>
          </div>
          {anime.episodes && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Episodes</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {Array.from({ length: anime.episodes }).map((_, i) => {
                  const episodeNumber = i + 1;
                  return (
                    <Link
                      key={`${anime.id}-episode-${episodeNumber}`}
                      href={`/watch/${anime.id}/episode/${episodeNumber}`}
                      className="p-3 text-sm border rounded-md hover:bg-muted transition-colors flex items-center justify-between"
                    >
                      <span>Episode {episodeNumber}</span>
                      <Play className="h-3 w-3" />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
