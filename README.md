# UCSB LBA Weekender

A full-featured website built for the UCSB LBA Weekender event (April 17-19, 2026). This project uses modern web development frameworks with a focus on scalability, team collaboration, and responsive design.

## 🎯 Project Overview

The UCSB LBA Weekender website serves as the central hub for event attendees and organizers. It provides information about packages, schedules, recommendations, and ticket purchasing for a large-scale university networking event.

**Event Dates:** April 17-19, 2026  
**Attendees:** 200+ students  
**Role:** Frontend Architecture & Component Development

## 🏗️ Architecture & Structure

This project follows Next.js 15+ best practices with a scalable component-based architecture:

- **App Router**: Modern Next.js app directory for optimized performance
- **Component Library**: Reusable, shared components (Header, Footer, Hero) across all pages
- **Design System**: Comprehensive brand guidelines ensuring visual consistency
- **TypeScript**: Full type safety across the codebase
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive design
- **Responsive Design**: Mobile-first approach supporting all device sizes

### Project Structure
```
app/
├── layout.tsx              # Root layout with shared metadata
├── page.tsx                # Homepage with hero section
├── purchase/               # Ticket packages & purchasing
├── schedule/               # Event timeline & sessions
├── recommendations/        # Curated event recommendations
└── components/             # Shared UI components
    ├── Header.tsx          # Sticky navbar with navigation
    ├── Footer.tsx          # Footer with event info
    └── Hero.tsx            # Full-screen hero section
```

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend Framework** | Next.js 15, React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, PostCSS |
| **Image Optimization** | Next.js Image component |
| **Linting** | ESLint |
| **Package Manager** | npm |

## ✨ Key Features

### 1. **Professional Design System**
   - Carefully curated color palette (primary blue, dark slate neutrals)
   - Consistent typography hierarchy (serif headings, sans-serif body)
   - Spacing and layout guidelines for visual consistency
   - Documented brand guidelines for team implementation

### 2. **Responsive Components**
   - Sticky navigation with active page indicators
   - Mobile menu support for tablet/mobile views
   - Hero section with optimized image loading
   - Grid-based card layouts that adapt to screen size

### 3. **Performance Optimized**
   - Next.js Image optimization for faster load times
   - Code-split pages for lazy loading
   - Tailwind CSS purging for minimal CSS bundles
   - Mobile-first CSS approach

### 4. **Team Collaboration Ready**
   - Detailed implementation guides for team members
   - Consistent component API and styling patterns
   - Clear routing structure for separate team responsibilities
   - TypeScript for better developer experience and fewer bugs

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-reload as you make changes.

### Build for Production

```bash
npm run build
npm start
```

## 📋 Implementation Notes

### For Recruiters: What This Demonstrates

✅ **Full-Stack Frontend Architecture** - Designed scalable component structure and routing  
✅ **Design System Thinking** - Created comprehensive brand guidelines and design tokens  
✅ **Team Leadership** - Provided implementation guides for team members across multiple pages  
✅ **Performance Optimization** - Leveraged Next.js best practices for fast page loads  
✅ **Responsive Design** - Mobile-first approach working seamlessly across all devices  
✅ **TypeScript Proficiency** - Type-safe React components with proper interfaces  
✅ **Attention to Detail** - Professional-grade styling and UX polish  

### Key Documentation
- [Design System & Style Guide](./DESIGN_SYSTEM.md) - Brand colors, typography, layout
- [Implementation Guide](./TEAM_IMPLEMENTATION_GUIDE.md) - Instructions for team pages
- [Homepage Setup](./HOMEPAGE_SETUP.md) - Details on hero section and setup

## 🤝 Team

This project was built collaboratively with clear separation of concerns:
- **Architecture & Components**: Chris Shen
- **Purchasing Page**: Santhusha
- **Schedule Page**: Amir
- **Recommendations Page**: Gabriel

## 📞 Questions?

For more information about this project or to discuss the technical approach, feel free to reach out!
