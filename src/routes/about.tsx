import { createFileRoute, Link } from "@tanstack/react-router";
import salmon from "@/assets/sheet-pan-salmon.jpg";
import { PINTEREST_PROFILE_URL } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hot, Fast & Healthy Bites" },
      { name: "description", content: "A friendly resource for busy people learning to cook quick, healthy meals." },
      { property: "og:title", content: "About — Hot, Fast & Healthy Bites" },
      { property: "og:description", content: "A friendly resource for busy people learning to cook quick, healthy meals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-extrabold sm:text-5xl">Cooking doesn't have to be <span className="text-primary">complicated.</span></h1>
        <div className="mt-6 space-y-4 text-lg">
          <p>Hot, Fast &amp; Healthy Bites is for busy people who want to eat well but don't have hours to spend in the kitchen — or much cooking experience yet.</p>
          <p>Every recipe uses ingredients you can find at a regular grocery store, clear step-by-step instructions, and simple swaps so you can work with what you have.</p>
          <p>No fancy gear, no confusing techniques. Just warm, satisfying food you'll feel good about making.</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/recipes" className="btn btn-primary">Find a Recipe</Link>
          <a href={PINTEREST_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-pinterest">Follow on Pinterest</a>
        </div>
      </div>
      <img src={salmon} alt="Sheet pan of roasted salmon fillets with lemon, broccoli and cherry tomatoes" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-3xl object-cover" />
    </div>
  );
}
