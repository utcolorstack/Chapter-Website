"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
        <Link href="#" className="flex items-center gap-2 font-semibold">
          <Image src="/logo.png" alt="ColorStack UT Austin logo" width={28} height={28} />
          <span>
            ColorStack <span className="text-primary">UT Austin</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          <Link href="#about" className="hover:text-primary">About</Link>
          <Link href="#events" className="hover:text-primary">Events</Link>
          <Link href="#team" className="hover:text-primary">Our Team</Link>
          <Link href="#sponsors" className="hover:text-primary">Sponsors</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="#newsletter">Join</Link>
          </Button>
          <Button asChild>
            <Link href="#sponsors">Sponsor Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}


