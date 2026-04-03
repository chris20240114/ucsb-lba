# UCSB LBA Weekender - Design System & Style Guide

## Brand Colors

### Primary Colors
- **Primary Blue**: `#1e40af` (Tailwind: `blue-600`)
- **Primary Blue - Dark**: `#1e3a8a` (Tailwind: `blue-800`)
- **Primary Blue - Light**: `#3b82f6` (Tailwind: `blue-500`)

### Neutral Colors
- **Slate 900**: `#0f172a` - Dark backgrounds, headers, footers
- **Slate 800**: `#1e293b` - Dark backgrounds, cards
- **Slate 600**: `#475569` - Secondary text
- **Slate 300**: `#cbd5e1` - Light text on dark backgrounds
- **Slate 100**: `#f1f5f9` - Light backgrounds

### Accent Colors
- **White**: `#ffffff` - Primary text on dark backgrounds
- **Black**: `#000000` - Text and UI elements

## Typography

### Font Families
- **Serif**: Used for headings and event titles (system default: serif)
  - Example: "The Weekender"
- **Sans**: Used for body text and UI (Geist font)
  - Example: Navigation links, body copy

### Text Sizes & Usage
- **Headings (h1)**: `text-5xl sm:text-6xl lg:text-7xl` - Main event title
- **Headings (h2)**: `text-3xl` - Section headers
- **Headings (h3)**: `text-xl` - Subsection headers
- **Body**: `text-base` - Standard paragraph text
- **Small text**: `text-sm` - Navigation, captions
- **Extra small**: `text-xs` - Metadata

### Font Weights
- **Bold**: `font-bold` - Main headings
- **Semibold**: `font-semibold` - Subheadings, CTAs
- **Medium**: `font-medium` - Navigation labels
- **Normal**: `font-normal` - Body text

## Layout & Spacing

### Container Max-Width
```
max-w-7xl - Full page containers (1280px)
```

### Padding
- **Large sections**: `px-6 py-12`
- **Small sections**: `px-4 py-6`
- **Tight spacing**: `px-2 py-2`

### Gaps
- **Large gap**: `gap-8`
- **Medium gap**: `gap-4`
- **Small gap**: `gap-2`

## Components

### Buttons

#### Primary CTA Button
```jsx
<button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Button Text
</button>
```

#### Secondary Button
```jsx
<button className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
  Button Text
</button>
```

### Navigation Link
```jsx
<Link
  href="/page"
  className="text-sm font-medium transition-colors duration-200 text-slate-300 hover:text-white"
>
  Link Text
</Link>
```

### Card Component (Recommended)
```jsx
<div className="rounded-lg border border-slate-700 bg-slate-800 p-6 shadow-md transition-all hover:shadow-lg">
  {/* Card content */}
</div>
```

## Headers & Footers

### Header (Navbar)
- Position: Sticky top with `z-50`
- Background: `bg-slate-900`
- Border: `border-b border-slate-700`
- Shadow: `shadow-md`
- Mobile menu button: Hide nav on screens smaller than `lg` (1024px)

### Footer
- Background: `bg-slate-900`
- Border: `border-t border-slate-700`
- Grid layout: 3 columns on medium screens (`md:grid-cols-3`)
- Quick links use subtle hover effects

## Responsive Breakpoints

```
sm: 640px  - Tablets
md: 768px  - Larger tablets
lg: 1024px - Desktops (hide mobile menu)
xl: 1280px - Large desktops
2xl: 1536px - Extra large displays
```

## Hover & Interactive States

### Text Links
```
Default: text-slate-300
Hover: text-white (smooth transition)
Active: border-b-2 border-white
```

### Buttons
```
Default: shadow-lg
Hover: shadow-xl + darken color
Focus: ring-2 ring-[color] ring-offset-2
```

### Cards
```
Default: shadow-md
Hover: shadow-lg (smooth transition)
```

## Dark Mode

The site is designed primarily for dark mode:
- Background: Dark slate (`slate-900`, `slate-800`)
- Text: White and light slate
- No light mode toggle currently implemented

## Accessibility

- Use semantic HTML (`<header>`, `<footer>`, `<nav>`, `<main>`, `<section>`)
- Add `aria-label` to buttons and navigation
- Ensure focus states with `:focus-visible` or `focus:ring`
- Alt text on all images
- Proper heading hierarchy (h1 → h2 → h3, etc.)

## Performance Tips

- Use Next.js `Image` component for all images
- Set `priority` on above-the-fold images
- Use `sizes` attribute for responsive images
- Implement lazy loading for cards/lists
- Keep components in separate files

## Example Page Structure

```jsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PageName() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-900">
        <section className="mx-auto max-w-7xl px-6 py-12">
          {/* Page content */}
        </section>
      </main>
      <Footer />
    </>
  );
}
```

## Quick Reference

```
Dark backgrounds: bg-slate-900, bg-slate-800
Light text: text-white, text-slate-100, text-slate-300
Primary action: bg-blue-600 hover:bg-blue-700
Borders: border-slate-700
Hover text: hover:text-white transition-colors
Rounded: rounded-lg (standard)
Shadows: shadow-md (default), shadow-lg (hover)
```

---

**Maintained by:** Chris Shen  
**Last Updated:** April 1, 2026
