# UCSB LBA Weekender - Homepage Setup Instructions

## Setup Status: Components Created ✅

### What I've Built:

1. **Professional Navbar (Header Component)**
   - Sticky navigation bar with dark blue styling
   - Event title "The Weekender" with date "April 18-20, 2026"
   - Navigation links: Home, Packages, Schedule, Recommendations
   - Active page indicator
   - Mobile menu button (ready for future enhancement)
   - Responsive design for all screen sizes

2. **Hero Section (Hero Component)**
   - Full-screen hero image area
   - Professional dark overlay for text readability
   - Large headline typography
   - Event date and description
   - Two CTA buttons: "Explore Packages" and "View Schedule"
   - Fully responsive for mobile, tablet, and desktop
   - Optimized image loading with Next.js Image component

### Required Next Step: Add Hero Image

The homepage is looking for a hero image at: **`/public/hero-weekender.jpg`**

**What you need to do:**
1. Get the high-resolution networking event photo (like in the screenshot)
2. Place it in the `public/` folder with the name `hero-weekender.jpg`
3. Image specifications:
   - Format: JPG (or PNG if you prefer - update the filename in Hero.tsx)
   - Size: At least 1920x1080 pixels (larger is better for quality)
   - Recommended: 2560x1440 or higher for retina displays

**To test the homepage:**
```bash
npm install  # if not already done
npm run dev
```

Then navigate to `http://localhost:3000`

### Code Quality Notes:

- ✅ Industry-level responsive design using Tailwind CSS
- ✅ Proper Next.js Image optimization for performance
- ✅ Semantic HTML with accessibility attributes (aria-labels)
- ✅ Smooth transitions and hover states
- ✅ Mobile-first approach
- ✅ Proper TypeScript support (if enabled)
- ✅ Clean component structure for maintainability

### Files Modified/Created:

- `app/page.tsx` - Updated to use Header and Hero components
- `app/layout.tsx` - Updated metadata for SEO
- `app/components/Header.tsx` - Enhanced navbar styling and functionality
- `app/components/Hero.tsx` - NEW professional hero section component

### Next Actions for Your Team:

Once the hero image is added, the home page is complete! Your teammates can work on their respective pages:
- **Santhusha**: Purchasing page with package details
- **Amir**: Schedule page with event timeline
- **Gabriel**: Recommendations page with content cards

---

**Created by:** Chris Shen  
**Project:** UCSB LBA Weekender Website  
**Date:** April 1, 2026
