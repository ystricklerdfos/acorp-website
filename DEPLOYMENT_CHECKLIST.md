# Vercel Deployment - Quick Start Checklist

**Complete these steps to deploy your ACorp Dashboard to Vercel:**

---

## ✅ Step 1: Login to Vercel
```bash
vercel login
```
**Status:** In progress - follow the prompts in your terminal

---

## ⏳ Step 2: Choose Database Provider

### Option A: Vercel Postgres (Easiest - Recommended for now)
```bash
# After logging in, run:
vercel postgres create
```
- ✅ Free for hobby projects
- ✅ Automatic integration with Vercel
- ✅ No external signup needed
- ⚠️ Limited to 256MB on free tier

### Option B: Neon (Best Free Tier)
1. Go to https://neon.tech
2. Sign up (free)
3. Create project
4. Copy PostgreSQL connection string
5. Add to Vercel: `vercel env add DATABASE_URL`

### Option C: Supabase (Good Alternative)
1. Go to https://supabase.com
2. Create project
3. Get connection string from Settings → Database
4. Add to Vercel: `vercel env add DATABASE_URL`

**Choose one and complete setup**

---

## ⏳ Step 3: Generate Production Secrets

### Generate NextAuth Secret:
```bash
openssl rand -base64 32
```
**Save this output** - you'll need it in the next step

---

## ⏳ Step 4: Set Environment Variables in Vercel

```bash
# 1. Database URL (from Step 2)
vercel env add DATABASE_URL
# Paste: postgresql://... (your connection string)

# 2. NextAuth Secret (from Step 3)
vercel env add NEXTAUTH_SECRET
# Paste: (your generated secret)

# 3. NextAuth URL (temporary - we'll update after first deploy)
vercel env add NEXTAUTH_URL
# Paste: https://acorp-website.vercel.app

# 4. Node Environment
vercel env add NODE_ENV
# Type: production

# 5. Tina CMS Client ID (if you have it)
vercel env add NEXT_PUBLIC_TINA_CLIENT_ID
# Paste: 0156d7ac-88e9-4aed-8fb0-239fbb05a3b4

# 6. Tina Token (if you have it)
vercel env add TINA_TOKEN
# Paste: 108f8e735e21e7298f772310a2cb184031282b21
```

---

## ⏳ Step 5: Update Prisma Schema for PostgreSQL

Edit `prisma/schema.prisma` and change the datasource:

**Change from:**
```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

**To:**
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

**Also update array fields:**

In `Project` model:
```prisma
genre String[] // Change from: genre String?
```

In `DFOSMember` model:
```prisma
interests String[] // Change from: interests String?
```

**Save the file**

---

## ⏳ Step 6: First Deployment

```bash
# Deploy to Vercel
vercel

# Answer the prompts:
# ? Set up and deploy? Yes
# ? Which scope? (Select your account)
# ? Link to existing project? No
# ? What's your project's name? acorp-website
# ? In which directory is your code located? ./
```

**Wait for deployment to complete**

Vercel will give you a URL like: `https://acorp-website-abc123.vercel.app`

---

## ⏳ Step 7: Push Database Schema to Production

```bash
# Set your production DATABASE_URL temporarily
export DATABASE_URL="your-production-postgres-url-from-step-2"

# Push schema to create tables
npx prisma db push
```

---

## ⏳ Step 8: Deploy to Production

```bash
vercel --prod
```

This creates your production deployment at: `https://acorp-website.vercel.app`

---

## ⏳ Step 9: Update NEXTAUTH_URL

Now that you have your actual Vercel URL:

```bash
# Remove the temporary value
vercel env rm NEXTAUTH_URL production

# Add the real value
vercel env add NEXTAUTH_URL production
# Enter: https://acorp-website.vercel.app (or your actual URL)

# Redeploy to apply changes
vercel --prod
```

---

## ⏳ Step 10: Test Your Deployment

Visit your Vercel URL and test:

- [ ] Homepage loads
- [ ] Navigate to `/login`
- [ ] Create new account
- [ ] Login with credentials
- [ ] Visit `/dashboard`
- [ ] Edit profile at `/dashboard/profile`
- [ ] Create a test project (if API route is accessible)
- [ ] Verify data persists (try logging out and back in)

---

## 🎉 DONE!

Your ACorp Dashboard is now live on Vercel!

### Next Steps:
- [ ] Set up custom domain (optional)
- [ ] Add monitoring (Vercel Analytics)
- [ ] Set up GitHub auto-deploy
- [ ] Configure email for password resets
- [ ] Add error tracking (Sentry)

---

## Quick Commands Reference

```bash
# View logs
vercel logs --prod

# List environment variables
vercel env ls

# Add new environment variable
vercel env add VARIABLE_NAME

# Redeploy
vercel --prod

# View deployments
vercel list

# Check current project
vercel project ls
```

---

## Troubleshooting

### Build fails with Prisma error
```bash
# Make sure postinstall script is in package.json
"postinstall": "prisma generate"
```

### Database connection error
```bash
# Verify DATABASE_URL is set
vercel env ls

# Test connection locally
export DATABASE_URL="your-production-url"
npx prisma db push
```

### Session/Auth errors
```bash
# Verify NEXTAUTH_SECRET and NEXTAUTH_URL
vercel env ls

# Make sure they're set for Production environment
```

---

## Support

- Vercel Docs: https://vercel.com/docs
- Prisma Docs: https://www.prisma.io/docs
- NextAuth Docs: https://next-auth.js.org

**See VERCEL_DEPLOYMENT.md for detailed guide**
