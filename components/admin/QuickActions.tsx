import Link from "next/link";

export function QuickActions() {
  const actions = [
    {
      title: "Manage Products",
      href: "/admin/products",
    },
    {
      title: "View Orders",
      href: "/admin/orders",
    },
  ];

  return (
    <section className="space-y-4">
      <h2
        className="
          text-xl
          font-semibold
          text-text-primary
        "
      >
        Quick Actions
      </h2>

      <div className="grid gap-4">
        {actions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="
              rounded-xl
              border
              border-border
              bg-surface
              p-5
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-sm
            "
          >
            <p className="font-medium text-text-primary">
              {action.title}
            </p>

            <p
              className="
                mt-1
                text-sm
                text-text-secondary
              "
            >
              Open →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}