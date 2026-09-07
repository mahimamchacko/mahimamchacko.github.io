type BadgeVariant = "accent" | "neutral" | "outline";

type BadgeProps = {
  variant?: BadgeVariant;
  children: React.ReactNode;
};

const variantStyles: Record<BadgeVariant, string> = {
  accent:
    "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
  neutral: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
  outline:
    "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300",
};

function Badge({ variant = "neutral", children }: BadgeProps): React.ReactNode {
  return (
    <div className="flex items-start">
      <div
        className={`py-px px-2.5 rounded-full text-sm md:text-base ${variantStyles[variant]}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Badge;
export type { BadgeVariant };
