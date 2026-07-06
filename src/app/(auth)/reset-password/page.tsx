"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/lib/auth/AuthContext";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
});
type FormValues = z.infer<typeof schema>;

export default function ResetPasswordPage() {
  const { resetPassword } = useAuth();
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setServerError(null);
    setSubmitting(true);
    try {
      await resetPassword(values.email);
      setSent(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Couldn't send the reset email.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-blueprint-grid px-6">
      <div className="glass-panel w-full max-w-sm rounded-2xl p-8">
        <h1 className="font-display text-2xl text-ink dark:text-white">Reset your password</h1>
        <p className="mt-1 text-sm text-ink/60 dark:text-white/55">
          We'll email you a link to set a new one.
        </p>

        {sent ? (
          <p className="mt-6 text-sm text-teal-500">
            Check your inbox — a reset link is on its way.
          </p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-ink/70 dark:text-white/60">Email</label>
              <input
                type="email"
                {...register("email")}
                className="mt-1 w-full rounded-md border border-ink/15 dark:border-white/15 bg-transparent px-3 py-2 text-sm text-ink dark:text-white outline-none focus:border-teal-500"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>
            {serverError && <p className="text-sm text-red-500">{serverError}</p>}
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Sending…" : "Send reset link"}
            </Button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-ink/60 dark:text-white/55">
          <Link href="/login" className="text-teal-500 hover:underline">
            Back to login
          </Link>
        </p>
      </div>
    </main>
  );
}
