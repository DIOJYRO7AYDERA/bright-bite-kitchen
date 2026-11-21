import { Link } from "@tanstack/react-router";
import { PINTEREST_PROFILE_URL, SITE_NAME } from "@/data/site";

export function Footer() {
  return (
    <footer className="no-print mt-20 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-extrabold">{SITE_NAME}</p>
          <p className="mt-2 opacity-80">Quick, healthy meals for busy beginners.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 font-bold">
          <Link to="/recipes" className="hover:underline">All recipes</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <a href={PINTEREST_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Pinterest</a>
        </nav>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} {SITE_NAME}. Recipes shown are sample content.</p>
      </div>
    </footer>
  );
}
