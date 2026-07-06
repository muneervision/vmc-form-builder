"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth/AuthContext";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper dark:bg-night">
        <span className="font-mono text-xs text-ink/50 dark:text-white/50">loading…</span>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex bg-paper dark:bg-night">
      <Sidebar />
      <div className="min-h-screen flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
