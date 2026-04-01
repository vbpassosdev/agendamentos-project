import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-2xl bg-[linear-gradient(90deg,rgba(229,220,218,0.8),rgba(255,255,255,0.9),rgba(229,220,218,0.8))] bg-[length:200%_100%]",
        className,
      )}
    />
  );
}
