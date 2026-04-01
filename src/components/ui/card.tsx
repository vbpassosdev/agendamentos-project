import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  eyebrow?: string;
  action?: ReactNode;
}

export function Card({
  className,
  title,
  eyebrow,
  action,
  children,
  ...props
}: CardProps) {
  return (
    <section
      className={cn(
        "rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_-38px_rgba(70,46,44,0.4)] backdrop-blur",
        className,
      )}
      {...props}
    >
      {(title || eyebrow || action) && (
        <header className="mb-5 flex items-start justify-between gap-4">
          <div>
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                {title}
              </h2>
            ) : null}
          </div>
          {action}
        </header>
      )}
      {children}
    </section>
  );
}
