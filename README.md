# Next.js 14 Frontend

Modern frontend for headless CMS with multi-language support and SEO optimization.

## Quick Start

### Prerequisites
- Node.js 18+
- Backend CMS running on port 3001

### Installation

```bash
# Install dependencies
npm install

# Create .env.local file (see below)
mkdir .env.local

# Start development server
npm run dev
```

Access website at: `http://localhost:3000`

### Environment Setup

Create `.env.local` file in root:

```env
NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3001
PAYLOAD_API_URL=http://localhost:3001/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```


### First Run

1. Ensure backend is running on port 3001
2. Start frontend: `npm run dev`
3. Visit `http://localhost:3000`
4. Toggle language with globe icon (🌍)

## 📁 Project Structure

```
frontend/
├── app/
│   ├── page.tsx              # Homepage (English)
│   ├── contact/page.tsx      # Contact page (English)
│   ├── es/                   # Spanish routes
│   │   ├── page.tsx          # Homepage (Spanish)
│   │   └── contact/page.tsx  # Contact page (Spanish)
│   ├── layout.tsx            # Root layout
│   ├── sitemap.ts            # Auto-generated sitemap
│   └── robots.ts             # SEO robots.txt
│
├── components/
│   ├── blocks/               # Content blocks
│   │   ├── HeroBlock.tsx
│   │   ├── FeaturesBlock.tsx
│   │   ├── TestimonialsBlock.tsx
│   │   ├── CTABlock.tsx
│   │   └── BlockRenderer.tsx
│   ├── Navigation.tsx        # Header with language switcher
│   ├── Footer.tsx            # Footer component
│   └── ContactForm.tsx       # Contact form with validation
│
├── lib/
│   └── payload.ts            # API functions
│
└── types/
    └── payload.ts            # TypeScript types
```

## How Content Renders

### Page Flow

```
1. User visits /contact
2. Next.js calls getPage('contact', 'en')
4. Receives page data with contentBlocks array
5. BlockRenderer maps blocks to components
6. Renders: HeroBlock → FeaturesBlock → CTABlock
```

### Language Switching

```
English: /          → Fetches locale='en' pages
Spanish: /es        → Fetches locale='es' pages

Contact (EN): /contact
Contact (ES): /es/contact
```

Language switcher in Navigation toggles between these URLs.

## Component Architecture

### BlockRenderer
**Purpose:** Map CMS blocks to React components

**Why this approach?**
- CMS controls page structure
- Type-safe with TypeScript
- Easy to add new block types

### Content Blocks

#### HeroBlock
- Large banner section
- Background image support
- Call-to-action button
- Fully responsive

#### FeaturesBlock
- Grid layout (1/2/3 columns)
- Lucide icons
- Hover effects
- Automatic responsive breakpoints

#### TestimonialsBlock
- Customer reviews
- Avatar images
- Clean card design
- 3-column grid on desktop

#### CTABlock
- Conversion-focused design
- Gradient background
- Prominent button
- Center-aligned

### Navigation
**Features:**
- Active link highlighting
- Language switcher
- Sticky header
- Mobile-responsive

**Language Logic:**
```typescript
currentLocale === 'en' ? '/' : '/es'
```

### ContactForm
**Features:**
- Client-side validation
- Loading states
- Success/error messages
- Localized labels
- Posts to Payload API


## SEO Implementation

### Dynamic Metadata
Each page generates metadata from CMS:

### Sitemap (Auto-generated)
- Visits: `http://localhost:3000/sitemap.xml`
- Fetches all pages from CMS
- Generates URLs for both languages
- Updates on each request

### Robots.txt
- Allows all crawlers
- Links to sitemap
- Auto-generated

## API Integration

### Key Functions (`lib/payload.ts`)

#### getPage()
```typescript
getPage('home', 'en')
```

**Features:**
- ISR with 60s revalidation
- Deep population (depth=2)
- Error handling
- Type-safe

#### getAllPages()
```typescript
getAllPages('en')
```

#### submitContactForm()
```typescript
submitContactForm({ name, email, message, locale })
```

#### getMediaUrl()
```typescript
getMediaUrl('/media/image.jpg')
```

## Styling Approach

### TailwindCSS Utilities
- **Responsive:** `md:`, `lg:` prefixes
- **Hover states:** `hover:bg-blue-700`
- **Gradients:** `bg-gradient-to-r from-blue-600 to-purple-600`
- **Spacing:** Consistent `px-4 sm:px-6 lg:px-8`


## Performance Optimizations

### Image Optimization
- Automatic WebP conversion
- Responsive sizes
- Lazy loading
- Blur placeholder

### Caching Strategy
- Static generation where possible
- ISR for dynamic content
- 60s cache for API calls

### Server Components
- Default: Server Components (faster)
- Client only when needed (forms, interactions)
- Reduces JavaScript bundle

## Available Commands

```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Production build
npm run start        # Serve production build
npm run lint         # Run ESLint
```

## Configuration Files

### next.config.js
**Key settings:**
- Image domains (allow CMS images)
- Environment variables
- Build optimizations

### tailwind.config.ts
**Customizations:**
- Color palette
- Font families
- Custom utilities


## Troubleshooting

**Pages not loading:**
- Check backend is running on 3001
- Verify NEXT_PUBLIC_PAYLOAD_URL in `.env.local`
- Check browser console for errors

**Images not displaying:**
- Update `next.config.js` with CMS domain
- Restart dev server after config changes
- Check image URLs in network tab

**CORS errors:**
- Backend must include frontend URL in CORS settings
- Check `PAYLOAD_PUBLIC_CORS_ORIGINS` in backend `.env`

**Contact form not submitting:**
- Verify PAYLOAD_API_URL
- Check backend allows public create access
- Check network tab for error details

**Build errors:**
- Ensure all environment variables set
- Check TypeScript errors: `npm run build`
- Verify all imports are correct


**Built with [Next.js 14](https://nextjs.org)**
