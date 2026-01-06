# Vercel Login - Alternative Methods

The interactive `vercel login` isn't working in this terminal. Here are alternative ways to authenticate:

---

## Method 1: Browser-Based Login (Recommended)

1. **Open your browser** and go to: https://vercel.com/login

2. **Sign in** with your preferred method (GitHub, Google, Email, etc.)

3. **Once logged in**, go to: https://vercel.com/account/tokens

4. **Create a new token:**
   - Click "Create"
   - Name: "ACorp Website CLI"
   - Scope: Full Account
   - Expiration: No Expiration (or set as preferred)
   - Click "Create"

5. **Copy the token** (it will look like: `vercel_xxxxxxxxxxxxxxxxxxxxxx`)

6. **Set the token in your terminal:**
   ```bash
   export VERCEL_TOKEN="vercel_xxxxxxxxxxxxxxxxxxxxxx"
   ```

7. **Verify it works:**
   ```bash
   vercel whoami --token=$VERCEL_TOKEN
   ```

Now you can use Vercel CLI with the token:
```bash
vercel --token=$VERCEL_TOKEN
vercel --prod --token=$VERCEL_TOKEN
```

---

## Method 2: Deploy via Vercel Dashboard (Easiest)

Instead of using CLI, deploy directly from the Vercel website:

### Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - ready for deployment"

# Create GitHub repo and push
# (You'll need to create a repo on github.com first)
git remote add origin https://github.com/yourusername/acorp-website.git
git branch -M main
git push -u origin main
```

### Step 2: Import to Vercel

1. **Go to:** https://vercel.com/new
2. **Click "Import Git Repository"**
3. **Select your GitHub repo** (acorp-website)
4. **Configure project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next

5. **Add Environment Variables:**
   Click "Environment Variables" and add:

   ```
   DATABASE_URL = postgresql://...  (from your database provider)
   NEXTAUTH_SECRET = (generate with: openssl rand -base64 32)
   NEXTAUTH_URL = https://acorp-website.vercel.app
   NODE_ENV = production
   NEXT_PUBLIC_TINA_CLIENT_ID = 0156d7ac-88e9-4aed-8fb0-239fbb05a3b4
   TINA_TOKEN = 108f8e735e21e7298f772310a2cb184031282b21
   ```

6. **Click "Deploy"**

Vercel will:
- Build your app
- Deploy it
- Give you a URL

---

## Method 3: Use Vercel Desktop App

1. **Download Vercel Desktop:** https://vercel.com/desktop
2. **Install and open**
3. **Sign in** with your account
4. **Import project** from the app

---

## Recommended: Method 2 (GitHub + Vercel Dashboard)

This is the **easiest and most common** way to deploy to Vercel. It also gives you:
- ✅ Automatic deployments on `git push`
- ✅ Preview deployments for pull requests
- ✅ Easy rollbacks
- ✅ No CLI authentication needed

---

## Database Setup (Required Before Deployment)

You still need a PostgreSQL database. Choose one:

### Option A: Vercel Postgres
1. Go to https://vercel.com/dashboard
2. Click your project (after importing)
3. Go to "Storage" tab
4. Click "Create Database" → "Postgres"
5. Copy the connection string
6. Add to environment variables

### Option B: Neon (Free 512MB)
1. Go to https://neon.tech
2. Sign up
3. Create project
4. Copy connection string
5. Add to Vercel environment variables

### Option C: Supabase (Free 500MB)
1. Go to https://supabase.com
2. Create project
3. Go to Settings → Database
4. Copy PostgreSQL connection string
5. Add to Vercel environment variables

---

## Quick Start: GitHub + Vercel Method

```bash
# 1. Generate NextAuth secret
openssl rand -base64 32
# Save the output!

# 2. Add files to git
git add .
git commit -m "Ready for deployment"

# 3. Push to GitHub (create repo first at github.com)
git remote add origin https://github.com/YOUR_USERNAME/acorp-website.git
git push -u origin main

# 4. Go to vercel.com/new and import the repo

# 5. Add environment variables in Vercel dashboard

# 6. Click Deploy

# 7. After deployment, push database schema:
export DATABASE_URL="your-production-postgres-url"
npx prisma db push
```

---

## Need Help?

The GitHub + Vercel Dashboard method is recommended because:
- No CLI authentication issues
- Easier to manage
- Auto-deployments on push
- Built-in CI/CD

**Next step:** Would you like help setting up the GitHub repository and deploying via Vercel dashboard?
