"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  PlusSquare,
  LayoutTemplate,
  Inbox,
  BarChart3,
  Plug,
  CreditCard,
  Bell,
  Settings,
  User,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/lib/auth/AuthContext";
import { useRouter } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/forms", label: "My Forms", icon: FileText },
  { href: "/dashboard/forms/new", label: "Create Form", icon: PlusSquare },
  { href: "/dashboard/templates", label: "Templates", icon: LayoutTemplate },
  { href: "/dashboard/responses", label: "Responses", icon: Inbox },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/integrations", label: "Integrations", icon: Plug },
  { href: "/dashboard/billing", label: "Billing", icon: CreditCard },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
  { href: "/dashboard/profile", label: "Profile", icon: User },
  { href: "/dashboard/help", label: "Help", icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();
  const { logOut, user } = useAuth();
  const router = useRouter();

  async function handleLogOut() {
    await logOut();
    router.push("/login");
  }

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-ink/10 dark:border-white/10 bg-paper dark:bg-night">
      <div className="px-6 py-6">
        <span className="font-display text-lg italic text-ink dark:text-white">vMc</span>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto px-3">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                active
                  ? "bg-teal-500/10 text-teal-500 font-medium"
                  : "text-ink/65 dark:text-white/60 hover:bg-ink/5 dark:hover:bg-white/5"
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-ink/10 dark:border-white/10 px-3 py-4">
        <p className="truncate px-3 text-xs text-ink/45 dark:text-white/40">{user?.email}</p>
        <button
          onClick={handleLogOut}
          className="mt-2 flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-ink/65 dark:text-white/60 hover:bg-ink/5 dark:hover:bg-white/5"
        >
          <LogOut size={16} />
          Log out
        </button>
      </div>
    </aside>
  );
}
