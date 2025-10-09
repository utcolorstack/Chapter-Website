export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ColorStack UT Austin. All rights reserved.
        </p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#events" className="hover:text-primary">Events</a>
          <a href="#team" className="hover:text-primary">Team</a>
          <a href="#sponsors" className="hover:text-primary">Sponsors</a>
          <a href="#" className="hover:text-primary" aria-label="Instagram">Instagram</a>
          <a href="#" className="hover:text-primary" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" className="hover:text-primary" aria-label="Google Calendar">Calendar</a>
        </nav>
      </div>
    </footer>
  );
}


