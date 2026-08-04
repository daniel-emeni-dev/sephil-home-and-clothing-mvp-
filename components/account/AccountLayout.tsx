type AccountLayoutProps = {
  children: React.ReactNode;
};

export function AccountLayout({
  children,
}: AccountLayoutProps) {
  return (
    <div
      className="
        mx-auto
        max-w-md
      "
    >
      {children}
    </div>
  );
}