"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/lib/auth/AuthContext";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
type FormValues = z.infer<typeof schema>;

export default function LoginPage() {
  const { logIn, logInWithGoogle } = useAuth();
  const router = useRouter();
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
      await logIn(values.email, values.password);
      router.push("/dashboard");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Couldn't log you in. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function onGoogle() {
    setServerError(null);
    try {
      await logInWithGoogle();
      router.push("/dashboard");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Google sign-in failed.");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-blueprint-grid px-6">
      <div className="glass-panel w-full max-w-sm rounded-2xl p-8">
        <span className="font-display text-lg italic text-ink dark:text-white">vMc</span>
        <h1 className="mt-4 font-display text-2xl text-ink dark:text-white">Welcome back</h1>
        <p className="mt-1 text-sm text-ink/60 dark:text-white/55">Log in to keep drafting.</p>

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
          <div>
            <label className="text-sm text-ink/70 dark:text-white/60">Password</label>
            <input
              type="password"
              {...register("password")}
              className="mt-1 w-full rounded-md border border-ink/15 dark:border-white/15 bg-transparent px-3 py-2 text-sm text-ink dark:text-white outline-none focus:border-teal-500"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          {serverError && <p className="text-sm text-red-500">{serverError}</p>}

          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? "Logging in…" : "Log in"}
          </Button>
        </form>

        <div className="mt-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-ink/10 dark:bg-white/10" />
          <span className="font-mono text-[10px] uppercase text-ink/40 dark:text-white/40">or</span>
          <span className="h-px flex-1 bg-ink/10 dark:bg-white/10" />
        </div>

        <Button variant="outline" className="mt-4 w-full" onClick={onGoogle}>
          Continue with Google
        </Button>

        <p className="mt-6 text-center text-sm text-ink/60 dark:text-white/55">
          <Link href="/reset-password" className="text-teal-500 hover:underline">
            Forgot password?
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-ink/60 dark:text-white/55">
          No account?{" "}
          <Link href="/signup" className="text-teal-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
