export function DashboardHeader() {
  return (
    <header>
      <p
        className="
          text-sm
          text-text-secondary
        "
      >
        Admin Dashboard
      </p>

      <h1
        className="
          mt-1
          text-3xl
          font-semibold
          text-text-primary
        "
      >
        Welcome back 👋
      </h1>

      <p
        className="
          mt-2
          text-sm
          leading-6
          text-text-secondary
        "
      >
        Here's an overview of your store today.
      </p>
    </header>
  );
}