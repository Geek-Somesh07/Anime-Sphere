import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface AnimeCardProps {
  id: string;
  title: string;
  image: string;
  description?: string;
  episodes?: number;
  genre?: string[];
  rating?: string;
  variant?: "default" | "small";
}

export function AnimeCard({
  id,
  title,
  image,
  description,
  episodes,
  genre,
  rating,
  variant = "default",
}: AnimeCardProps) {
  if (variant === "small") {
    return (
      <Link href={`/anime/${id}`} className="group">
        <div className="relative aspect-[3/4] overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-105">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-300 group-hover:brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
            <h3 className="font-medium line-clamp-2 text-sm">{title}</h3>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href={`/anime/${id}`}>
          <Card className="overflow-hidden h-full border-0 bg-transparent transition-all duration-300 hover:border-primary/50 hover:bg-card hover:border">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-all duration-300 hover:scale-105 hover:brightness-75"
              />
            </div>
            <CardHeader className="p-3 pb-0">
              <CardTitle className="line-clamp-1 text-base">{title}</CardTitle>
              {episodes && (
                <CardDescription className="line-clamp-1 text-xs">
                  {episodes} Episodes
                </CardDescription>
              )}
            </CardHeader>
          </Card>
        </Link>
      </HoverCardTrigger>
      {description && (
        <HoverCardContent className="w-80 bg-card text-foreground">
          <div className="space-y-3">
            <div className="space-y-1">
              <h4 className="font-semibold">{title}</h4>
              {rating && (
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-muted-foreground/20">
                    {rating}
                  </span>
                  {genre && genre.length > 0 && (
                    <span className="text-xs text-muted-foreground">
                      {genre.join(" • ")}
                    </span>
                  )}
                </div>
              )}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {description}
            </p>
            <div className="flex gap-2">
              <Button size="sm" asChild>
                <Link href={`/watch/${id}/episode/1`}>
                  <Play className="mr-1 h-3 w-3" /> Watch
                </Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href={`/anime/${id}`}>Details</Link>
              </Button>
            </div>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
}
