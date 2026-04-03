"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Main footer content */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Organization info */}
          <div>
            <h3 className="font-serif text-lg font-bold">The Weekender</h3>
            <p className="mt-2 text-sm text-slate-300">
              Latinx Business Association
            </p>
            <p className="mt-1 text-xs text-slate-400">
              University of California, Santa Barbara
            </p>
          </div>

          {/* Event details */}
          <div>
            <h4 className="font-medium text-white">Event Details</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>📅 April 18-20, 2026</li>
              <li>📍 UCSB Campus</li>
              <li>Network • Learn • Connect</li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-medium text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="/packages"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="/schedule"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="/recs"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Recommendations
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-8 border-t border-slate-700 pt-8">
          <p className="text-center text-sm text-slate-400">
            © {currentYear} Latinx Business Association at UC Santa Barbara.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
