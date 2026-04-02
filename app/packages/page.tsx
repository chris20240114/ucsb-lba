import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-emerald-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const packages = [
  {
    name: "Basic Package",
    price: "$500",
    tagline: "Perfect for smaller organizations getting started",
    features: [
      "5 attendee passes",
      "Access to all conference sessions",
      "Networking events",
      "Welcome package",
      "Conference materials",
    ],
    popular: false,
  },
  {
    name: "Professional Package",
    price: "$900",
    tagline: "Ideal for established organizations",
    features: [
      "10 attendee passes",
      "Access to all conference sessions",
      "Networking events",
      "Welcome package",
      "Conference materials",
      "Priority seating at keynotes",
      "Lunch included for all days",
      "Organization logo on website",
    ],
    popular: true,
  },
  {
    name: "Premium Package",
    price: "$1,500",
    tagline: "Maximum value for larger delegations",
    features: [
      "15 attendee passes",
      "Access to all conference sessions",
      "VIP networking events",
      "Premium welcome package",
      "Conference materials",
      "Reserved seating at all events",
      "All meals included",
      "Organization logo featured prominently",
      "Dedicated meeting room (4 hours)",
      "Social media shoutouts",
    ],
    popular: false,
  },
];

export default function PackagesPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-stone-100">
      {/* Event Packages Section */}
      <section className="mx-auto max-w-6xl px-6 py-14">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-900 text-center">
            Event Packages
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 text-lg leading-relaxed">
            Choose the perfect package for your business organization. All
            packages include access to workshops, keynote speakers, and
            networking opportunities throughout the weekend.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`group relative flex flex-col rounded-lg bg-white shadow-md transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl ${
                  pkg.popular ? "ring-2 ring-sky-500 ring-offset-2 shadow-lg hover:shadow-xl" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <span className="rounded bg-sky-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="rounded-t-lg bg-slate-700 px-6 py-6 text-white transition-colors duration-200 group-hover:bg-slate-600">
                  <h2 className="font-serif text-xl font-bold">{pkg.name}</h2>
                  <p className="mt-2 font-serif text-3xl font-bold">{pkg.price}</p>
                  <p className="mt-1 text-sm text-slate-200">{pkg.tagline}</p>
                </div>
                <div className="flex flex-1 flex-col px-6 py-6">
                  <ul className="space-y-3 text-slate-700">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/purchase"
                    className="mt-8 block w-full rounded-lg bg-slate-700 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-600 hover:shadow-md"
                  >
                    Select Package
                  </Link>
                </div>
              </article>
            ))}
          </div>
      </section>

      {/* Important Information */}
      <section className="bg-slate-200/80 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-2xl font-bold text-slate-900">
            Important Information
          </h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Registration Deadline
                </h3>
                <p className="mt-1 text-slate-700">
                  Early bird pricing available until April 1, 2026. Standard
                  pricing applies after this date.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Cancellation Policy
                </h3>
                <p className="mt-1 text-slate-700">
                  Full refund available until March 20, 2026. 50% refund until
                  April 5, 2026.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900">Payment Terms</h3>
                <p className="mt-1 text-slate-700">
                  50% deposit required at booking, with balance due by April 10,
                  2026.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Questions?</h3>
                <p className="mt-1 text-slate-700">
                  Contact us at{" "}
                  <a
                    href="mailto:lba@ucsb.edu"
                    className="text-slate-900 underline hover:no-underline"
                  >
                    lba@ucsb.edu
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:+18055550123"
                    className="text-slate-900 underline hover:no-underline"
                  >
                    (805) 555-0123
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      <Footer />
    </>
  );
}
