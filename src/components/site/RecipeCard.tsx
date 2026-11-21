import { Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { type Recipe, totalTime } from "@/data/recipes";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-card shadow-card transition-transform hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={recipe.image} alt={recipe.imageAlt} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2 text-sm font-bold">
          <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-accent-foreground">
            <Clock className="h-4 w-4" aria-hidden /> {totalTime(recipe)} min
          </span>
          <span className="rounded-full bg-fresh-soft px-2.5 py-1 text-fresh">{recipe.mealType}</span>
        </div>
        <h3 className="mt-3 text-xl font-extrabold leading-snug">
          <Link to="/recipes/$slug" params={{ slug: recipe.slug }} className="after:absolute after:inset-0 hover:text-primary">
            {recipe.title}
          </Link>
        </h3>
      </div>
    </article>
  );
}
