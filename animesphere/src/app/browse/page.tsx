"use client";

import { AnimeCard } from "@/components/anime/anime-card";
import { animeData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

// Get unique genres from anime data
const getAllGenres = () => {
  const genres = new Set<string>();

  // Using for...of loops instead of forEach
  for (const anime of animeData) {
    for (const genre of anime.genres) {
      genres.add(genre);
    }
  }

  return Array.from(genres).sort();
};

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const allGenres = getAllGenres();

  return (
    <div className="container px-4 md:px-6 py-8 pt-24 md:pt-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Browse Anime</h1>
          <p className="text-muted-foreground">
            Explore our collection of anime series and movies.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <Input
              placeholder="Search anime..."
              className="w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">Filter:</span>
            <Button variant="outline" size="sm" className="rounded-full" disabled>
              All
            </Button>
            <Button variant="outline" size="sm" className="rounded-full" disabled>
              Series
            </Button>
            <Button variant="outline" size="sm" className="rounded-full" disabled>
              Movies
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Browse by Genre</h2>
          <div className="flex flex-wrap gap-2">
            {allGenres.map((genre) => (
              <Link
                key={genre}
                href={`/genre/${genre.toLowerCase()}`}
                className="inline-flex items-center rounded-md bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 text-sm font-medium transition-colors"
              >
                {genre}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">All Anime</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {animeData.map((anime) => (
              <AnimeCard
                key={anime.id}
                id={anime.id}
                title={anime.title}
                image={anime.image}
                description={anime.description}
                episodes={anime.episodes}
                genre={anime.genres}
                rating={anime.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
