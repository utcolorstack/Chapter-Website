import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-10 sm:py-16 md:grid-cols-2">
        <div className="space-y-4 sm:space-y-6">
          <Badge className="bg-primary/10 text-primary">
            Built by ColorStack UT students — actively in progress
            <span className="relative ml-1.5 inline-flex h-2 w-2 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-50 animate-ping" aria-hidden="true" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_0.5rem_0.15rem_rgba(191,87,0,0.45)]" aria-hidden="true" />
            </span>
          </Badge>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            ColorStack @ <span className="text-primary">UT Austin</span>
          </h1>
          <p className="text-muted-foreground max-w-prose">
            A community for Black and Latinx Computer Science students at The University of Texas at Austin. We host events, socials, and industry connections to help you thrive.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#newsletter">Join the Chapter</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#sponsors">Sponsor Us</a>
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
          <Image
            src="/Hero.jpg"
            alt="Students collaborating at UT Austin"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
    </section>
  );
}


