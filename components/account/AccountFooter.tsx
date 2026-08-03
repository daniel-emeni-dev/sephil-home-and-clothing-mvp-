import Link from "next/link";

type AccountFooterProps = {
  text: string;
  linkText: string;
  href: string;
};

export function AccountFooter({
  text,
  linkText,
  href,
}: AccountFooterProps) {
  return (
    <p
      className="
        text-center
        text-sm
        text-text-secondary
      "
    >
      {text}{" "}

      <Link
        href={href}
        className="
          font-medium
          text-primary
          transition-colors
          hover:underline
        "
      >
        {linkText}
      </Link>
    </p>
  );
}