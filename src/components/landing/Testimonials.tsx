"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const quotes = [
  {
    text: "We moved our clinic intake off paper in an afternoon. Conditional logic alone saved our front desk hours a week.",
    name: "Amara Okonkwo",
    role: "Operations Lead, Riverside Clinic",
  },
  {
    text: "The version history saved us twice during a launch week. I could roll back a broken field in seconds.",
    name: "Daniyar Suleimenov",
    role: "Product Manager, Fintra",
  },
  {
    text: "Our event RSVP form handles three languages and a waitlist branch. Nothing else we tried could do that cleanly.",
    name: "Priya Raman",
    role: "Community Manager, Loopin",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const quote = quotes[index];

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <Quote className="mx-auto text-teal-500" size={28} />
      <p className="mt-6 font-display text-2xl italic leading-relaxed text-ink dark:text-white sm:text-3xl">
        “{quote.text}”
      </p>
      <p className="mt-6 text-sm text-ink/60 dark:text-white/55">
        {quote.name} &middot; {quote.role}
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          aria-label="Previous testimonial"
          onClick={() => setIndex((index - 1 + quotes.length) % quotes.length)}
          className="glass-panel flex h-9 w-9 items-center justify-center rounded-full text-ink dark:text-white"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-1.5">
          {quotes.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i === index ? "bg-teal-500" : "bg-ink/20 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next testimonial"
          onClick={() => setIndex((index + 1) % quotes.length)}
          className="glass-panel flex h-9 w-9 items-center justify-center rounded-full text-ink dark:text-white"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
