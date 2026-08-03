type AccountInputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function AccountInput({
  label,
  id,
  ...props
}: AccountInputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="
          text-sm
          font-medium
          text-text-primary
        "
      >
        {label}
      </label>

      <input
        id={id}
        {...props}
        className="
          w-full
          rounded-xl
          border
          border-border
          bg-surface
          px-4
          py-3
          text-sm
          text-text-primary
          outline-none
          transition-colors
          placeholder:text-text-muted
          focus:border-primary
        "
      />
    </div>
  );
}