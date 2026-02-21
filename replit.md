# Replit MD

## Overview

This is an **Erasmus+ EU-funded project website** — a full-stack web application designed to showcase an EU co-funded education project. It provides public-facing pages for project information, consortium partners, news & events, project results/deliverables, and a contact form with newsletter subscription. The site is built to comply with EACEA and European Commission communication and visibility guidelines, including mandatory EU branding, GDPR-compliant forms, and WCAG 2.1 AA accessibility.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router)
- **State Management / Data Fetching**: TanStack React Query for server state
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **Forms**: react-hook-form with Zod resolvers for validation
- **Animations**: Framer Motion for page transitions and scroll animations
- **Styling**: Tailwind CSS with CSS variables for theming (EU Blue `#003399` as primary, EU Yellow `#FFCC00` as secondary)
- **Fonts**: Inter (body text) and Outfit (headings/display)
- **Date formatting**: date-fns

The frontend lives in `client/src/` with pages under `pages/`, reusable components in `components/`, custom hooks in `hooks/`, and utility functions in `lib/`. Path aliases are configured: `@/` → `client/src/`, `@shared/` → `shared/`.

### Pages
- **Home** — Hero section, latest news, partner logos, CTAs
- **About** — Project overview, objectives, timeline, work packages
- **Partners** — Consortium member cards with logos and descriptions
- **Results** — Tabbed view of deliverables, newsletters, and promotional materials
- **News & Events** — Filterable list of news articles and events
- **News Item** — Individual news/event detail page
- **Contact** — Contact form and newsletter subscription (GDPR consent checkbox)

### Backend

- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via tsx
- **API Pattern**: RESTful JSON API with routes prefixed `/api/`
- **Route Definitions**: Shared route contracts in `shared/routes.ts` using Zod schemas, consumed by both client and server for type safety and validation
- **Storage Layer**: `server/storage.ts` defines an `IStorage` interface with a `DatabaseStorage` implementation using Drizzle ORM

### API Endpoints
| Method | Path | Purpose |
|--------|------|---------|
| GET | `/api/partners` | List all consortium partners |
| GET | `/api/news` | List news/events (optional `?type=news\|event` filter) |
| GET | `/api/news/:id` | Get single news/event item |
| GET | `/api/results` | List results (optional `?type=deliverable\|newsletter\|promotional` filter) |
| POST | `/api/contacts` | Submit contact form / newsletter subscription |

### Shared Code

The `shared/` directory contains code used by both frontend and backend:
- **`schema.ts`** — Drizzle ORM table definitions and Zod insert schemas for: `partners`, `news`, `results`, `contacts`
- **`routes.ts`** — API route contracts with paths, methods, input/output Zod schemas

### Database

- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (connection via `DATABASE_URL` environment variable)
- **Connection**: node-postgres (`pg`) Pool in `server/db.ts`
- **Schema Management**: `drizzle-kit push` for schema migrations (run via `npm run db:push`)
- **Tables**:
  - `partners` — id, name, role, description, websiteUrl, logoUrl
  - `news` — id, title, content, type (news/event), eventDate, location, imageUrl, publishedAt
  - `results` — id, title, description, type (deliverable/newsletter/promotional), fileUrl, publishedAt
  - `contacts` — id, name, email, message, type, gdprConsent, and likely a createdAt timestamp

### Build System

- **Development**: `npm run dev` — runs tsx with Vite dev server middleware (HMR via `server/vite.ts`)
- **Production Build**: `npm run build` — Vite builds the client to `dist/public/`, esbuild bundles the server to `dist/index.cjs`
- **Production Start**: `npm start` — runs the bundled server which serves static files from `dist/public/`

### Development / Production Serving
- In development, Vite middleware handles the client with HMR
- In production, `server/static.ts` serves the built client files and falls back to `index.html` for SPA routing

## External Dependencies

### Required Services
- **PostgreSQL Database**: Required. Connection string must be provided via `DATABASE_URL` environment variable. Used with Drizzle ORM and `connect-pg-simple` for potential session storage.

### Key NPM Packages
- **drizzle-orm** + **drizzle-kit** + **drizzle-zod**: ORM, migration tooling, and schema-to-Zod integration
- **express** v5: HTTP server framework
- **@tanstack/react-query**: Async state management on the client
- **react-hook-form** + **@hookform/resolvers**: Form handling with Zod validation
- **framer-motion**: Animation library
- **wouter**: Lightweight React router
- **zod**: Schema validation (shared between client and server)
- **date-fns**: Date formatting
- **shadcn/ui** components (Radix UI primitives): Full suite of accessible UI components

### External Assets
- EU Flag image loaded from Wikimedia Commons
- Google Fonts: Inter, Outfit (and others referenced in index.html)
- Placeholder images from Unsplash for news cards