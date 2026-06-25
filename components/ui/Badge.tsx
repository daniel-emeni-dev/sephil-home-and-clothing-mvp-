type BadgeVariant =
  | "featured"
  | "sale"
  | "new"
  | "success"
  | "warning"
  | "muted";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({
  children,
  variant = "muted",
  className = "",
}: BadgeProps) {
  const variants = {
    featured:
      "bg-surface-secondary text-text-primary",

    sale:
      "bg-sale text-white",

    new:
      "bg-info-light text-info",

    success:
      "bg-success-light text-success",

    warning:
      "bg-warning-light text-warning",

    muted:
      "bg-surface-muted text-text-secondary",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-2.5
        py-1
        text-xs
        font-medium
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}