"use client";

import { motion } from "framer-motion";
import { GripVertical, Type, Mail, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Link from "next/link";

const draftFields = [
  { icon: Type, label: "Full name", meta: "text" },
  { icon: Mail, label: "Email address", meta: "email" },
  { icon: ChevronDown, label: "Country", meta: "select" },
  { icon: Star, label: "How was your visit?", meta: "rating" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blueprint-grid">
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-lg italic text-ink dark:text-white">vMc</span>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-ink/70 dark:text-white/70 hover:text-teal-500">
            Log in
          </Link>
          <Button size="sm" onClick={() => (window.location.href = "/signup")}>
            Start free
          </Button>
          <ThemeToggle />
        </div>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 px-6 pb-28 pt-16 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-teal-500">
            field-by-field, on your terms
          </span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-ink dark:text-white sm:text-6xl">
            Draft forms like you draft <em className="italic text-teal-500">blueprints</em>.
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink/70 dark:text-white/60">
            Snap fields into place, wire up the logic, and watch responses land in real time.
            No guesswork — every field measured, every rule visible.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" onClick={() => (window.location.href = "/signup")}>
              Start building — it's free
            </Button>
            <Button size="lg" variant="outline" onClick={() => (window.location.href = "#templates")}>
              Browse templates
            </Button>
          </div>
          <p className="mt-6 font-mono text-xs text-ink/40 dark:text-white/40">
            no credit card &middot; unlimited forms on the free plan
          </p>
        </div>

        {/* Signature element: a drafting-table canvas with a field mid-snap onto the grid */}
        <div className="relative">
          <div className="glass-panel relative rounded-2xl p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs text-ink/50 dark:text-white/50">
                customer-feedback.form
              </span>
              <span className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-teal-400/70" />
                <span className="h-2 w-2 rounded-full bg-amber-400/70" />
              </span>
            </div>

            <div className="space-y-2.5">
              {draftFields.map((field, i) => (
                <motion.div
                  key={field.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 * i, duration: 0.5, ease: "easeOut" }}
                  className="snap-guide flex items-center gap-3 rounded-lg bg-paper/70 dark:bg-night/60 px-3 py-3"
                >
                  <GripVertical size={14} className="text-ink/30 dark:text-white/30" />
                  <field.icon size={16} className="text-teal-500" />
                  <span className="flex-1 text-sm text-ink dark:text-white/90">{field.label}</span>
                  <span className="font-mono text-[10px] uppercase text-ink/40 dark:text-white/40">
                    {field.meta}
                  </span>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.75, duration: 0.4, ease: "easeOut" }}
                className="flex items-center gap-3 rounded-lg border-2 border-dashed border-teal-500 bg-teal-50/60 dark:bg-teal-500/10 px-3 py-3"
              >
                <GripVertical size={14} className="text-teal-500" />
                <Star size={16} className="text-teal-500" />
                <span className="flex-1 text-sm font-medium text-teal-600 dark:text-teal-400">
                  Star rating
                </span>
                <span className="font-mono text-[10px] uppercase text-teal-500">snapping…</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
