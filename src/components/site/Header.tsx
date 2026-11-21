import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";
import { PINTEREST_PROFILE_URL } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/recipes", label: "Recipes" },
  { to: "/about", label: "About" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="no-print sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold leading-tight">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-heat text-primary-foreground">
            <Flame className="h-5 w-5" aria-hidden />
          </span>
          <span>Hot, Fast &amp; <span className="text-fresh">Healthy</span> Bites</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="font-bold hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: n.to === "/" }}>
              {n.label}
            </Link>
          ))}
          <a href={PINTEREST_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-pinterest py-2">Pinterest</a>
        </nav>
        <button className="rounded-full p-2 md:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t px-4 pb-4 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-3 text-lg font-bold">
              {n.label}
            </Link>
          ))}
          <a href={PINTEREST_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-pinterest mt-2 w-full">Follow on Pinterest</a>
        </nav>
      )}
    </header>
  );
}
