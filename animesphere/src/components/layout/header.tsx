"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ChevronDown, X } from "lucide-react";

const genres = [
  { name: "Action", href: "/genre/action" },
  { name: "Adventure", href: "/genre/adventure" },
  { name: "Comedy", href: "/genre/comedy" },
  { name: "Drama", href: "/genre/drama" },
  { name: "Fantasy", href: "/genre/fantasy" },
  { name: "Horror", href: "/genre/horror" },
  { name: "Mecha", href: "/genre/mecha" },
  { name: "Romance", href: "/genre/romance" },
  { name: "Sci-Fi", href: "/genre/sci-fi" },
  { name: "Slice of Life", href: "/genre/slice-of-life" },
  { name: "Sports", href: "/genre/sports" },
  { name: "Supernatural", href: "/genre/supernatural" },
];

export function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showGenres, setShowGenres] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[350px] bg-card">
              <div className="grid gap-6 py-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-bold"
                >
                  <span className="text-primary">Anime</span>
                  <span>Sphere</span>
                </Link>
                <div className="grid gap-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/browse"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Browse
                  </Link>
                  <div className="grid gap-2">
                    <div className="font-medium">Genres</div>
                    <div className="grid grid-cols-2 gap-2">
                      {genres.map((genre) => (
                        <Link
                          key={genre.name}
                          href={genre.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {genre.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Anime</span>
            <span>Sphere</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/browse"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Browse
            </Link>
            <div className="relative">
              <button
                onClick={() => setShowGenres(!showGenres)}
                className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
              >
                Genres
                <ChevronDown className="w-4 h-4" />
              </button>
              {showGenres && (
                <div className="absolute top-full left-0 mt-2 p-4 grid grid-cols-3 gap-x-6 gap-y-2 w-[500px] rounded-md bg-card shadow-lg border z-50">
                  {genres.map((genre) => (
                    <Link
                      key={genre.name}
                      href={genre.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setShowGenres(false)}
                    >
                      {genre.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {showSearch ? (
            <div className="flex items-center">
              <Input
                type="search"
                placeholder="Search anime..."
                className="w-[200px] sm:w-[300px] h-9 rounded-r-none"
              />
              <Button variant="ghost" size="icon" className="h-9 rounded-l-none border-l-0">
                <Search className="w-4 h-4" />
                <span className="sr-only">Search</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 ml-1"
                onClick={() => setShowSearch(false)}
              >
                <X className="w-4 h-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(true)}
            >
              <Search className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button size="sm" variant="secondary" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button size="sm" className="hidden sm:flex">
            <Link href="/signup">Try for Free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
