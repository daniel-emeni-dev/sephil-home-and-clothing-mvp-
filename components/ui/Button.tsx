import { ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "whatsapp";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-primary text-white hover:opacity-90",

    secondary:
      "bg-surface border border-border text-text-primary hover:bg-surface-secondary",

    outline:
      `
    border
    border-border
    bg-background
    text-text-primary
    hover:bg-surface-secondary
  `,

    ghost:
      "bg-transparent text-text-secondary hover:bg-surface-secondary",

    whatsapp:
      "bg-whatsapp text-white hover:opacity-90",
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-4
        py-3
        text-sm
        font-medium
        transition-all
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}