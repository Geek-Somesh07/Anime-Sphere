"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface FeaturedAnime {
  id: string;
  title: string;
  image: string;
  description: string;
  genre: string[];
  rating: string;
}

const featuredAnime: FeaturedAnime[] = [
  {
    id: "1",
    title: "Fire Force",
    image: "https://ext.same-assets.com/1771899666/2856257767.jpeg",
    description:
      "Tokyo is burning, and citizens are mysteriously suffering from spontaneous human combustion all throughout the city! Responsible for snuffing out this inferno is the Fire Force, and Shinra is ready to join their fight.",
    genre: ["Action", "Fantasy", "Shonen", "Supernatural"],
    rating: "PG-13",
  },
  {
    id: "2",
    title: "Teogonia",
    image: "https://ext.same-assets.com/1771899666/2103409349.png",
    description:
      "Humans fight to protect their land from invading demi-human tribes in relentless battles. As his world is engulfed by intense warfare, Kai, a village boy from Lag, joins the fight to defend all he knows.",
    genre: ["Drama", "Fantasy"],
    rating: "PG-13",
  },
  {
    id: "3",
    title: "Bye Bye, Earth",
    image: "https://ext.same-assets.com/1771899666/3071563370.png",
    description:
      "Belle Lablac doesnt really fit in as the only human being in a world full of anthropomorphic animals. No fangs, no fur, no scales, no claws. Lonely and eager to discover where she comes from.",
    genre: ["Drama", "Fantasy"],
    rating: "PG-13",
  },
];

export function HeroCarousel() {
  return (
    <section className="relative">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {featuredAnime.map((anime) => (
            <CarouselItem key={anime.id}>
              <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/30 z-10" />
                <Image
                  src={anime.image}
                  alt={anime.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center container px-4 md:px-6">
                  <div className="max-w-3xl space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
                        {anime.title}
                      </h1>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-muted-foreground/20">
                          {anime.rating}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {anime.genre.join(" • ")}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground max-w-2xl line-clamp-3 md:line-clamp-4">
                      {anime.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <Button size="lg" asChild>
                        <Link href={`/watch/${anime.id}/episode/1`}>
                          <Play className="mr-2 h-4 w-4" /> Watch Now
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href={`/anime/${anime.id}`}>More Info</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </div>
      </Carousel>
    </section>
  );
}
