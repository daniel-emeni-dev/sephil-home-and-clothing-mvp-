type AccountSectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function AccountSection({
  title,
  description,
  children,
}: AccountSectionProps) {
  return (
    <section
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-6
      "
    >
      <div className="mb-6">
        <h2
          className="
            text-lg
            font-semibold
            text-text-primary
          "
        >
          {title}
        </h2>

        {description && (
          <p
            className="
              mt-1
              text-sm
              text-text-secondary
            "
          >
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}