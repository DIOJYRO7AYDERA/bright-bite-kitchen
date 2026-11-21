import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Printer, ChevronLeft, Lightbulb, Snowflake, Info } from "lucide-react";
import { getRecipe, totalTime } from "@/data/recipes";

export const Route = createFileRoute("/recipes/$slug")({
  loader: ({ params }) => {
    const recipe = getRecipe(params.slug);
    if (!recipe) throw notFound();
    return { recipe };
  },
  head: ({ loaderData }) => {
    const r = loaderData?.recipe;
    const title = r ? `${r.title} — Hot, Fast & Healthy Bites` : "Recipe not found";
    return {
      meta: [
        { title },
        { name: "description", content: r?.intro ?? "Recipe not found." },
        { property: "og:title", content: title },
        { property: "og:description", content: r?.intro ?? "" },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-3xl font-extrabold">Recipe not found</h1>
      <Link to="/recipes" className="btn btn-primary mt-6">Browse recipes</Link>
    </div>
  ),
  component: RecipePage,
});

function RecipePage() {
  const { recipe: r } = Route.useLoaderData();
  const pinUrl = () => {
    const url = encodeURIComponent(window.location.href);
    const media = encodeURIComponent(new URL(r.image, window.location.origin).href);
    return `https://www.pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${encodeURIComponent(r.title)}`;
  };
  const stats = [
    { l: "Prep", v: `${r.prepMinutes} min` },
    { l: "Cook", v: r.cookMinutes ? `${r.cookMinutes} min` : "No cook" },
    { l: "Total", v: `${totalTime(r)} min` },
    { l: "Servings", v: r.servings },
    { l: "Difficulty", v: r.difficulty },
  ];

  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <Link to="/recipes" className="no-print inline-flex items-center gap-1 font-bold text-primary hover:underline"><ChevronLeft className="h-4 w-4" aria-hidden /> All recipes</Link>
      <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{r.title}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{r.intro}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {r.diets.map((d) => <span key={d} className="rounded-full bg-fresh-soft px-3 py-1 text-sm font-bold text-fresh">{d}</span>)}
      </div>

      <div className="no-print mt-6 flex flex-col gap-3 sm:flex-row">
        <button onClick={() => window.print()} className="btn btn-primary"><Printer className="h-4 w-4" aria-hidden /> Print Recipe</button>
        <button onClick={() => window.open(pinUrl(), "_blank", "noopener,noreferrer,width=750,height=650")} className="btn btn-pinterest">Save to Pinterest</button>
      </div>

      <img src={r.image} alt={r.imageAlt} width={1024} height={1024} className="mt-6 aspect-[16/10] w-full rounded-3xl object-cover" />

      <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {stats.map((s) => (
          <div key={s.l} className="rounded-2xl bg-card p-4 text-center shadow-card">
            <dt className="text-sm font-bold text-muted-foreground">{s.l}</dt>
            <dd className="font-display text-xl font-extrabold">{s.v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <section aria-labelledby="ing">
          <h2 id="ing" className="text-2xl font-extrabold">Ingredients</h2>
          <ul className="mt-4 space-y-2">
            {r.ingredients.map((i) => (
              <li key={i} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-fresh" aria-hidden />{i}</li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="steps">
          <h2 id="steps" className="text-2xl font-extrabold">Instructions</h2>
          <ol className="mt-4 space-y-4">
            {r.steps.map((s, i) => (
              <li key={i} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary font-extrabold text-primary-foreground">{i + 1}</span>
                <p className="pt-1">{s}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <section aria-labelledby="subs" className="rounded-2xl bg-accent p-5">
          <h2 id="subs" className="flex items-center gap-2 text-xl font-extrabold"><Lightbulb className="h-5 w-5" aria-hidden /> Substitutions</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">{r.substitutions.map((s) => <li key={s}>{s}</li>)}</ul>
        </section>
        <section aria-labelledby="store" className="rounded-2xl bg-fresh-soft p-5">
          <h2 id="store" className="flex items-center gap-2 text-xl font-extrabold"><Snowflake className="h-5 w-5" aria-hidden /> Storage tips</h2>
          <p className="mt-3">{r.storage}</p>
        </section>
      </div>

      <section aria-labelledby="nutrition" className="mt-4 rounded-2xl border-2 border-dashed p-5">
        <h2 id="nutrition" className="flex items-center gap-2 text-xl font-extrabold"><Info className="h-5 w-5" aria-hidden /> Nutrition information</h2>
        <p className="mt-2 text-muted-foreground">Nutrition details coming soon. Values depend on the exact brands and portions you use — for precise numbers, enter your ingredients into a nutrition calculator.</p>
      </section>
    </article>
  );
}
