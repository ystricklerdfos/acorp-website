# Deployment Guide: Artist Corporations Website

## Quick Deploy to Vercel (Recommended - 5 minutes)

Vercel is free for personal projects and provides the easiest deployment for Next.js apps.

### Step 1: Push to GitHub

First, create a Git repository and push your code:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial Artist Corporations website"

# Create a new repository on GitHub at: https://github.com/new
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/acorp-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Click "Import Project"
4. Find your `acorp-website` repository
5. Click "Import"
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"

**That's it!** Your site will be live at `https://acorp-website-[random].vercel.app` in ~2 minutes.

### Step 3: Custom Domain (Optional)

To use a custom domain like `artistcorporations.com`:

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain
4. Follow DNS instructions to point your domain to Vercel

---

## Alternative: Deploy to Netlify

### Option 1: Deploy via GitHub

1. Push code to GitHub (see Step 1 above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Choose "Deploy with GitHub"
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy"

### Option 2: Deploy via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your site
npm run build

# Deploy
netlify deploy --prod
```

---

## Alternative: Deploy to Railway

Railway offers free hosting with a database included.

1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project"
3. Choose "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Next.js and deploys

---

## Environment Variables

If you add a database or authentication later, you'll need to set environment variables:

### Vercel
1. Go to project settings
2. Click "Environment Variables"
3. Add variables like:
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL`

### Netlify
1. Site settings → Environment variables
2. Add the same variables

---

## Quick Share Link (Temporary - No Setup Required)

For immediate feedback without deployment:

### Option 1: Ngrok (Fastest - 2 minutes)

```bash
# Install ngrok: https://ngrok.com/download
# or: brew install ngrok (Mac)

# In one terminal, run your dev server:
npm run dev

# In another terminal:
ngrok http 3000

# Copy the https://[random].ngrok.io URL and share it
```

**Note:** Ngrok URLs expire when you close the terminal. Free for temporary sharing.

### Option 2: LocalTunnel

```bash
# Install
npm install -g localtunnel

# Run dev server
npm run dev

# In another terminal
lt --port 3000

# Share the generated URL
```

---

## Recommended Workflow

For collaboration and feedback:

1. **Immediate sharing** (right now):
   - Use ngrok to create a temporary public URL
   - Share with 1-2 collaborators for quick feedback

2. **Ongoing development** (this week):
   - Deploy to Vercel (free, permanent URL)
   - Every time you push to GitHub, Vercel auto-deploys
   - Share the Vercel URL with all collaborators

3. **Production** (when ready):
   - Add custom domain
   - Set up database (when you're ready for real signups)
   - Add authentication

---

## Monitoring & Analytics (Optional)

Once deployed, you might want:

- **Vercel Analytics**: Built-in, free for core metrics
- **Google Analytics**: Add tracking code to `app/layout.tsx`
- **Plausible**: Privacy-friendly alternative

---

## Troubleshooting

### Build fails on Vercel/Netlify

If deployment fails:

1. Check that build works locally:
   ```bash
   npm run build
   ```

2. Fix any TypeScript errors

3. Ensure all dependencies are in `package.json`

### "Cannot find module" errors

Make sure all imports use correct paths. Check:
- File extensions (`.tsx` vs `.ts`)
- Case sensitivity (`Button` vs `button`)

---

## Next Steps After Deployment

1. **Test all pages** on the live URL
2. **Share link** with collaborators
3. **Collect feedback** using:
   - Google Forms linked from site
   - Embedded feedback widget
   - Email to specific address
4. **Iterate** - Push updates to GitHub, auto-deploys to Vercel

---

## Cost Comparison

| Platform | Free Tier | Best For |
|----------|-----------|----------|
| **Vercel** | Unlimited personal projects | Next.js (recommended) |
| **Netlify** | 100GB bandwidth/month | Static sites |
| **Railway** | $5 credit/month | Needs database |
| **Ngrok** | Temporary URLs | Quick demos |

**Recommendation:** Start with Vercel for free, permanent hosting with auto-deploys.
