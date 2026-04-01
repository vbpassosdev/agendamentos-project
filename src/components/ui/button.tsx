import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent-strong)] text-white shadow-[0_18px_40px_-24px_rgba(138,90,85,0.9)] hover:bg-[var(--accent)] active:translate-y-px",
  secondary:
    "border border-white/70 bg-white/80 text-[var(--foreground)] hover:border-[var(--accent-soft)] hover:bg-[var(--panel)] active:translate-y-px",
  ghost:
    "text-[var(--muted-foreground)] hover:bg-white/70 hover:text-[var(--foreground)] active:translate-y-px",
};

export function Button({
  className,
  variant = "primary",
  icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-2xl px-4 text-sm font-semibold transition duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
