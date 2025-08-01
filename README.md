# SuppComp - Supplement Comparison App

**Production URL**: https://supp-comp.vercel.app/

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
- **Data Fetching (Client side)**: SWR
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Local Setup

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: Version 22 LTS or higher ([Download](https://nodejs.org/))
- **pnpm**: Recommended package manager ([Install](https://pnpm.io/installation))
  ```bash
  npm install -g pnpm
  ```

### Installation Steps

1. **Clone the repository** (or navigate to project directory):
   ```bash
   cd supp-comp
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```

4. **Open the application**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript type checking
```

### Verification

Once running, you should see:
- Main search page with supplement grid
- Working search and filter functionality
- Clickable product cards leading to detail pages
- Functional product comparison system

## Code Walkthrough

### Application Architecture

The application follows Next.js 15 App Router patterns with a clear separation between server and client components:

#### Directory Structure
```
src/
├── app/                          # Next.js App Router
│   ├── api/                     # API routes (server-side)
│   │   ├── categories/          # GET /api/categories
│   │   │   └── route.ts
│   │   └── supplements/         # Supplement endpoints
│   │       ├── [id]/           # GET /api/supplements/[id]
│   │       │   └── route.ts
│   │       ├── route.ts        # GET /api/supplements
│   │       └── utils.ts        # Shared API logic
│   ├── compare/                 # Product comparison page
│   │   └── page.tsx
│   ├── supplements/             # Product detail pages
│   │   └── [id]/
│   │       └── page.tsx
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main search page
├── components/                  # Reusable UI components
│   ├── ui/                     # shadcn/ui base components
│   │   └── ...
│   └── ...                      # Application-specific components
├── context/                     # React Context providers
│   ├── comparison.tsx          # Product comparison state
│   └── search-filters.tsx      # Search and filter state
├── db/                         # Data layer
│   └── mock-data.ts           # Sample supplement data (30 products)
├── hooks/                      # Custom React hooks
│   ├── use-categories.tsx     # Fetch available categories
│   ├── use-supplement.ts      # Fetch single supplement
│   └── use-supplements.tsx    # Fetch/search supplements
└── lib/                       # Shared utilities
    └── types.ts              # TypeScript type definitions
```

#### Key Architectural Decisions

**1. Server vs Client Components**
- **Server Components**: Pages, layouts, and initial data loading
- **Client Components**: Interactive features (search, filters, comparison)
- **API Routes**: Server-side data processing and filtering

**2. State Management Strategy**
- **React Context**: Global state for search filters and product comparison
- **URL State**: Shareable comparisons via query parameters

**3. Client-side Data Fetching**
- **SWR**: Use the SWR library to perform client-side fetch requests with caching and revalidation built-in
- **Hooks**: Create custom hooks to encapsulate logic and make portable

**4. Data Flow**
```
User Interaction → Context State → SWR Hook → API Route → Mock Data → Response
```

**5. Component Composition**
- **Compound Components**: Search filters with multiple controls
- **Render Props**: Flexible data fetching with loading states
- **Context Providers**: Shared state across component tree

#### Performance Optimizations

- **Turbopack**: Fast development builds
- **SWR Caching**: Reduces redundant API calls
- **Server Components**: Reduced client-side JavaScript
- **Responsive Images**: Optimized for different screen sizes
- **Code Splitting**: Automatic route-based splitting

## API Design

The application implements a RESTful API design with three main endpoints. All responses include proper HTTP status codes and error handling.

### GET /api/supplements

**Description**: Search and filter supplements with pagination and sorting.

**Query Parameters**:
- `query` (string): Search term for name, brand, or ingredients
- `categories` (string): Comma-separated category names
- `priceMin` (number): Minimum price filter
- `priceMax` (number): Maximum price filter
- `trustMin` (number): Minimum trust score filter
- `trustMax` (number): Maximum trust score filter
- `sortBy` (string): Sort option (`name-asc`, `name-desc`, `price-asc`, `price-desc`, `trust-asc`, `trust-desc`)
- `ids` (string): Comma-separated supplement IDs for specific lookups

**Example Request**:
```
GET /api/supplements?query=creatine&categories=Creatine,Protein&priceMin=20&priceMax=50&sortBy=price-asc
```

**Response Shape**:
```json
{
  "supplements": [
    {
      "id": "1",
      "name": "Creatine Monohydrate",
      "brand": "Optimum Nutrition",
      "category": "Creatine",
      "primaryIngredient": "Creatine Monohydrate",
      "trustScore": 9.2,
      "price": 24.99,
      "ingredients": [
        {
          "name": "Creatine Monohydrate",
          "amount": "5",
          "unit": "g"
        }
      ],
      "certifications": ["NSF Certified", "Informed Sport"],
      "trustScoreBreakdown": {
        "thirdPartyTesting": 9.5,
        "ingredientTransparency": 9.2,
        "manufacturingQuality": 9.0,
        "brandReputation": 9.1
      }
    }
  ],
  "total": 1,
  "filters": {
    "query": "creatine",
    "categories": ["Creatine", "Protein"],
    "priceRange": [20, 50],
    "trustScoreRange": [0, 10]
  },
  "sortBy": "price-asc"
}
```

### GET /api/supplements/[id]

**Description**: Get detailed information for a specific supplement.

**Path Parameters**:
- `id` (string): Unique supplement identifier

**Example Request**:
```
GET /api/supplements/1
```

**Success Response (200)**:
```json
{
  "id": "1",
  "name": "Creatine Monohydrate",
  "brand": "Optimum Nutrition",
  "category": "Creatine",
  "primaryIngredient": "Creatine Monohydrate",
  "trustScore": 9.2,
  "price": 24.99,
  "ingredients": [
    {
      "name": "Creatine Monohydrate",
      "amount": "5",
      "unit": "g"
    }
  ],
  "certifications": ["NSF Certified", "Informed Sport"],
  "trustScoreBreakdown": {
    "thirdPartyTesting": 9.5,
    "ingredientTransparency": 9.2,
    "manufacturingQuality": 9.0,
    "brandReputation": 9.1
  }
}
```

**Error Response (404)**:
```json
{
  "error": "Supplement not found",
  "code": "NOT_FOUND"
}
```

**Error Response (400)**:
```json
{
  "error": "Invalid supplement ID provided",
  "code": "INVALID_ID"
}
```

### GET /api/categories

**Description**: Get list of available supplement categories.

**Example Request**:
```
GET /api/categories
```

**Response Shape**:
```json
[
  "Creatine",
  "Fish Oil",
  "Protein",
  "Vitamins",
  "Pre-Workout"
]
```

### Data Models

**Supplement Object**:
```typescript
interface Supplement {
  id: string;
  name: string;
  brand: string;
  category: SupplementCategory;
  primaryIngredient: string;
  trustScore: number; // 0-10
  price: number;
  ingredients: Ingredient[];
  certifications: string[];
  trustScoreBreakdown: TrustScoreBreakdown;
}

interface Ingredient {
  name: string;
  amount: string;
  unit: string;
}

interface TrustScoreBreakdown {
  thirdPartyTesting: number; // 0-10
  ingredientTransparency: number; // 0-10
  manufacturingQuality: number; // 0-10
  brandReputation: number; // 0-10
}
```

## Sample Data

The application includes 30 realistic supplement products across 5 categories:
- **Creatine** (5 products): Various creatine forms from reputable brands
- **Fish Oil** (5 products): Including traditional fish oil, krill oil, and algae-based options
- **Protein** (8 products): Whey, casein, plant-based, and specialty proteins
- **Vitamins** (7 products): Essential vitamins and minerals with various forms
- **Pre-Workout** (5 products): Performance supplements with detailed ingredient profiles

Each product includes realistic data for trusted brands like Optimum Nutrition, Thorne, NOW Foods, Nordic Naturals, and others.
