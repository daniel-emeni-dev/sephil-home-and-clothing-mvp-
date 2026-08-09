type AccountHeaderProps = {
  title: string;
  description: string;
};

export function AccountHeader({
  title,
  description,
}: AccountHeaderProps) {
  return (
    <header className="space-y-3">
      <h1
        className="
          text-3xl
          font-semibold
          tracking-tight
          text-text-primary
        "
      >
        {title}
      </h1>

      <p
        className="
          max-w-md
          leading-7
          text-text-secondary
        "
      >
        {description}
      </p>
    </header>
  );
}