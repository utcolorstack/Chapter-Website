import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    title: "Kickoff + Meet & Greet",
    date: "Sept 12, 2025",
    location: "Gates Dell Complex",
  },
  {
    title: "Tech Interview Prep Night",
    date: "Oct 3, 2025",
    location: "Virtual",
  },
  {
    title: "Sponsor Spotlight: TBD",
    date: "Oct 24, 2025",
    location: "On Campus",
  },
];

export function Events() {
  return (
    <section id="events" className="px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Events</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {events.map((e) => (
            <Card key={e.title}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">{e.title}</CardTitle>
                <Badge variant="secondary">{e.date}</Badge>
              </CardHeader>
              <CardContent className="text-muted-foreground">{e.location}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


