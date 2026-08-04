type AccountCardProps = {
  children: React.ReactNode;
};

export function AccountCard({
  children,
}: AccountCardProps) {
  return (
    <div
  className="
    w-full
    rounded-2xl
    border
    border-border
    bg-surface
    p-6
    shadow-sm
    sm:p-8
  "
>
      {children}
    </div>
  );
}