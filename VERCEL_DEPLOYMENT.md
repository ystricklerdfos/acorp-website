# Vercel Deployment Guide

**Date:** January 6, 2026
**Status:** Ready to Deploy

---

## Prerequisites

- ✅ Vercel CLI installed (v46.0.0)
- ✅ Working application with database
- ✅ All dependencies installed
- ✅ Build scripts configured

---

## Step 1: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate with your Vercel account.

---

## Step 2: Database Setup (IMPORTANT!)

### Option A: Use Vercel Postgres (Recommended)

Vercel Postgres is free for hobby projects and integrates seamlessly.

```bash
# Install Vercel Postgres
vercel postgres create

# This will:
# 1. Create a PostgreSQL database
# 2. Automatically set DATABASE_URL in your Vercel project
# 3. Give you connection details
```

### Option B: Use External PostgreSQL (Neon, Supabase, Railway)

If using an external provider:

1. **Neon** (Recommended - Free tier)
   - Visit https://neon.tech
   - Create free account
   - Create new project
   - Copy connection string

2. **Supabase** (Good alternative)
   - Visit https://supabase.com
   - Create project
   - Get PostgreSQL connection string from Settings → Database

3. **Railway** (Simple setup)
   - Visit https://railway.app
   - Add PostgreSQL service
   - Copy connection string

---

## Step 3: Update Prisma Schema for Production

Since we're using SQLite locally but need PostgreSQL for production, we need to update the schema:

### Current (Local Development):
```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

### For Production (PostgreSQL):
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

**Important:** You can keep SQLite for local dev and use environment variables to switch:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Then in your `.env` file (local):
```env
DATABASE_URL="file:./dev.db"  # For local SQLite
```

And in Vercel (production):
```env
DATABASE_URL="postgresql://..." # From Vercel Postgres or external provider
```

---

## Step 4: Configure Environment Variables in Vercel

You need to set these environment variables in Vercel:

### Required Variables:

```bash
# 1. Database URL (from Step 2)
DATABASE_URL="postgresql://..."

# 2. NextAuth Secret (generate a new one for production)
NEXTAUTH_SECRET="your-production-secret-here"

# 3. NextAuth URL (will be your Vercel domain)
NEXTAUTH_URL="https://your-project.vercel.app"

# 4. Node Environment
NODE_ENV="production"

# 5. Tina CMS (if configured)
NEXT_PUBLIC_TINA_CLIENT_ID="your-tina-client-id"
TINA_TOKEN="your-tina-token"
```

### To Set Variables in Vercel:

**Method 1: Using Vercel CLI**
```bash
vercel env add DATABASE_URL
# Paste your PostgreSQL connection string

vercel env add NEXTAUTH_SECRET
# Generate with: openssl rand -base64 32

vercel env add NEXTAUTH_URL
# Will be https://your-project.vercel.app
```

**Method 2: Using Vercel Dashboard**
1. Go to your project on vercel.com
2. Click "Settings" → "Environment Variables"
3. Add each variable one by one
4. Select "Production" environment

---

## Step 5: Update Prisma Schema (If Using PostgreSQL)

Change the datasource in `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Also, you can now convert the comma-separated strings back to arrays:

```prisma
model Project {
  // Change from:
  genre String? // Comma-separated for SQLite

  // To:
  genre String[] // PostgreSQL supports arrays
}

model DFOSMember {
  // Change from:
  interests String? // Comma-separated for SQLite

  // To:
  interests String[] // PostgreSQL supports arrays
}
```

---

## Step 6: Generate a New NextAuth Secret for Production

**NEVER use your local development secret in production!**

```bash
# Generate new secret
openssl rand -base64 32

# Output will be something like:
# k3x9Fm2jKl8pQr5tWv7yZa1bN4mP6sU8hJ0cD2eF5gI=

# Add this to Vercel environment variables
vercel env add NEXTAUTH_SECRET
# Paste the generated secret
```

---

## Step 7: Deploy to Vercel

### First Deployment:

```bash
# From your project directory
vercel

# You'll be asked:
# ? Set up and deploy? Yes
# ? Which scope? (Select your account)
# ? Link to existing project? No
# ? What's your project's name? acorp-website
# ? In which directory is your code located? ./
```

This will:
1. Create a new Vercel project
2. Build your application
3. Run `prisma generate` (from postinstall script)
4. Deploy to a preview URL

### Push Database Schema to Production:

After first deployment, you need to create the database tables:

```bash
# Set the production DATABASE_URL temporarily
export DATABASE_URL="your-production-postgres-url"

# Push schema to production database
npx prisma db push

# Or use Prisma migrate (better for production)
npx prisma migrate deploy
```

**Important:** You should ideally run migrations as part of your build process. Add this to `package.json`:

```json
{
  "scripts": {
    "build": "prisma generate && prisma migrate deploy && tinacms build && next build"
  }
}
```

### Deploy to Production:

```bash
# Deploy to production
vercel --prod
```

---

## Step 8: Post-Deployment Tasks

### 1. Update NEXTAUTH_URL

After deployment, update the NEXTAUTH_URL to your actual Vercel domain:

```bash
vercel env rm NEXTAUTH_URL production
vercel env add NEXTAUTH_URL production
# Enter: https://your-actual-domain.vercel.app
```

### 2. Set Up Custom Domain (Optional)

```bash
# Add custom domain
vercel domains add yourdomain.com

# Configure DNS according to Vercel's instructions
```

### 3. Test the Deployment

Visit your Vercel URL and test:
- ✅ Homepage loads
- ✅ Can navigate to /login
- ✅ Can create new account
- ✅ Can login
- ✅ Dashboard loads
- ✅ Profile page works
- ✅ Data persists (check database)

---

## Step 9: Ongoing Deployments

After initial setup, deploying updates is simple:

```bash
# For preview deployment
git push origin main
# Vercel will auto-deploy from GitHub

# Or manually
vercel

# For production
vercel --prod
```

---

## Environment Variables Reference

### Production Environment Variables:

| Variable | Value | Where to Get |
|----------|-------|--------------|
| `DATABASE_URL` | `postgresql://...` | Vercel Postgres or external provider |
| `NEXTAUTH_SECRET` | Random string | `openssl rand -base64 32` |
| `NEXTAUTH_URL` | `https://your-domain.vercel.app` | Your Vercel domain |
| `NODE_ENV` | `production` | Set manually |
| `NEXT_PUBLIC_TINA_CLIENT_ID` | Your Tina client ID | Tina Cloud dashboard |
| `TINA_TOKEN` | Your Tina token | Tina Cloud dashboard |

### Future Variables (for integrations):

```env
# Metalabel
METALABEL_CLIENT_ID=""
METALABEL_CLIENT_SECRET=""

# DFOS
DFOS_API_KEY=""
DFOS_API_SECRET=""

# Spotify
SPOTIFY_CLIENT_ID=""
SPOTIFY_CLIENT_SECRET=""

# Stripe (for payments)
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""
```

---

## Troubleshooting

### Build Fails: "Cannot find module '@prisma/client'"

**Solution:** Make sure `postinstall` script runs `prisma generate`:
```json
{
  "scripts": {
    "postinstall": "prisma generate"
  }
}
```

### Database Connection Error

**Solution:** Verify DATABASE_URL is set correctly:
```bash
vercel env ls
```

Make sure it's set for "Production" environment.

### NextAuth Session Error

**Solution:** Verify NEXTAUTH_SECRET and NEXTAUTH_URL are set:
```bash
vercel env ls
```

Make sure NEXTAUTH_URL matches your actual domain.

### Prisma Schema Mismatch

**Solution:** Push schema to production database:
```bash
export DATABASE_URL="your-production-url"
npx prisma db push
```

### "Module not found" Errors

**Solution:** Clear Vercel cache and redeploy:
```bash
vercel --force
```

---

## Quick Deployment Checklist

- [ ] Login to Vercel (`vercel login`)
- [ ] Create PostgreSQL database (Vercel Postgres or external)
- [ ] Update Prisma schema to use PostgreSQL
- [ ] Set environment variables in Vercel
- [ ] Generate production NextAuth secret
- [ ] Run `vercel` for first deployment
- [ ] Push Prisma schema to production database
- [ ] Deploy to production (`vercel --prod`)
- [ ] Update NEXTAUTH_URL to actual domain
- [ ] Test all functionality
- [ ] (Optional) Set up custom domain

---

## Recommended: GitHub Integration

For automatic deployments on git push:

1. **Push your code to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/acorp-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect Vercel to GitHub**
   - Go to vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js
   - Add environment variables
   - Deploy!

3. **Automatic Deployments**
   - Every push to `main` → Production deployment
   - Every PR → Preview deployment
   - Review deployments before merging

---

## Database Migration Strategy

### For Future Schema Changes:

1. **Create Migration (Local)**
   ```bash
   npx prisma migrate dev --name describe_your_change
   ```

2. **Commit Migration Files**
   ```bash
   git add prisma/migrations
   git commit -m "Add new migration"
   git push
   ```

3. **Deploy to Production**
   ```bash
   # Migrations will run automatically if you added to build script
   vercel --prod
   ```

---

## Monitoring & Logs

### View Deployment Logs:
```bash
vercel logs
```

### View Production Logs:
```bash
vercel logs --prod
```

### Check Build Logs:
```bash
vercel inspect <deployment-url>
```

### Database Management:

Use Prisma Studio connected to production:
```bash
export DATABASE_URL="your-production-url"
npx prisma studio
```

---

## Security Best Practices

1. **Never commit secrets** - Use `.env.local` for local secrets
2. **Different secrets per environment** - Local ≠ Production
3. **Rotate secrets regularly** - Especially NEXTAUTH_SECRET
4. **Use environment variables** - Never hardcode credentials
5. **Enable CORS carefully** - Only allow your domains
6. **Review Vercel logs** - Monitor for suspicious activity

---

## Cost Considerations

### Vercel (Free Tier - Hobby):
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Serverless functions
- ✅ Preview deployments

### Vercel Postgres (Free Tier):
- ✅ 256 MB storage
- ✅ 60 hours compute/month
- ⚠️ May need upgrade for production traffic

### Alternative: External PostgreSQL
- **Neon**: Free tier includes 512MB storage, 3GB bandwidth
- **Supabase**: Free tier includes 500MB storage, 2GB bandwidth
- **Railway**: $5/month for 1GB storage

---

## Next Steps After Deployment

1. **Set up monitoring** (Vercel Analytics, Sentry)
2. **Add custom domain** (yourdomain.com)
3. **Configure email** (for password resets, verification)
4. **Set up CI/CD** (GitHub Actions for tests)
5. **Add error tracking** (Sentry, LogRocket)
6. **Performance monitoring** (Vercel Speed Insights)
7. **Set up backups** (Automated database backups)

---

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **NextAuth Docs**: https://next-auth.js.org
- **Vercel Support**: https://vercel.com/support

---

**Ready to deploy!** 🚀

Run `vercel login` to get started.
