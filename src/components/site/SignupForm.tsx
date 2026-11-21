import { useState, type FormEvent } from "react";

// Setup-ready placeholder: connect this to your email provider (e.g. Mailchimp, ConvertKit) in handleSubmit.
export function SignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setStatus("error");
    setStatus("done");
  }

  if (status === "done")
    return <p role="status" className="rounded-xl bg-fresh-soft p-4 font-bold text-fresh">You're on the list! Weekly recipe ideas are coming your way.</p>;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="signup-email" className="sr-only">Email address</label>
      <input id="signup-email" type="email" autoComplete="email" placeholder="you@example.com" value={email}
        onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
        aria-invalid={status === "error"} aria-describedby={status === "error" ? "signup-error" : undefined}
        className="min-h-12 flex-1 rounded-full border-2 border-input bg-card px-5 text-foreground" />
      <button type="submit" className="btn btn-primary">Send me recipes</button>
      {status === "error" && <p id="signup-error" role="alert" className="text-sm font-bold text-destructive sm:basis-full">Please enter a valid email address.</p>}
    </form>
  );
}
