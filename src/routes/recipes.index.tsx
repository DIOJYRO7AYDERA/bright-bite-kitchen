import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { recipes, totalTime, type Diet, type MealType } from "@/data/recipes";
import { RecipeCard } from "@/components/site/RecipeCard";

export const Route = createFileRoute("/recipes/")({
  head: () => ({
    meta: [
      { title: "All Recipes — Hot, Fast & Healthy Bites" },
      { name: "description", content: "Search and filter quick, healthy recipes by meal type, time and dietary preference." },
      { property: "og:title", content: "All Recipes — Hot, Fast & Healthy Bites" },
      { property: "og:description", content: "Search and filter quick, healthy, beginner-friendly recipes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecipesPage,
});

const meals: MealType[] = ["Breakfast", "Lunch", "Dinner"];
const diets: Diet[] = ["Vegetarian", "Vegan", "Gluten-free", "Dairy-free", "High-protein"];
const times = [{ v: 0, l: "Any time" }, { v: 10, l: "10 min or less" }, { v: 20, l: "20 min or less" }, { v: 30, l: "30 min or less" }];

const selectCls = "min-h-12 w-full rounded-xl border-2 border-input bg-card px-3 font-bold";

function RecipesPage() {
  const [q, setQ] = useState("");
  const [meal, setMeal] = useState("");
  const [time, setTime] = useState(0);
  const [diet, setDiet] = useState("");

  const results = useMemo(() => recipes.filter((r) =>
    (!q || (r.title + " " + r.ingredients.join(" ")).toLowerCase().includes(q.toLowerCase())) &&
    (!meal || r.mealType === meal) &&
    (!time || totalTime(r) <= time) &&
    (!diet || r.diets.includes(diet as Diet))
  ), [q, meal, time, diet]);

  const reset = () => { setQ(""); setMeal(""); setTime(0); setDiet(""); };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-extrabold sm:text-5xl">Find a recipe</h1>
      <p className="mt-2 text-muted-foreground">Sample recipes shown — easy to swap for your own.</p>

      <div role="search" className="mt-6 grid gap-3 rounded-2xl bg-secondary p-4 md:grid-cols-4">
        <div className="relative md:col-span-4">
          <label htmlFor="q" className="sr-only">Search recipes</label>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <input id="q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name or ingredient…" className="min-h-12 w-full rounded-full border-2 border-input bg-card pl-12 pr-4" />
        </div>
        <label className="text-sm font-bold">Meal type
          <select value={meal} onChange={(e) => setMeal(e.target.value)} className={selectCls}>
            <option value="">All meals</option>{meals.map((m) => <option key={m}>{m}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold">Total time
          <select value={time} onChange={(e) => setTime(Number(e.target.value))} className={selectCls}>
            {times.map((t) => <option key={t.v} value={t.v}>{t.l}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold">Dietary preference
          <select value={diet} onChange={(e) => setDiet(e.target.value)} className={selectCls}>
            <option value="">Any</option>{diets.map((d) => <option key={d}>{d}</option>)}
          </select>
        </label>
        <div className="flex items-end"><button onClick={reset} className="btn btn-outline w-full">Clear filters</button></div>
      </div>

      <p role="status" className="mt-6 font-bold">{results.length} recipe{results.length === 1 ? "" : "s"} found</p>
      {results.length ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{results.map((r) => <RecipeCard key={r.slug} recipe={r} />)}</div>
      ) : (
        <p className="mt-4 rounded-2xl bg-card p-8 text-center text-muted-foreground">No matches yet. Try clearing a filter.</p>
      )}
    </div>
  );
}
