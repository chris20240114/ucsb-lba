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
    name: "Weekender Banda Night Tickets",
    price: "$20",
    tagline: "",
    features: [
      "Date: April 17th, 2026",
      "Time: 9pm - 12am",
    ],
    popular: false,
    link: "https://docs.google.com/forms/d/1x4zcummbeFgz7XisrGokxkuep4kNjdDVdGEUsuvYaRs/edit",
    sold: false,
  },
  {
    name: "Weekender Gauchella Party Tickets",
    price: "$10",
    tagline: "",
    features: [
      "Date: April 18th, 2026",
      "Time: 9pm - 12am",
      "Theme: Rave, Coachella, etc...",
    ],
    popular: false,
    link: "https://docs.google.com/forms/d/1TiKkFoaXuEK0C9yIe8PTI7kav63bNHY7kCAa3ybKkJo/edit",
    sold: false,
  },
  {
    name: "Weekender Package Tickets",
    price: "$45",
    tagline: "",
    features: [
      "Banda Night Ticket",
      "Gauchella Ticket",
      "Weekender 2026 T-Shirt",
      "Message us directly for more information!",
    ],
    popular: false,
    link: "https://www.instagram.com/ucsb_lba/",
    sold: true,
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
            Event Tickets
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 text-lg leading-relaxed">
            Secure your spot for an exciting weekend! All tickets include access to special events, social experiences, and opportunities to connect with other attendees.
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
                    href={pkg.link}
                    target="_blank"
                    className="mt-8 block w-full rounded-lg bg-slate-700 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-600 hover:shadow-md"
                  >
                    {pkg.sold ? "Sold Out" : "Purchase"}
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
                {/* <h3 className="font-semibold text-slate-900">
                  Registration Deadline
                </h3>
                <p className="mt-1 text-slate-700">
                  Early bird pricing available until April 1, 2026. Standard
                  pricing applies after this date.
                </p> */}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Cancellation Policy
                </h3>
                <p className="mt-1 text-slate-700">
                  No refunds will be issued for cancellations. However, tickets are transferable. If you cannot attend, please reach out to us to transfer your ticket to another attendee.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
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
                  or via our{" "}
                  <a
                    href="https://www.instagram.com/ucsb_lba/"
                    target="_blank"
                    className="text-slate-900 underline hover:no-underline"
                  >
                    Instagram
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
