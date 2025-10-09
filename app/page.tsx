import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Sponsors } from "@/components/sponsors";
import { Events } from "@/components/events";
import { ExecutiveBoard } from "@/components/executive-board";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main className="space-y-4 sm:space-y-8">
        <Hero />
        <About />
        <Sponsors />
        <Events />
        <ExecutiveBoard />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
