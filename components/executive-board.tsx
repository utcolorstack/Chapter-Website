import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

const members = [
  { name: "Aaron Johnson", role: "President" },
  { name: "Mezmure Dawit", role: "Vice President" },
  { name: "Kenna Nyuga", role: "Secretary" },
  { name: "Nicholas McGinty", role: "Treasurer" },
  { name: "Sergio Martinez", role: "Academic Chair" },
  { name: "Angel Enriquez", role: "Operations Chair" },
  { name: "Stacy Oduro", role: "Professional Development Chair" },
  { name: "Jesus Pequeno", role: "Events Chair" },
  { name: "Alaina Gomez", role: "Communications Director" },
  { name: "Kenta Fukuchi", role: "Communications Director" },
];

export function ExecutiveBoard() {
  return (
    <section id="team" className="px-4">
      <div className="mx-auto max-w-6xl">
        <Card>
          <CardHeader>
            <CardTitle>Executive Board</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {members.map((m) => (
                <li key={m.name} className="flex flex-col items-center gap-3 text-center">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback aria-label={`${m.name} avatar`}>
                      <User className="size-10 text-muted-foreground" aria-hidden="true" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{m.name}</p>
                    <p className="text-sm text-muted-foreground">{m.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


