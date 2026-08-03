import { ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "whatsapp";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  };

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-primary text-white hover:opacity-90",

    secondary:
      `
        border
        border-border
        bg-surface
        text-text-primary
        hover:bg-surface-secondary
      `,

    outline:
      `
        border
        border-border
        bg-background
        text-text-primary
        hover:bg-surface-secondary
      `,

    ghost:
      `
        bg-transparent
        text-text-secondary
        hover:bg-surface-secondary
      `,

    whatsapp:
      "bg-whatsapp text-white hover:opacity-90",
  };

  const sizes = {
    sm: `
      px-4
      py-2
      text-sm
    `,

    md: `
      px-5
      py-3
      text-sm
    `,

    lg: `
      px-7
      py-4
      text-base
    `,
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        font-medium
        transition-all
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}