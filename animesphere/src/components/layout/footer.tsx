import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <span className="text-primary">Anime</span>
              <span>Sphere</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your gateway to the world of anime. Stream, discover, and enjoy
              thousands of titles.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Browse</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/popular"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link
                  href="/new-releases"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  New Releases
                </Link>
              </li>
              <li>
                <Link
                  href="/alphabetical"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Alphabetical
                </Link>
              </li>
              <li>
                <Link
                  href="/simulcast"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Simulcast
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} AnimeSphere. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-0">
            AnimeSphere is a concept project. This is not a real streaming service.
          </p>
        </div>
      </div>
    </footer>
  );
}
