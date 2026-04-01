# Implementation Guide for Team Pages

## Overview

This guide helps your teammates build their pages with consistent styling and professional quality. All pages share the same navbar, footer, and design system.

---

## For Santhusha - Purchasing Page

### Route: `/purchase` → `app/purchase/page.tsx`

### Recommended Structure

```jsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PurchasePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-900 text-white">
        {/* Hero section with title */}
        <section className="border-b border-slate-700 bg-slate-800 px-6 py-12">
          {/* Title and description */}
        </section>

        {/* Packages grid */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          {/* List of package cards */}
        </section>
      </main>
      <Footer />
    </>
  );
}
```

### Package Cards Example

```jsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {packages.map((pkg) => (
    <div
      key={pkg.id}
      className="rounded-lg border border-slate-700 bg-slate-800 p-6 shadow-md transition-all hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
      <p className="mt-2 text-slate-300">{pkg.description}</p>
      <p className="mt-4 text-2xl font-bold text-blue-400">{pkg.price}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {pkg.features.map((feature) => (
          <li key={feature}>✓ {feature}</li>
        ))}
      </ul>
      <button className="mt-6 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700">
        Select Package
      </button>
    </div>
  ))}
</div>
```

### Key Styling
- Container: `max-w-7xl mx-auto px-6`
- Cards: 3-column grid on desktop, responsive
- Use `space-y-2` for lists
- Checkmark: `✓` for features

---

## For Amir - Schedule Page

### Route: `/schedule` → `app/schedule/page.tsx`

### Recommended Structure

```jsx
<>
  <Header />
  <main className="min-h-screen bg-slate-900">
    {/* Timeline/Schedule section */}
    <section className="mx-auto max-w-7xl px-6 py-12">
      {/* Days with events/sessions */}
    </section>
  </main>
  <Footer />
</>
```

### Timeline Card Example

```jsx
<div className="space-y-6">
  {days.map((day) => (
    <div key={day.id} className="border-l-4 border-blue-600 pl-6">
      <h3 className="text-2xl font-bold text-white">{day.date}</h3>
      <div className="mt-4 space-y-4">
        {day.events.map((event) => (
          <div
            key={event.id}
            className="rounded-lg bg-slate-800 p-4 shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-400">
                  {event.time}
                </p>
                <h4 className="mt-1 text-lg font-semibold text-white">
                  {event.title}
                </h4>
                <p className="mt-2 text-slate-300">{event.description}</p>
              </div>
              <p className="text-sm text-slate-400">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
```

### Key Styling
- Left border accent: `border-l-4 border-blue-600`
- Time stamps: `text-sm text-blue-400`
- Use `space-y-6` and `space-y-4` for vertical rhythm

---

## For Gabriel - Recommendations Page

### Route: `/recs` → `app/recs/page.tsx`

### Recommended Structure

```jsx
<>
  <Header />
  <main className="min-h-screen bg-slate-900">
    {/* Intro section */}
    <section className="bg-slate-800 px-6 py-12 text-white">
      {/* Title and description */}
    </section>

    {/* Recommendations grid */}
    <section className="mx-auto max-w-7xl px-6 py-12">
      {/* Content cards */}
    </section>
  </main>
  <Footer />
</>
```

### Content Card Example

```jsx
<div className="grid gap-6 md:grid-cols-2">
  {recommendations.map((rec) => (
    <div
      key={rec.id}
      className="group rounded-lg border border-slate-700 bg-slate-800 overflow-hidden transition-all hover:border-blue-500 hover:shadow-lg"
    >
      {rec.image && (
        <div className="relative h-64 overflow-hidden bg-slate-700">
          <Image
            src={rec.image}
            alt={rec.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{rec.title}</h3>
        <p className="mt-2 text-slate-300">{rec.description}</p>
        {rec.details && (
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            {rec.details.map((detail) => (
              <li key={detail}>• {detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  ))}
</div>
```

### Key Styling
- Image hover zoom: `group-hover:scale-105`
- Border accent on hover: `hover:border-blue-500`
- Image container: `relative h-64 overflow-hidden`
- Use Next.js Image with `fill` and `object-cover`

---

## General Best Practices

### Performance

```jsx
// ✅ DO - Use Next.js Image component
import Image from "next/image";
<Image src="/image.jpg" alt="Description" width={800} height={600} />

// ❌ DON'T - Avoid HTML img tags
<img src="/image.jpg" alt="Description" />
```

### Responsive Images

```jsx
<Image
  src="/image.jpg"
  alt="Description"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority={false}
/>
```

### Layouts

```jsx
// Mobile-first responsive grid
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {/* Items */}
</div>

// Alternative: Fixed sidebar layout
<div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
  <aside className="lg:col-span-1">{/* Sidebar */}</aside>
  <main className="lg:col-span-3">{/* Main content */}</main>
</div>
```

### Color Usage

```jsx
// ✅ DO - Use consistent colors from design system
className="bg-slate-800 text-white border-slate-700"

// ❌ DON'T - Use random hex codes
className="bg-#2d3748 text-white"
```

### Spacing

```jsx
// ✅ DO - Use Tailwind spacing scale
className="px-6 py-12 gap-4 space-y-6"

// ❌ DON'T - Use arbitrary values
className="px-23px py-45px"
```

### Hover Effects

```jsx
className="transition-all duration-300 hover:shadow-lg hover:border-blue-500"
```

### Focus States (Accessibility)

```jsx
className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
```

---

## Code Organization Tips

### Keep imports organized

```jsx
// System imports first
import { useState } from "react";

// Next.js imports
import Image from "next/image";
import Link from "next/link";

// Component imports
import { Header } from "@/components/Header";

// Type/interface imports
import type { Package } from "@/types";
```

### Create reusable card components

```jsx
// components/PackageCard.tsx
export function PackageCard({ data }: { data: Package }) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
      {/* Card content */}
    </div>
  );
}
```

### Use TypeScript for type safety

```jsx
interface ScheduleEvent {
  id: string;
  title: string;
  time: string;
  description: string;
  location: string;
}
```

---

## Testing Your Page

1. **Run the dev server:**
   ```bash
   npm run dev
   ```

2. **Test responsive design:**
   - Open DevTools (F12)
   - Toggle device toolbar
   - Test on mobile (375px), tablet (768px), desktop (1024px+)

3. **Test accessibility:**
   - Tab through all interactive elements
   - Ensure color contrast is sufficient
   - Check alt text on images

4. **Performance:**
   - Use Lighthouse in DevTools
   - Target: 90+ scores

---

## Common Issues & Solutions

### Images not showing
```jsx
// Make sure image is in /public folder
// Use path relative to public: /image.jpg
<Image src="/hero.jpg" alt="..." fill className="object-cover" />
```

### Responsive layout breaking
```jsx
// Use correct grid syntax
<div className="grid gap-6 md:grid-cols-2">
  // Not: md:grid-cols-2 gap-6 ← Wrong order
</div>
```

### Colors not matching
- Reference `DESIGN_SYSTEM.md`
- Use Tailwind class names, not hex codes
- Test on different monitors for true colors

### Performance slow
- Check image sizes (should be optimized)
- Use `priority={false}` for below-fold images
- Split large lists into pages/infinite scroll

---

**Questions?** Check `DESIGN_SYSTEM.md` for color/spacing reference!

---

**Created by:** Chris Shen  
**Last Updated:** April 1, 2026
