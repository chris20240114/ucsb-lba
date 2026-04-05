"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/weekender-image.png"
          alt="The Weekender - Networking event with professionals in a modern venue"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center sm:px-12">
        <div className="mx-auto max-w-2xl space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              The Weekender
            </h1>
            <p className="text-xl font-semibold text-slate-100 sm:text-2xl">
              April 17-19, 2026
            </p>
            <p className="text-lg text-slate-200 sm:text-xl">
              Network, connect, and build meaningful relationships with your peers
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:justify-center">
            <Link
              href="/tickets"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Explore Tickets
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
