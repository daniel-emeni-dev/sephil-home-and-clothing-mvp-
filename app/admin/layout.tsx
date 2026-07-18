import type { ReactNode } from "react";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  return (
    <main
      className="
        min-h-screen
        bg-background
      "
    >
      {children}
    </main>
  );
}