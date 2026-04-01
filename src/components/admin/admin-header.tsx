"use client";

import { Menu, Plus, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminHeaderProps {
  title: string;
  description: string;
  actionLabel: string;
  onMenuClick: () => void;
}

export function AdminHeader({
  title,
  description,
  actionLabel,
  onMenuClick,
}: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 mb-8 rounded-[28px] border border-white/70 bg-white/78 p-4 shadow-[0_24px_60px_-42px_rgba(70,46,44,0.4)] backdrop-blur">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-3">
          <button
            onClick={onMenuClick}
            className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--panel)] text-[var(--foreground)] xl:hidden"
            aria-label="Abrir navegacao"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
              Operacao do dia
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
              {title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted-foreground)]">
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex h-12 items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4">
            <Search className="h-4 w-4 text-[var(--muted-foreground)]" />
            <input
              placeholder="Buscar por nome, procedimento ou observacao"
              className="w-full bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)] md:min-w-[280px]"
            />
          </div>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              icon={<SlidersHorizontal className="h-4 w-4" />}
            >
              Filtros
            </Button>
            <Button icon={<Plus className="h-4 w-4" />}>{actionLabel}</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
