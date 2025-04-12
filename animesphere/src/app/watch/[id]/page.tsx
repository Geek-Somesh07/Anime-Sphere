import Link from "next/link";
import { notFound } from "next/navigation";
import { getAnimeById, animeData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ThumbsUp, Share, Plus, SkipForward, SkipBack } from "lucide-react";

// Generate static params for all anime IDs
export function generateStaticParams() {
  return animeData.map((anime) => ({
    id: anime.id,
  }));
}

// For static export, we remove searchParams and set episode to 1
export default function WatchPage({
  params,
}: {
  params: { id: string },
}) {
  const anime = getAnimeById(params.id);
  // For static export, we'll default to episode 1
  const validEpisode = 1;

  if (!anime) {
    notFound();
  }

  return (
    <div className="container px-0 md:px-6 py-0 pt-16">
      <div className="bg-black relative">
        <div className="aspect-video w-full bg-gray-950 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground text-lg mb-4">
              Video player would go here in a real streaming service
            </p>
            <p className="text-xl font-bold">
              {anime.title} - Episode {validEpisode}
            </p>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/anime/${params.id}`}>
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back to anime</span>
            </Link>
          </Button>
        </div>
        <div className="flex items-center justify-between p-4 bg-background">
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="mr-2 h-4 w-4" /> Like
            </Button>
            <Button variant="ghost" size="sm">
              <Share className="mr-2 h-4 w-4" /> Share
            </Button>
            <Button variant="ghost" size="sm">
              <Plus className="mr-2 h-4 w-4" /> Add to List
            </Button>
          </div>
          <div className="flex space-x-2">
            {validEpisode > 1 && (
              <Button variant="outline" size="sm" asChild>
                <Link href={`/watch/${params.id}?episode=${validEpisode - 1}`}>
                  <SkipBack className="mr-2 h-4 w-4" /> Previous
                </Link>
              </Button>
            )}
            {anime.episodes && validEpisode < anime.episodes && (
              <Button size="sm" asChild>
                <Link href={`/watch/${params.id}?episode=${validEpisode + 1}`}>
                  Next <SkipForward className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6 space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{anime.title}</h1>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
              Episode {validEpisode}{anime.episodes ? ` of ${anime.episodes}` : ""}
            </span>
            <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
              {anime.rating}
            </span>
          </div>
        </div>

        {anime.episodes && anime.episodes > 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Episodes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              {Array.from({ length: anime.episodes }).map((_, i) => {
                const episodeNumber = i + 1;
                return (
                  <Link
                    key={`episode-${episodeNumber}`}
                    href={`/watch/${anime.id}?episode=${episodeNumber}`}
                    className={`p-3 text-sm border rounded-md hover:bg-muted transition-colors text-center ${
                      episodeNumber === validEpisode
                        ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                        : ""
                    }`}
                  >
                    {episodeNumber}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Synopsis</h2>
          <p className="text-muted-foreground leading-relaxed">
            {anime.description}
          </p>
        </div>
      </div>
    </div>
  );
}
