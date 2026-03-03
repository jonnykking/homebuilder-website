# Apex Home Builders Website

A modern, production-ready website for a residential home builder business in Australia.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (body) + Poppins (headings)

## Project Structure

```
homebuilder-website/
├── public/
│   ├── images/         # Static images
│   ├── robots.txt      # SEO robots file
│   └── sitemap.xml     # SEO sitemap
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── page.tsx    # Homepage
│   │   ├── layout.tsx  # Root layout
│   │   ├── globals.css # Global styles
│   │   ├── about/      # About page
│   │   ├── services/   # Services page
│   │   ├── projects/   # Projects gallery
│   │   └── contact/    # Contact page
│   ├── components/
│   │   ├── ui/         # Reusable UI components
│   │   ├── layout/     # Layout components (Header, Footer)
│   │   └── sections/   # Page section components
│   ├── data/           # Content data (JSON)
│   └── lib/            # Utility functions
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Features

- Responsive design (mobile-first)
- SEO optimized with proper meta tags
- Accessible (ARIA compliant)
- Fast loading with optimized images
- Contact form with validation
- Project gallery with filtering
- Testimonials carousel
- Modern animations and transitions

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Development

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## Color Palette

| Color | Usage |
|-------|-------|
| Primary (Blue) | Trust, professionalism, CTAs |
| Secondary (Amber) | Warmth, highlights |
| Accent (Purple) | Special highlights |
| Gray | Text, backgrounds, borders |

## Pages

1. **Homepage** - Hero, services preview, projects, testimonials, CTA
2. **About** - Company story, team, values, timeline
3. **Services** - Detailed service offerings
4. **Projects** - Gallery with filtering by type
5. **Contact** - Contact form, map, contact details
6. **Privacy** - Privacy policy
7. **Terms** - Terms of service

## License

Proprietary - Apex Home Builders
