import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  image?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-9 w-9 text-xs",
  md: "h-11 w-11 text-sm",
  lg: "h-14 w-14 text-base",
};

export function Avatar({ name, image, size = "md" }: AvatarProps) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className={cn("rounded-2xl object-cover", sizes[size])}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#c48f86,#f1d4ce)] font-semibold text-white shadow-[0_14px_28px_-20px_rgba(120,72,66,1)]",
        sizes[size],
      )}
    >
      {initials}
    </div>
  );
}
