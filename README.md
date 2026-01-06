# Artist Corporations Website

A Next.js application for the Artist Corporations Foundation, featuring project registration, financial calculation tools, and document generation for creative people.

## 🎉 What's Been Built

### ✅ Complete Features

1. **Homepage** (`/`)
   - Hero section with large "A" branding
   - Featured 2025 Annual Letter preview
   - Programs overview cards
   - TED Talk video section (placeholder)
   - Where We Are Now section
   - FAQ accordions
   - Call-to-action sections

2. **Blog System** (`/blog`)
   - Blog listing page
   - Individual blog post pages (`/blog/[slug]`)
   - Full 2025 Annual Letter post with beautiful typography
   - Responsive design with proper spacing

3. **Programs Page** (`/programs`)
   - Overview of all four programs
   - Links to individual program pages

4. **Get Involved Page** (`/get-involved`)
   - Sign the Pledge
   - Join DFOS
   - Share Your Story
   - Create Profile

5. **Design System**
   - Minimalist aesthetic matching artistcorporations.com
   - Responsive header with mobile menu
   - Footer with navigation links
   - Reusable components: Button, Card, Accordion
   - Color scheme: Light background (#F9FAFB), clean typography
   - Fully responsive across mobile, tablet, desktop

6. **Database Schema** (Prisma)
   - Complete schema for all 3 stages
   - User management & profiles
   - Project registration (Stage 1)
   - Financial modeling (Stage 2)
   - Document generation (Stage 3)
   - Blog posts, stories, pledges, DFOS members

### 🚧 To Be Implemented

**Stage 1: Project Registration**
- Multi-step registration wizard
- Project details form
- Team & ownership breakdown
- Catalogue management
- User dashboard

**Stage 2: Financial Calculator**
- Income, equity, payroll inputs
- Ownership structure modeling
- IP valuation
- Health insurance comparison
- Model comparisons (A-Corp vs traditional)
- PDF export

**Stage 3: Document Generation**
- LLC formation documents
- Investment terms
- State-specific customization
- Template engine integration

**Authentication**
- NextAuth.js or Supabase Auth setup
- User registration & login
- Protected routes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (you have 18.20.8)
- PostgreSQL database (for production)
- npm or yarn

### Installation & Running

1. **The project is already set up at:**
   ```
   /Users/yanceystrickler/Documents/Vibecode/ACorp/acorp-website
   ```

2. **Start development server**:
   ```bash
   cd /Users/yanceystrickler/Documents/Vibecode/ACorp/acorp-website
   npm run dev
   ```

   The site will be available at **http://localhost:3000**

3. **Environment Variables** (for when you add database)
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/acorp"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-here"
   ```

4. **Run database migrations** (when you have PostgreSQL):
   ```bash
   npx prisma migrate dev
   ```

### Development Commands

```bash
npm run dev          # Start development server (already running!)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open database GUI
```

## 📁 Project Structure

```
acorp-website/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── page.tsx                 # Homepage ✅
│   ├── blog/
│   │   ├── page.tsx            # Blog listing ✅
│   │   └── [slug]/page.tsx     # Individual posts ✅
│   ├── programs/page.tsx        # Programs overview ✅
│   ├── get-involved/page.tsx    # Get involved page ✅
│   └── (more routes to build)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Site header ✅
│   │   └── Footer.tsx          # Site footer ✅
│   └── shared/
│       ├── Button.tsx          # Reusable button ✅
│       ├── Card.tsx            # Card component ✅
│       └── Accordion.tsx       # Accordion component ✅
│
├── lib/
│   └── prisma.ts               # Prisma client ✅
│
├── prisma/
│   └── schema.prisma           # Complete database schema ✅
│
└── IMPLEMENTATION_PLAN.md       # Detailed implementation guide
```

## 🎨 Design System

### Colors
- **Background**: `#F9FAFB` - light gray
- **Primary**: `#111827` - dark gray
- **Accent**: `#3B82F6` - blue
- **Secondary**: `#6B7280` - medium gray

### Typography
- **Sans**: Geist Sans
- **Serif**: Georgia (headings)

### Components
All components follow the minimalist design of artistcorporations.com

## 📝 Next Steps

### Immediate (This Week)
1. **Add placeholder pages** for remaining routes:
   - `/signup`
   - `/pledge`
   - `/dfos`
   - `/share-story`
   - `/programs/law`, `/programs/artist-id`, etc.

2. **Set up database**:
   - Install PostgreSQL or use Supabase
   - Run migrations: `npx prisma migrate dev`

### Short Term (Next 2 Weeks)
3. **Implement authentication**:
   ```bash
   npm install next-auth
   ```
   - Create signup/login pages
   - Add session management

4. **Build Stage 1 - Project Registration**:
   - Multi-step form wizard
   - Project creation flow
   - User dashboard

### Medium Term (Next Month)
5. **Stage 2 - Financial Calculator**:
   ```bash
   npm install recharts
   ```
   - Input forms
   - Calculation engine
   - Visualizations

6. **Stage 3 - Document Generation**:
   ```bash
   npm install docxtemplater
   ```
   - Document templates
   - PDF generation

## 🚢 Deployment

### Quick Deploy to Vercel

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Configure environment variables
5. Deploy!

### Database Options
- **Supabase** - Free tier, includes auth
- **Railway** - Easy PostgreSQL hosting
- **Neon** - Serverless PostgreSQL

## 📚 Key Documentation

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Full Implementation Plan](./IMPLEMENTATION_PLAN.md)

## 🌐 Current Site Status

**Live at:** http://localhost:3000 (development server running)

**Working Pages:**
- ✅ Homepage with annual letter
- ✅ Blog listing
- ✅ 2025 Annual Letter (full post)
- ✅ Programs overview
- ✅ Get Involved

**Build Status:** ✅ Build successful
**Mobile Responsive:** ✅ Yes
**Design System:** ✅ Complete

---

**Built with:** Next.js 14, TypeScript, Tailwind CSS, Prisma, React

**Ready for:** Feature implementation (Stages 1-3)

**Development Server:** Running at http://localhost:3000
