import { Layers, GitBranch, Zap, ShieldCheck, LineChart, Puzzle } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "40+ field types",
    body: "Text, ratings, signatures, file uploads, matrix tables — every field measured to fit your data, not the other way around.",
  },
  {
    icon: GitBranch,
    title: "Conditional logic",
    body: "Show, skip, or branch based on any answer. Build multi-step flows that feel like a conversation, not a form.",
  },
  {
    icon: Zap,
    title: "Autosave, every 5 seconds",
    body: "Version history and undo/redo mean you can experiment freely — nothing you build is ever one click from gone.",
  },
  {
    icon: ShieldCheck,
    title: "Built on Firebase",
    body: "Auth, storage, and data rules enforced server-side. Your respondents' data stays yours, encrypted and access-controlled.",
  },
  {
    icon: LineChart,
    title: "Live analytics",
    body: "Completion rate, drop-off points, device breakdowns — know exactly where a form is working and where it isn't.",
  },
  {
    icon: Puzzle,
    title: "Integrations that fit",
    body: "Sheets, Stripe, Slack, webhooks — responses go where your team already works, the moment they arrive.",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 max-w-xl">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-teal-500">
          the toolkit
        </span>
        <h2 className="mt-3 font-display text-3xl text-ink dark:text-white sm:text-4xl">
          Everything a form needs, nothing it doesn't.
        </h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="border-t border-ink/10 dark:border-white/10 pt-5">
            <f.icon size={20} className="text-teal-500" />
            <h3 className="mt-4 font-display text-lg text-ink dark:text-white">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-white/55">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
