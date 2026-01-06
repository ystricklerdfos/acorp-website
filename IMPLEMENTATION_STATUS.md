# ACorp Dashboard - Implementation Status

## ✅ Completed

### 1. Authentication System
- [x] NextAuth.js configuration (`/app/api/auth/[...nextauth]/route.ts`)
- [x] JWT session strategy
- [x] Credentials provider with bcrypt password hashing
- [x] Auth helper functions (`/lib/auth.ts`)
- [x] Session provider component
- [x] Login page (`/app/login/page.tsx`)
- [x] Signup API route (`/app/api/auth/signup/route.ts`)
- [x] Environment variables setup (NEXTAUTH_SECRET, NEXTAUTH_URL)

### 2. Middleware & Route Protection
- [x] NextAuth middleware for protecting routes
- [x] Protected paths: `/dashboard/*`, `/profile/*`, `/api/users/*`, etc.
- [x] Automatic redirect to `/login` for unauthenticated users

### 3. UI Component Library
- [x] Input component with label, error, and helper text
- [x] Textarea component
- [x] Select/dropdown component
- [x] Badge component (success, warning, danger, info variants)
- [x] Toggle/Switch component
- [x] Toast notification system with provider
- [x] Existing: Button, Card, Accordion (from previous work)

### 4. API Routes
- [x] GET `/api/users/me` - Fetch current user with profile
- [x] PUT `/api/users/me` - Update user and profile
- [x] POST `/api/auth/signup` - User registration

### 5. Root Layout
- [x] SessionProvider wrapper for authentication
- [x] ToastProvider for notifications
- [x] Existing Header and Footer components

### 6. Database Schema
- [x] User model with email, name, passwordHash
- [x] UserProfile model (bio, location, website, showABusiness)
- [x] Project model with all required fields
- [x] Financial Model, Documents, Members, Ownership models
- [x] All enums and relations properly defined

---

## 🚧 In Progress / To Build

### Phase 1: Core Dashboard Pages (Priority)

#### 1. Profile Management Page
**Status:** Ready to implement
**Location:** `/app/dashboard/profile/page.tsx` (new - move from `/mockups`)
**Features Needed:**
- Form with React Hook Form + Zod validation
- Profile picture upload (future: use uploadthing or similar)
- Update user name, bio, location, website
- Privacy toggles (public profile, show as A-Corp, show projects)
- Password change functionality
- Public profile preview
- API integration with `/api/users/me`

**Components to Build:**
- ProfileForm component
- PasswordChangeForm component
- PublicProfilePreview component

---

#### 2. Connected Accounts Page
**Status:** Mockup exists, needs backend
**Location:** `/app/dashboard/connected/page.tsx`
**Features Needed:**
- Display available platforms (Metalabel, DFOS, Spotify, etc.)
- Connection status tracking
- OAuth flow for supported platforms
- Manual API key entry for others
- Sync triggers and status
- Auto-sync settings

**API Routes to Build:**
- `GET /api/integrations` - List all integrations with status
- `POST /api/integrations/:platform/connect` - Initiate connection
- `POST /api/integrations/:platform/sync` - Manual sync
- `DELETE /api/integrations/:platform` - Disconnect
- `PUT /api/integrations/:platform/settings` - Update settings

**Database Models Needed:**
```prisma
model ConnectedAccount {
  id            String   @id @default(cuid())
  userId        String
  user          User     @relation(fields: [userId], references: [id])
  platform      Platform
  status        ConnectionStatus
  accessToken   String?  // encrypted
  refreshToken  String?  // encrypted
  tokenExpiry   DateTime?
  lastSync      DateTime?
  autoSync      Boolean  @default(true)
  syncFrequency SyncFrequency @default(SIX_HOURS)
  settings      Json?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

enum Platform {
  METALABEL
  DFOS
  SPOTIFY
  DISTROKID
  TUNECORE
  SOUNDEXCHANGE
  // ... etc
}

enum ConnectionStatus {
  CONNECTED
  DISCONNECTED
  ERROR
}

enum SyncFrequency {
  HOURLY
  SIX_HOURS
  DAILY
  WEEKLY
}
```

---

#### 3. Dashboard Overview
**Status:** Mockup exists
**Location:** `/app/dashboard/page.tsx` (replace mockup)
**Features Needed:**
- Fetch user's projects from database
- Calculate stats (project count, document count, total valuation)
- Display action items based on project status
- Quick actions (register project, calculate finances, etc.)
- Resources section

**API Routes to Build:**
- `GET /api/dashboard/stats` - Aggregate statistics
- `GET /api/dashboard/action-items` - Smart action items based on user state

---

### Phase 2: Project Management

#### 4. Project Registration Flow
**Status:** Mockup exists for step 3, need all 6 steps
**Location:** `/app/dashboard/projects/new/page.tsx`
**Steps to Build:**
1. Basic Info (name, your name, description)
2. Location (city, state, country)
3. Entity Type & Genre (exists in mockup)
4. Team Members (dynamic form)
5. Ownership Breakdown (must total 100%)
6. Catalogue (works/releases)

**Features:**
- Multi-step form with progress indicator
- Auto-save to draft
- Validation per step
- Can exit and return
- Review and submit

**API Routes:**
- `POST /api/projects` - Create draft project
- `PUT /api/projects/:id` - Update project
- `GET /api/projects/:id` - Get project
- `POST /api/projects/:id/submit` - Submit for registration

**Components to Build:**
- ProjectWizard (main container)
- Step1BasicInfo
- Step2Location
- Step3EntityType (convert mockup)
- Step4TeamMembers
- Step5Ownership
- Step6Catalogue
- ProgressIndicator
- StepNavigation

---

### Phase 3: Financial Tools

#### 5. Financial Calculator
**Status:** Mockup exists with full UI
**Location:** `/app/dashboard/financial/page.tsx`
**Features:**
- Split panel (inputs | outputs)
- Real-time calculations
- Income inputs (revenue sources, growth rate)
- Payroll (team members, salaries, benefits)
- IP/Catalogue valuation
- Output: Current valuation, projections, ownership pie chart
- Health insurance costs (Mellon Foundation data)
- Traditional vs A-Corp comparison table
- Export to PDF

**API Routes:**
- `POST /api/financial` - Create financial model
- `GET /api/financial/:projectId` - Get model
- `PUT /api/financial/:id` - Update model
- `POST /api/financial/:id/calculate` - Run calculations
- `GET /api/financial/:id/export` - Export PDF

**Components:**
- FinancialCalculator (main)
- IncomeInputs
- PayrollInputs
- IPInputs
- ValuationOutput
- OwnershipChart (pie chart - use recharts)
- HealthInsuranceAnalysis
- ComparisonTable
- ExportButton

**Calculation Logic:**
- Valuation algorithms (revenue multiple, IP value, brand value)
- Ownership distribution
- Health insurance costs
- Projected growth calculations
- Comparison modeling

---

### Phase 4: Document Generation

#### 6. Documents Section
**Status:** Mockup exists
**Location:** `/app/dashboard/documents/page.tsx`
**Features:**
- Document library (grid/list view)
- Filter by type and status
- Generate new documents
- View/download PDF
- Version control
- Status tracking (Draft, Generated, Signed, Archived)

**Document Types to Generate:**
1. Articles of Organization
2. Operating Agreement
3. Bylaws
4. Term Sheet
5. Subscription Agreement
6. Investor Rights Agreement

**API Routes:**
- `GET /api/documents` - List user's documents
- `POST /api/documents/generate` - Generate new document
- `GET /api/documents/:id` - Get document
- `PUT /api/documents/:id` - Update document
- `DELETE /api/documents/:id` - Delete document
- `GET /api/documents/:id/download` - Download PDF

**Components:**
- DocumentLibrary
- DocumentCard
- DocumentFilter
- DocumentGenerator (wizard)
- DocumentPreview
- PDFViewer

**Technical:**
- Template engine for documents
- PDF generation (react-pdf or puppeteer)
- Document templates (legal text with merge fields)
- E-signature integration (future)

---

## 📦 Dependencies to Install

```bash
npm install @next-auth/prisma-adapter
npm install react-hook-form
npm install @hookform/resolvers
npm install zod
npm install recharts # for charts
npm install @react-pdf/renderer # for PDF generation
npm install date-fns # for date formatting
```

---

## 🗄️ Database Migrations Needed

### 1. Add ConnectedAccount Model
```bash
# Add ConnectedAccount model to schema.prisma
# Then run:
npx prisma db push
# or
npx prisma migrate dev --name add-connected-accounts
```

### 2. Add SyncLog Model (optional)
For tracking sync history

---

## 🔐 Environment Variables Needed

Current `.env`:
```
DATABASE_URL="..." (already set)
NEXTAUTH_SECRET="..." (already set)
NEXTAUTH_URL="http://localhost:3000" (already set)
```

Future additions for integrations:
```
# Metalabel
METALABEL_API_KEY=""
METALABEL_API_SECRET=""

# DFOS
DFOS_API_KEY=""

# Spotify
SPOTIFY_CLIENT_ID=""
SPOTIFY_CLIENT_SECRET=""

# etc...
```

---

## 🎯 Implementation Order (Recommended)

### Week 1: Foundation
1. ✅ Authentication system (DONE)
2. ✅ Component library (DONE)
3. ✅ API routes for users (DONE)
4. Profile Management page (convert mockup to real page)
5. Dashboard Overview (connect to real data)

### Week 2: Data & Integrations
6. Connected Accounts backend (database model, API routes)
7. Connected Accounts frontend (connect to APIs)
8. Project API routes (CRUD operations)
9. Project list/detail pages

### Week 3: Project Registration
10. Project Registration wizard (all 6 steps)
11. Form validation and auto-save
12. Project submission workflow

### Week 4: Financial Tools
13. Financial Model API routes
14. Financial Calculator inputs panel
15. Financial Calculator outputs panel
16. Calculation engine and logic
17. Charts and visualizations

### Week 5: Documents
18. Document API routes
19. Document library UI
20. Document generator wizard
21. PDF generation
22. Document templates

### Week 6: Polish & Testing
23. Error handling throughout
24. Loading states
25. Toast notifications
26. Mobile responsive testing
27. E2E testing
28. Bug fixes and polish

---

## 🚀 Next Steps (Immediate)

1. **Install remaining dependencies**
   ```bash
   cd acorp-website
   npm install react-hook-form @hookform/resolvers zod recharts date-fns
   ```

2. **Run Prisma migration** (if schema changed)
   ```bash
   npx prisma db push
   ```

3. **Start building Profile Management page**
   - Convert mockup to real page with forms
   - Add Zod validation schema
   - Connect to API
   - Test full flow

4. **Build Dashboard Overview**
   - Fetch real project data
   - Calculate stats
   - Show action items
   - Make it functional

5. **Continue with remaining pages** following the order above

---

## 📝 Notes

- **Mockups are complete** for all 6 main pages
- **Authentication is fully functional**
- **Component library is ready** to use
- **Database schema is complete** for most features
- **API structure is planned** - just need to implement routes
- **Main work ahead:** Converting mockups to functional pages with real data

**Estimated time to MVP:** 4-6 weeks (single developer)
**Estimated time to production-ready:** 8-10 weeks

---

Last Updated: January 6, 2026
