type AccountDividerProps = {
  text?: string;
};

export function AccountDivider({
  text = "OR",
}: AccountDividerProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-border" />

      <span
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.18em]
            text-text-muted
          "
        >
            
        {text}
      </span>

      <div className="h-px flex-1 bg-border" />
    </div>
  );
}