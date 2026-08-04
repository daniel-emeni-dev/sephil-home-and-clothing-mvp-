import type { ReactNode } from "react";

export default function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main
      className="
        bg-background
        px-4
        py-8
        sm:px-6
        lg:px-8
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {children}
      </div>
    </main>
  );
}