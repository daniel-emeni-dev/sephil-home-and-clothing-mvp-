type AccountCardProps = {
  children: React.ReactNode;
};

export function AccountCard({
  children,
}: AccountCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-6
        shadow-sm
      "
    >
      {children}
    </div>
  );
}