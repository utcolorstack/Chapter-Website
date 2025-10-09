"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin, CalendarDays } from "lucide-react";

export function Newsletter() {
  return (
    <section id="newsletter" className="px-4">
      <div className="mx-auto max-w-6xl">
        <Card>
          <CardContent className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Stay connected
              </h3>
              <p className="mt-2 text-muted-foreground max-w-prose">
                Follow for event drops, career opportunities, and community highlights.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col justify-center items-center">
              <Button asChild size="lg" className="sm:min-w-[200px]">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-1.5" aria-hidden="true" />
                  Instagram
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="sm:min-w-[200px]">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-1.5" aria-hidden="true" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="sm:min-w-[220px]">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <CalendarDays className="mr-1.5" aria-hidden="true" />
                  Add our Google Calendar
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


