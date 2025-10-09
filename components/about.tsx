import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Megaphone, Cpu, Users } from "lucide-react";

const aboutItems = [
  {
    title: "Professional Development",
    description:
      "We connect members with workshops, mentorship, and career opportunities to help them grow into the professional they aspire to be.",
    icon: Briefcase,
  },
  {
    title: "Representation",
    description:
      "We amplify the voices of minority students in tech, ensuring every member feels seen, valued, and empowered to lead.",
    icon: Megaphone,
  },
  {
    title: "Technical Advancement",
    description:
      "We provide hands-on learning, collaborative projects, and peer support to strengthen our members' technical and soft skills.",
    icon: Cpu,
  },
  {
    title: "Community Engagement",
    description:
      "We bring members together through technical talks, company meetups, and collaborative events. Our community also fosters peer-to-peer support and study groups that help us grow and build lasting connections.",
    icon: Users,
  },
];

export function About() {
  return (
    <section id="about" className="px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold sm:text-3xl">About Us</h2>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {aboutItems.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="h-full transition-colors hover:border-primary/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


