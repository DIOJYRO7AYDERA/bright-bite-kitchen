import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Timer, Heart, Sparkles } from "lucide-react";
import hero from "@/assets/hero-stirfry.jpg";
import { recipes, byCollection, type Collection } from "@/data/recipes";
import { RecipeCard } from "@/components/site/RecipeCard";
import { SignupForm } from "@/components/site/SignupForm";
import { PINTEREST_PROFILE_URL } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hot, Fast & Healthy Bites — Dinner Made Simple" },
      { name: "description", content: "Beginner-friendly, quick and healthy recipes for busy weeknights. Most ready in about 20 minutes." },
      { property: "og:title", content: "Hot, Fast & Healthy Bites — Dinner Made Simple" },
      { property: "og:description", content: "Beginner-friendly, quick and healthy recipes for busy weeknights." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sections: { id: Collection; title: string; blurb: string; Icon: typeof Timer }[] = [
  { id: "ready-20", title: "Ready in 20 Minutes", blurb: "From fridge to fork before you can finish an episode.", Icon: Timer },
  { id: "comfort", title: "Healthy Comfort Food", blurb: "Warm, cozy bowls that still feel light.", Icon: Heart },
  { id: "beginner", title: "Beginner Favorites", blurb: "Few steps, simple ingredients, big confidence.", Icon: Sparkles },
];

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-8 md:grid-cols-2 md:pt-16">
        <div>
          <p className="inline-block rounded-full bg-fresh-soft px-3 py-1 text-sm font-extrabold text-fresh">Quick recipes for busy beginners</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Hot, Fast &amp; Healthy—<span className="text-primary">Dinner Made Simple.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Easy, satisfying meals with everyday ingredients and no fancy techniques. Most recipes take about 20 minutes, and every step is written for beginners.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/recipes" className="btn btn-primary">Find a Recipe <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            <a href={PINTEREST_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-pinterest">Follow on Pinterest</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rotate-2 rounded-3xl bg-heat opacity-90" aria-hidden />
          <img src={hero} alt="Sizzling chicken and vegetable stir-fry in a cast-iron skillet with chili flakes and parsley" width={1536} height={1024} className="aspect-[4/3] w-full rounded-3xl object-cover" />
        </div>
      </section>

      <section aria-labelledby="featured" className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-4">
          <h2 id="featured" className="text-3xl font-extrabold">Featured recipes</h2>
          <Link to="/recipes" className="font-bold text-primary hover:underline">See all</Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.slice(0, 3).map((r) => <RecipeCard key={r.slug} recipe={r} />)}
        </div>
      </section>

      {sections.map(({ id, title, blurb, Icon }) => (
        <section key={id} aria-labelledby={id} className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-primary"><Icon aria-hidden /></span>
            <div>
              <h2 id={id} className="text-2xl font-extrabold sm:text-3xl">{title}</h2>
              <p className="text-muted-foreground">{blurb}</p>
            </div>
          </div>
          <div className="mt-6 flex snap-x gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
            {byCollection(id).slice(0, 3).map((r) => (
              <div key={r.slug} className="w-[78%] shrink-0 snap-start sm:w-auto"><RecipeCard recipe={r} /></div>
            ))}
          </div>
        </section>
      ))}

      <section aria-labelledby="signup" className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl bg-heat p-8 text-primary-foreground md:p-12">
          <h2 id="signup" className="text-3xl font-extrabold">Get weekly recipe ideas</h2>
          <p className="mt-2 max-w-lg opacity-95">One short email a week with a few quick, healthy dinners to try. Unsubscribe anytime.</p>
          <div className="mt-6 max-w-xl rounded-2xl bg-background p-3 text-foreground"><SignupForm /></div>
        </div>
      </section>
    </>
  );
}
