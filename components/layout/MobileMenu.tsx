import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen(!isOpen)}
        className="
          relative
          z-[60]
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          transition-colors
          duration-300 
          hover:bg-surface-secondary
          lg:hidden
        "
      >
        <span
  className={`
    absolute
    h-[2px]
    w-5
    rounded-full
    bg-text-primary
    transition-all
    duration-300
    ease-in-out
    ${
      isOpen
        ? "rotate-45 translate-y-0"
        : "-translate-y-[6px]"
    }
  `}
/>

<span
  className={`
    absolute
    h-[2px]
    w-5
    rounded-full
    bg-text-primary
    transition-all
    duration-300
    ease-in-out
    ${
      isOpen
        ? "opacity-0 scale-0"
        : "opacity-100 scale-100"
    }
  `}
/>

<span
  className={`
    absolute
    h-[2px]
    w-5
    rounded-full
    bg-text-primary
    transition-all
    duration-300
    ease-in-out
    ${
      isOpen
        ? "-rotate-45 translate-y-0"
        : "translate-y-[6px]"
    }
  `}
/>
      </button>

      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed
          inset-0
          z-40
          bg-black/20
          backdrop-blur-xl
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      <aside
        id="mobile-navigation"
        className={`
          fixed
          top-0
          right-0
          z-50
          flex
          h-screen
          w-[85%]
          max-w-sm
          flex-col
          bg-surface
          shadow-[0_20px_80px_rgba(0,0,0,0.18)]
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div
  className="
    border-b
    border-border
    px-6
    py-5
  "
>
  <h2
    className="
      text-lg
      font-semibold
      tracking-tight
      text-text-primary
    "
  >
    Sephil
  </h2>
</div>

        <nav
  className="
    flex-1
    overflow-y-auto
    px-4
    py-5
  "
>
  <div className="mb-8">
    <p
      className="
        mb-3
        px-4
        text-xs
        font-semibold
        uppercase
        tracking-[0.18em]
        text-text-muted
      "
    >
      Main
    </p>

    <ul className="space-y-1">
      {[
        {
          name: "Home",
          href: "/",
        },
        {
          name: "Shop",
          href: "/shop",
        },
        {
          name: "Categories",
          href: "/categories",
        },
      ].map((item, index) => (
        <li
  key={item.name}
  style={{
    transitionDelay: `${index * 60}ms`,
  }}
  className={`
    transition-all
    duration-300

    ${
      isOpen
        ? "translate-x-0 opacity-100"
        : "translate-x-4 opacity-0"
    }
  `}
>
          <Link
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`
  group
  flex
  items-center
  justify-between
  rounded-xl
  px-4
  py-4
  transition-all
  duration-200

  ${
    pathname === item.href
      ? "bg-surface-secondary"
      : "hover:bg-surface-secondary"
  }
`}
          >
            <span
              className={`
  text-base
  font-medium

  ${
    pathname === item.href
      ? "text-primary"
      : "text-text-primary"
  }
`}
            >
              {item.name}
            </span>

            <ChevronRight
              size={18}
              className="
                text-text-muted
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </Link>
        </li>
      ))}
    </ul>
  </div>

  <div>
    <p
      className="
        mb-3
        px-4
        text-xs
        font-semibold
        uppercase
        tracking-[0.18em]
        text-text-muted
      "
    >
      More
    </p>

    <ul className="space-y-1">
      {[
        {
          name: "About",
          href: "/about",
        },
        {
          name: "Contact",
          href: "/contact",
        },
      ].map((item, index) => (
        <li
  key={item.name}
  style={{
    transitionDelay: `${index * 60}ms`,
  }}
  className={`
    transition-all
    duration-300

    ${
      isOpen
        ? "translate-x-0 opacity-100"
        : "translate-x-4 opacity-0"
    }
  `}
>
          <Link
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="
              group
              flex
              items-center
              justify-between
              rounded-xl
              px-4
              py-4
              transition-all
              duration-200
              hover:bg-surface-secondary
            "
          >
            <span
              className={`
  text-base
  font-medium

  ${
    pathname === item.href
      ? "text-primary"
      : "text-text-primary"
  }
`}
            >
              {item.name}
            </span>

            <ChevronRight
              size={18}
              className="
                text-text-muted
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </Link>
        </li>
      ))}
    </ul>
  </div>
</nav>

        <div
  className="
    border-t
    border-border
    px-6
    py-6
  "
>
  <p
    className="
      text-sm
      leading-6
      text-text-secondary
    "
  >
    Curated products for modern living.
  </p>
</div>
      </aside>
    </>
  );
}

