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
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        {/* Logo and date */}
        <Link href="/" className="shrink-0">
          <div className="flex items-baseline gap-3 transition-opacity hover:opacity-80">
            <h1 className="font-serif text-2xl font-bold tracking-tight text-white">
              The Weekender
            </h1>
            <span className="text-sm font-normal text-slate-300">
              April 18-20, 2026
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav
          className="hidden flex-1 items-center justify-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "border-b-2 border-white pb-1 text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button (placeholder for future mobile nav) */}
        <button
          className="lg:hidden rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
