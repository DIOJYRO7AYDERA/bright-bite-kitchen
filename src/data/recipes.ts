// SAMPLE RECIPES — example content. Edit, replace or add entries here; every page updates automatically.
import stirfry from "@/assets/hero-stirfry.jpg";
import curry from "@/assets/chickpea-curry.jpg";
import salmon from "@/assets/sheet-pan-salmon.jpg";
import bowl from "@/assets/burrito-bowl.jpg";
import shakshuka from "@/assets/shakshuka.jpg";
import oats from "@/assets/overnight-oats.jpg";

export type MealType = "Breakfast" | "Lunch" | "Dinner";
export type Diet = "Vegetarian" | "Vegan" | "Gluten-free" | "High-protein" | "Dairy-free";
export type Collection = "ready-20" | "comfort" | "beginner";

export interface Recipe {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  intro: string;
  mealType: MealType;
  diets: Diet[];
  collections: Collection[];
  prepMinutes: number;
  cookMinutes: number;
  servings: number;
  difficulty: "Easy" | "Medium";
  ingredients: string[];
  steps: string[];
  substitutions: string[];
  storage: string;
}

export const totalTime = (r: Recipe) => r.prepMinutes + r.cookMinutes;

export const recipes: Recipe[] = [
  {
    slug: "15-minute-chicken-veggie-stir-fry",
    title: "15-Minute Chicken & Veggie Stir-Fry",
    image: stirfry,
    imageAlt: "Chicken strips, broccoli, green beans and red peppers stir-fried in a black cast-iron skillet",
    intro: "One pan, a handful of veggies and a simple sauce you can mix in a mug. Perfect for your first week of cooking.",
    mealType: "Dinner",
    diets: ["High-protein", "Dairy-free"],
    collections: ["ready-20", "beginner"],
    prepMinutes: 5, cookMinutes: 10, servings: 2, difficulty: "Easy",
    ingredients: [
      "2 chicken breasts, sliced into thin strips",
      "1 tbsp neutral oil",
      "1 head broccoli, cut into small florets",
      "1 red bell pepper, sliced",
      "1 handful green beans, trimmed",
      "3 tbsp soy sauce",
      "1 tsp honey",
      "1 garlic clove, grated",
      "Pinch of chili flakes",
    ],
    steps: [
      "Mix soy sauce, honey, garlic and chili flakes in a small cup. Set aside.",
      "Heat oil in a large pan over medium-high heat until it shimmers.",
      "Add chicken and cook 4–5 minutes, stirring, until no pink remains.",
      "Add broccoli, pepper and green beans. Cook 3–4 minutes until bright and just tender.",
      "Pour in the sauce, toss for 1 minute and serve hot.",
    ],
    substitutions: [
      "Swap chicken for firm tofu or shrimp.",
      "Use tamari instead of soy sauce for a gluten-free version.",
      "Any quick-cooking veg works: snap peas, zucchini, carrots.",
    ],
    storage: "Keeps in an airtight container in the fridge for up to 3 days. Reheat in a pan for best texture.",
  },
  {
    slug: "creamy-tomato-chickpea-curry",
    title: "Creamy Tomato Chickpea Curry",
    image: curry,
    imageAlt: "Bowl of orange tomato chickpea curry with wilted spinach beside white rice",
    intro: "Cozy, saucy and made almost entirely from pantry staples. Ready before the rice is done.",
    mealType: "Dinner",
    diets: ["Vegan", "Vegetarian", "Gluten-free", "Dairy-free"],
    collections: ["comfort", "ready-20"],
    prepMinutes: 5, cookMinutes: 15, servings: 3, difficulty: "Easy",
    ingredients: [
      "1 tbsp olive oil",
      "1 onion, diced",
      "2 garlic cloves, minced",
      "1 tbsp curry powder",
      "1 can (400 g) chopped tomatoes",
      "1 can (400 g) chickpeas, drained",
      "1/2 can coconut milk",
      "2 big handfuls spinach",
      "Salt to taste",
    ],
    steps: [
      "Soften onion in oil for 4 minutes over medium heat.",
      "Stir in garlic and curry powder for 30 seconds until fragrant.",
      "Add tomatoes, chickpeas and coconut milk. Simmer 8–10 minutes.",
      "Stir in spinach until wilted. Season with salt and serve with rice.",
    ],
    substitutions: [
      "Use Greek yogurt instead of coconut milk (no longer vegan).",
      "Kale or frozen peas can replace spinach.",
    ],
    storage: "Fridge up to 4 days, freezer up to 3 months. Tastes even better the next day.",
  },
  {
    slug: "sheet-pan-lemon-garlic-salmon",
    title: "Sheet-Pan Lemon Garlic Salmon",
    image: salmon,
    imageAlt: "Four salmon fillets topped with lemon slices on a sheet pan with roasted broccoli and cherry tomatoes",
    intro: "Everything roasts together on one tray, so there's almost nothing to wash up.",
    mealType: "Dinner",
    diets: ["Gluten-free", "High-protein", "Dairy-free"],
    collections: ["beginner", "ready-20"],
    prepMinutes: 5, cookMinutes: 15, servings: 4, difficulty: "Easy",
    ingredients: [
      "4 salmon fillets",
      "1 large head broccoli, in florets",
      "1 cup cherry tomatoes",
      "2 tbsp olive oil",
      "2 garlic cloves, minced",
      "1 lemon, half sliced and half juiced",
      "Salt, pepper and dried parsley",
    ],
    steps: [
      "Heat oven to 220°C / 425°F.",
      "Toss broccoli and tomatoes with 1 tbsp oil, salt and pepper on a sheet pan.",
      "Nestle salmon in the middle. Brush with remaining oil, garlic and lemon juice.",
      "Top with lemon slices and parsley. Roast 12–15 minutes until salmon flakes easily.",
    ],
    substitutions: [
      "Try cod or chicken thighs (chicken needs about 25 minutes).",
      "Green beans or asparagus are great instead of broccoli.",
    ],
    storage: "Fridge up to 2 days. Enjoy cold over salad or reheat gently.",
  },
  {
    slug: "turkey-black-bean-burrito-bowls",
    title: "Turkey & Black Bean Burrito Bowls",
    image: bowl,
    imageAlt: "Burrito bowl with seasoned ground turkey, black beans, corn, tomato salsa, sliced avocado and lime",
    intro: "Build-your-own bowls that are great for meal prep and easy to customize for picky eaters.",
    mealType: "Lunch",
    diets: ["Gluten-free", "High-protein", "Dairy-free"],
    collections: ["beginner", "comfort"],
    prepMinutes: 10, cookMinutes: 15, servings: 4, difficulty: "Easy",
    ingredients: [
      "500 g lean ground turkey",
      "1 tbsp taco seasoning",
      "1 can black beans, drained",
      "1 cup corn (frozen is fine)",
      "2 cups cooked rice",
      "1 cup salsa",
      "1 avocado, sliced",
      "1 lime, in wedges",
      "Fresh cilantro",
    ],
    steps: [
      "Brown turkey in a pan over medium-high heat, breaking it up, about 7 minutes.",
      "Stir in taco seasoning and a splash of water. Cook 2 minutes.",
      "Warm beans and corn in the same pan or the microwave.",
      "Divide rice into bowls and top with turkey, beans, corn, salsa and avocado.",
      "Finish with lime and cilantro.",
    ],
    substitutions: [
      "Use lentils or extra beans for a vegetarian bowl.",
      "Cauliflower rice works in place of rice.",
    ],
    storage: "Store components separately in the fridge up to 4 days. Add avocado just before eating.",
  },
  {
    slug: "veggie-packed-shakshuka",
    title: "Veggie-Packed Shakshuka",
    image: shakshuka,
    imageAlt: "Eggs baked in chunky tomato and zucchini sauce in a cast-iron skillet with parsley and bread",
    intro: "Eggs gently cooked in a spiced tomato sauce. Breakfast, lunch or dinner — it always works.",
    mealType: "Breakfast",
    diets: ["Vegetarian", "Gluten-free", "Dairy-free"],
    collections: ["comfort"],
    prepMinutes: 5, cookMinutes: 20, servings: 2, difficulty: "Medium",
    ingredients: [
      "1 tbsp olive oil",
      "1 small onion, diced",
      "1 red pepper, diced",
      "1 small zucchini, diced",
      "1 tsp cumin",
      "1 tsp smoked paprika",
      "1 can (400 g) chopped tomatoes",
      "4 eggs",
      "Fresh parsley, to serve",
    ],
    steps: [
      "Cook onion, pepper and zucchini in oil for 6 minutes until soft.",
      "Add cumin and paprika, stir 30 seconds, then pour in tomatoes. Simmer 6 minutes.",
      "Make 4 wells with a spoon and crack an egg into each.",
      "Cover and cook on low 6–8 minutes until whites are set.",
      "Scatter parsley and serve with bread.",
    ],
    substitutions: [
      "Add a handful of feta at the end (no longer dairy-free).",
      "Use jarred roasted peppers to save chopping.",
    ],
    storage: "Best eaten fresh. Leftover sauce (without eggs) keeps 3 days in the fridge.",
  },
  {
    slug: "berry-yogurt-overnight-oats",
    title: "Berry Yogurt Overnight Oats",
    image: oats,
    imageAlt: "Glass jar layered with oats, yogurt, strawberries, blueberries and a drizzle of honey",
    intro: "Five minutes the night before, zero minutes in the morning. Your future self will thank you.",
    mealType: "Breakfast",
    diets: ["Vegetarian", "High-protein"],
    collections: ["ready-20", "beginner"],
    prepMinutes: 5, cookMinutes: 0, servings: 1, difficulty: "Easy",
    ingredients: [
      "1/2 cup rolled oats",
      "1/2 cup milk of choice",
      "1/3 cup Greek yogurt",
      "1 tsp chia seeds",
      "1 tsp honey",
      "Handful of mixed berries",
    ],
    steps: [
      "Stir oats, milk, yogurt, chia and honey together in a jar.",
      "Seal and refrigerate overnight (at least 4 hours).",
      "In the morning, stir, top with berries and an extra drizzle of honey.",
    ],
    substitutions: [
      "Use plant yogurt and maple syrup to make it vegan.",
      "Use certified gluten-free oats if needed.",
    ],
    storage: "Keeps in the fridge up to 3 days — make a few jars at once.",
  },
];

export const getRecipe = (slug: string) => recipes.find((r) => r.slug === slug);
export const byCollection = (c: Collection) => recipes.filter((r) => r.collections.includes(c));
