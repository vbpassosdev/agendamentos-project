"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BellRing, ChevronRight, Search } from "lucide-react";
import { navigationItems } from "@/components/admin/config";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
  mobile?: boolean;
}

export function AdminSidebar({ mobile = false }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex h-full flex-col",
        mobile
          ? "rounded-[32px] bg-transparent px-1 py-2"
          : "sticky top-0 hidden h-screen w-[288px] shrink-0 border-r border-white/60 bg-[linear-gradient(180deg,rgba(255,248,246,0.96),rgba(248,240,237,0.88))] px-5 py-6 backdrop-blur xl:flex",
      )}
    >
      <div className="rounded-[28px] border border-white/70 bg-white/75 p-5 shadow-[0_24px_70px_-40px_rgba(88,58,55,0.45)]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
          Atelier Suite
        </p>
        <div className="mt-3 flex items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl text-[var(--foreground)]">
              Bela Agenda
            </h1>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Gestao premium para beleza, equipe e experiencia.
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#8a5a55,#dfb5ad)] text-white">
            <BellRing className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 px-4 py-3">
        <Search className="h-4 w-4 text-[var(--muted-foreground)]" />
        <span className="text-sm text-[var(--muted-foreground)]">
          Buscar cliente, horario ou equipe
        </span>
      </div>

      <nav className="mt-6 space-y-2">
        {navigationItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-4 rounded-[24px] px-4 py-3 transition duration-200",
                isActive
                  ? "bg-[linear-gradient(135deg,rgba(138,90,85,0.96),rgba(196,143,134,0.92))] text-white shadow-[0_20px_36px_-26px_rgba(123,75,70,0.95)]"
                  : "text-[var(--muted-foreground)] hover:bg-white/80 hover:text-[var(--foreground)]",
              )}
            >
              <div
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-2xl transition",
                  isActive
                    ? "bg-white/20"
                    : "bg-[var(--panel-strong)] text-[var(--accent-strong)] group-hover:bg-white",
                )}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{item.label}</p>
                <p
                  className={cn(
                    "truncate text-xs",
                    isActive ? "text-white/70" : "text-[var(--muted-foreground)]",
                  )}
                >
                  {item.description}
                </p>
              </div>
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition",
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                )}
              />
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-[28px] border border-white/70 bg-white/80 p-5">
        <div className="flex items-center gap-4">
          <Avatar name="Helena Duarte" size="lg" />
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">
              Helena Duarte
            </p>
            <p className="text-sm text-[var(--muted-foreground)]">
              Gestora do salao
            </p>
          </div>
        </div>
        <div className="mt-5 rounded-2xl bg-[var(--panel)] p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[var(--muted-foreground)]">Meta semanal</span>
            <span className="font-semibold text-[var(--foreground)]">82%</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-white">
            <div className="h-2 w-[82%] rounded-full bg-[linear-gradient(90deg,#8a5a55,#dfb5ad)]" />
          </div>
        </div>
      </div>
    </aside>
  );
}
