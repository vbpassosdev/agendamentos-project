"use client";

import { ReactNode, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { pageMeta } from "@/components/admin/config";
import { AdminHeader } from "@/components/admin/admin-header";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { cn } from "@/lib/utils";

interface AdminShellProps {
  children: ReactNode;
}

export function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const meta = useMemo(() => pageMeta[pathname] ?? pageMeta["/"], [pathname]);

  return (
    <div className="relative min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-[1680px]">
        <AdminSidebar />

        <div
          className={cn(
            "fixed inset-0 z-40 bg-[#3f3232]/35 backdrop-blur-sm transition xl:hidden",
            mobileOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          )}
          onClick={() => setMobileOpen(false)}
        />

        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-[300px] border-r border-white/60 bg-[linear-gradient(180deg,rgba(255,248,246,0.98),rgba(248,240,237,0.95))] p-4 shadow-2xl transition xl:hidden",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="mb-4 ml-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-white"
            aria-label="Fechar navegacao"
          >
            <X className="h-5 w-5 text-[var(--foreground)]" />
          </button>
          <AdminSidebar mobile />
        </aside>

        <main className="flex-1 px-4 pb-8 pt-4 md:px-6 lg:px-8">
          <AdminHeader
            title={meta.title}
            description={meta.description}
            actionLabel={meta.actionLabel}
            onMenuClick={() => setMobileOpen(true)}
          />
          {children}
        </main>
      </div>
    </div>
  );
}
