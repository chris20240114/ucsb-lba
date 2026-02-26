"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/schedule", label: "Schedule" },
  { href: "/recs", label: "Recommendations" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-slate-800 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-baseline gap-3">
          <Link
            href="/"
            className="font-serif text-xl font-bold tracking-tight hover:text-white"
          >
            The Weekender
          </Link>
          <span className="text-sm font-normal text-slate-300">
            April 18-20, 2026
          </span>
        </div>
        <nav className="flex items-center gap-8" aria-label="Main">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  isActive
                    ? "text-white underline decoration-2 underline-offset-4"
                    : "text-slate-300"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
