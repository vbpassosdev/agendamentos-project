import { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel: string;
  icon?: ReactNode;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[260px] flex-col items-center justify-center rounded-[28px] border border-dashed border-[var(--accent-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(245,233,229,0.72))] p-8 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-[var(--accent-strong)] shadow-[0_18px_40px_-30px_rgba(138,90,85,0.9)]">
        {icon ?? <Sparkles className="h-7 w-7" />}
      </div>
      <h3 className="text-xl font-semibold text-[var(--foreground)]">{title}</h3>
      <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted-foreground)]">
        {description}
      </p>
      <Button className="mt-6" variant="secondary">
        {actionLabel}
      </Button>
    </div>
  );
}
