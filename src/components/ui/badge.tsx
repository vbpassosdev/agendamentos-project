import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "rose" | "amber" | "emerald" | "slate";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

const tones: Record<BadgeTone, string> = {
  rose: "bg-[#f8e4e2] text-[#9d5d59]",
  amber: "bg-[#fff0d8] text-[#b07b1c]",
  emerald: "bg-[#e5f4ed] text-[#34715a]",
  slate: "bg-[#eef0f4] text-[#5f6572]",
};

export function Badge({ className, tone = "slate", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
