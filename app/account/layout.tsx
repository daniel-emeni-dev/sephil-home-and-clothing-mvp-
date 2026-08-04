import type { ReactNode } from "react";

export default function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main
      className="
        min-h-screen
        bg-background
        px-6
        py-10
        sm:py-12
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[calc(100vh-5rem)]
          w-full
          max-w-md
          items-center
          justify-center
        "
      >
        {children}
      </div>
    </main>
  );
}