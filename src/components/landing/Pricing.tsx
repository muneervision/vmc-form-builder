import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Unlimited forms", "Unlimited responses", "Core field types", "vMc footer branding"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    features: [
      "Everything in Free",
      "White-label branding",
      "Conditional logic & multi-step",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Start Pro trial",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$49",
    period: "/month",
    features: [
      "Everything in Pro",
      "Custom domain",
      "All integrations",
      "Role-based team access",
      "Audit logs",
    ],
    cta: "Talk to sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-teal-500">pricing</span>
        <h2 className="mt-3 font-display text-3xl text-ink dark:text-white sm:text-4xl">
          Simple plans, no surprises
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-8 ${
              plan.highlighted
                ? "bg-teal-500 text-paper shadow-xl scale-[1.02]"
                : "glass-panel text-ink dark:text-white"
            }`}
          >
            <h3 className="font-display text-xl">{plan.name}</h3>
            <p className="mt-4">
              <span className="font-display text-4xl">{plan.price}</span>
              <span className={plan.highlighted ? "text-paper/70" : "text-ink/50 dark:text-white/50"}>
                {" "}
                {plan.period}
              </span>
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={16} className="mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.highlighted ? "glass" : "outline"}
              className="mt-8 w-full"
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
