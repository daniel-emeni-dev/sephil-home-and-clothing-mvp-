import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`
        w-full
        rounded-xl
        border
        border-border
        bg-surface
        px-3
        py-2.5
        text-sm
        text-text-primary
        outline-none
        transition-all
        placeholder:text-text-muted
        focus:ring-1
        focus:ring-accent
        ${className}
      `}
      {...props}
    />
  );
}