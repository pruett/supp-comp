# SuppComp - Supplement Comparison App

A modern supplement comparison application built with Next.js 15, TypeScript, and TailwindCSS. Search, inspect, and compare your favorite supplements with detailed product information and trust scores.

## Features

- **🔍 Search & Filter**: Advanced search with category, price, and trust score filters
- **📊 Product Details**: Comprehensive product information including ingredients and certifications  
- **⚖️ Side-by-Side Comparison**: Compare up to 2 products with highlighted differences
- **🎯 Trust Scores**: Detailed trust score breakdowns for informed decisions
- **📱 Responsive Design**: Optimized for all device sizes
- **⚡ Fast Performance**: Built with Next.js 15 and Turbopack

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS 4.0
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 22 LTS or higher
- pnpm (recommended) or npm

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main search page
│   ├── product/[id]/      # Product detail pages
│   └── compare/           # Product comparison page
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── supplement-card.tsx
│   ├── search-filters.tsx
│   ├── product-detail.tsx
│   └── product-comparison.tsx
├── context/              # React Context providers
│   └── supplements-context.tsx
├── data/                 # Data layer
│   ├── supplement-service.ts  # In-memory service layer
│   └── mock-data.ts          # Sample supplement data
└── lib/
    ├── types.ts          # TypeScript type definitions
    └── utils.ts          # Utility functions
```

## Architecture Decisions

### In-Memory Service Layer

The app uses an in-memory service layer (`SupplementService`) that simulates a real backend API. This approach allows for:

- Easy swapping with real HTTP APIs later
- Consistent interface for data operations  
- Simulated network delays for realistic UX
- Type-safe data operations

### Future HTTP API Contract

When implementing a real backend, the API would follow this structure:

```
GET /api/supplements?search=creatine&category=Creatine&minPrice=10&maxPrice=50&minTrust=7&sort=price-asc
GET /api/supplements/:id
GET /api/categories
```

### Component Architecture

- **Server Components**: For initial data loading and SEO optimization
- **Client Components**: For interactive features requiring React hooks
- **Context + use()**: For efficient client-side state management
- **URL State**: For shareable comparisons and filter persistence

## Features Overview

### 1. Search & Discovery
- Full-text search across product names, brands, and ingredients
- Multi-select category filtering
- Price range and trust score sliders
- Multiple sorting options
- Real-time result updates

### 2. Product Details
- Comprehensive product information display
- Trust score breakdown with visual indicators
- Complete ingredient lists with amounts
- Third-party certifications
- Related actions (add to cart, compare, wishlist)

### 3. Product Comparison  
- Side-by-side comparison of 2 products
- Highlighted differences for easy identification
- Detailed ingredient and certification comparison
- URL-based state for shareable comparisons

## Sample Data

The app includes 30 realistic supplement products across 5 categories:
- **Creatine** (5 products)
- **Fish Oil** (5 products) 
- **Protein** (8 products)
- **Vitamins** (7 products)
- **Pre-Workout** (5 products)

Each product includes realistic data for brands like Optimum Nutrition, Thorne, NOW Foods, and others.

## Development Notes

This application was built using AI assistance to demonstrate:
- Modern React patterns with Next.js 15
- TypeScript best practices
- Component composition with shadcn/ui
- Responsive design principles
- Performance optimization techniques

The codebase follows industry standards and is production-ready with proper error handling, loading states, and accessibility considerations.
