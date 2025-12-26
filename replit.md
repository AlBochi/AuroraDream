# Aurora Dream - Premium Sleep Products Website

## Overview

Aurora Dream is a premium sleep products e-commerce website for an Ottawa-based private sleep studio. The application features a distinctive animated aurora borealis background theme, product catalog with individual mattress pages, and a booking-focused customer journey. The design follows a minimalist Nordic spa aesthetic with a calming, luxury feel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom build script for production
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom CSS variables for brand colors
- **UI Components**: shadcn/ui component library (New York style variant)

### Component Design Pattern
The application uses a section-based component architecture with two component variants:
1. **Aurora variants** (e.g., `NavbarAurora`, `HeroAurora`) - Used on the live site with transparent backgrounds designed to overlay the animated aurora sky
2. **Standard variants** (e.g., `Navbar`, `Hero`) - Backup components with solid backgrounds

Key visual component: `AuroraSky.tsx` - A canvas-based animated background creating flowing aurora borealis effects using layered sine waves in brand colors.

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **Build**: esbuild for server bundling with selective dependency bundling
- **Static Serving**: Express static middleware with SPA fallback

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Current State**: Uses in-memory storage (`MemStorage` class) for development
- **Schema Location**: `shared/schema.ts` with Zod validation via `drizzle-zod`
- **Migration System**: Drizzle Kit with migrations in `/migrations` directory

### Design System
Brand colors defined in `design_guidelines.md` and implemented in `client/src/index.css`:
- Navy Blue (#0A3A57): Primary backgrounds
- Soft Sand (#F3E8D0): Primary text on dark backgrounds
- Aurora Blue (#3A7BF7): CTAs and interactive elements
- Aurora Gradient: #19B9C4 → #3A7BF7 → #A861D5 for hero sections

### Route Structure
- `/` - Home page with all sections (hero, products, about, contact)
- `/products` - Full product catalog with 17 products organized in 3 sections:
  - **Mattresses (10)**: Diana, Fiona, Essex, Indigo, Jasmine, Layla, Monaco, Nightingale, Opulence, Palatial
  - **Pillows (4)**: Cool Ice, Active Charcoal, Organic Bamboo, Hotel Comfort Tencel
  - **Mattress Protection (3)**: Cotton Terry Waterproof, Cool Ice Protector, Bed Bug Encasement

### Contact Information
- **Address**: 1489 Merivale Road, UNIT E, Ottawa, ON K2E 5P3, Canada
- **Email**: info@auroradream.ca
- **Phone**: +1 (613) 290-0212
- **Facebook**: https://www.facebook.com/profile.php?id=61565186787886
- **Instagram**: https://www.instagram.com/carlasleepco/

### Partner Logos
- SensiSleep, HealthGuard, Acima, iFinance (displayed in Our Partners section)

### Design Features
- Theme background images (ThemePage1, ThemePage2) integrated as decorative scroll elements
- Canadian branding with maple leaf icon in footer
- Base font size increased to 18px for improved readability

## External Dependencies

### UI/UX Libraries
- Radix UI primitives for accessible components (dialog, dropdown, tabs, etc.)
- Embla Carousel for product carousels
- Lucide React for icons
- Class Variance Authority for component variants

### Data & Forms
- TanStack React Query for async data management
- React Hook Form with Zod resolvers for form validation
- date-fns for date formatting

### Database
- PostgreSQL via `DATABASE_URL` environment variable
- Drizzle ORM for type-safe queries
- connect-pg-simple for session storage (when sessions are implemented)

### Build & Development
- Vite with React plugin
- Replit-specific plugins for development (cartographer, dev-banner, error overlay)
- TSX for TypeScript execution in development
- esbuild for production server bundling