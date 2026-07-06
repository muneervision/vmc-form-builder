"use client";

import { useAuth } from "@/lib/auth/AuthContext";
import { FileText, Inbox, TrendingUp, PlusSquare } from "lucide-react";
import Link from "next/link";

const quickStats = [
  { label: "Forms", value: "0", icon: FileText },
  { label: "Responses", value: "0", icon: Inbox },
  { label: "Completion rate", value: "—", icon: TrendingUp },
];

export default function DashboardHome() {
  const { user } = useAuth();
  const firstName = user?.displayName?.split(" ")[0] ?? "there";

  return (
    <div className="p-8">
      <h1 className="font-display text-3xl text-ink dark:text-white">Welcome, {firstName}</h1>
      <p className="mt-1 text-sm text-ink/60 dark:text-white/55">
        Here's what's on the drafting table.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {quickStats.map((stat) => (
          <div
            key={stat.label}
            className="glass-panel rounded-xl p-5"
          >
            <stat.icon size={18} className="text-teal-500" />
            <p className="mt-3 font-display text-2xl text-ink dark:text-white">{stat.value}</p>
            <p className="font-mono text-xs uppercase text-ink/45 dark:text-white/40">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 glass-panel flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-teal-500/40 py-16 text-center">
        <PlusSquare size={28} className="text-teal-500" />
        <h2 className="mt-4 font-display text-xl text-ink dark:text-white">No forms yet</h2>
        <p className="mt-1 max-w-sm text-sm text-ink/60 dark:text-white/55">
          Draft your first form from scratch or start from a template — the builder is coming
          in the next module.
        </p>
        <Link
          href="/dashboard/templates"
          className="mt-5 rounded-md bg-teal-500 px-5 py-2.5 text-sm font-medium text-paper hover:bg-teal-600"
        >
          Browse templates
        </Link>
      </div>
    </div>
  );
}
