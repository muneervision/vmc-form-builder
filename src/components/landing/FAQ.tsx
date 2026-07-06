"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Is there a free plan?",
    a: "Yes. The free plan includes unlimited forms and responses while you're getting started, with vMc branding on the form footer.",
  },
  {
    q: "Can I use my own domain for forms?",
    a: "Custom domains are available on paid plans, along with full white-label branding: logo, colors, fonts, and custom CSS.",
  },
  {
    q: "Where do responses get stored?",
    a: "Every response is written directly to your project's Firestore database, protected by security rules scoped to your account.",
  },
  {
    q: "Can I export my data?",
    a: "Yes — CSV, Excel, PDF, and raw JSON export are available for every form, including bulk export across forms.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="mb-10 text-center font-display text-3xl text-ink dark:text-white">
        Questions, answered
      </h2>
      <div className="divide-y divide-ink/10 dark:divide-white/10">
        {faqs.map((faq, i) => (
          <div key={faq.q} className="py-5">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-medium text-ink dark:text-white">{faq.q}</span>
              <Plus
                size={18}
                className={`shrink-0 text-teal-500 transition-transform ${
                  open === i ? "rotate-45" : ""
                }`}
              />
            </button>
            {open === i && (
              <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-white/55">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
