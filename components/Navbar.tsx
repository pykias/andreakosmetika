"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import BookingCTA from "./BookingCTA";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Domů", href: "/" },
  { name: "Služby", href: "/sluzby" },
  { name: "Ceník", href: "/cenik" },
  { name: "Galerie", href: "/galerie" },
  { name: "O salonu", href: "/o-salonu" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-display font-bold text-brand-text">
                Kosmetický salon Andrea
              </span>
              <span className="ml-2 text-sm text-brand-text-light">
                Bohunice
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-brown",
                  pathname === item.href
                    ? "text-brand-brown"
                    : "text-brand-text-light"
                )}
              >
                {item.name}
              </Link>
            ))}
            <BookingCTA size="sm" className="ml-4" />
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-brand-text hover:bg-brand-bg-soft"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Otevřít hlavní menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? "bg-brand-beige text-brand-text"
                      : "text-brand-text-light hover:bg-brand-bg-soft"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <BookingCTA className="w-full" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}