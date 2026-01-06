# Quick Start: Get Your Site Online in 10 Minutes

## Option 1: Fastest - Use Vercel (Recommended)

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `acorp-website`
3. Make it Public or Private (your choice)
4. **Don't** initialize with README
5. Click "Create repository"

### Step 2: Push Your Code to GitHub

Copy and run these commands in your terminal:

```bash
cd /Users/yanceystrickler/Documents/Vibecode/ACorp/acorp-website

# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/acorp-website.git

git branch -M main

git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com/signup](https://vercel.com/signup)
2. Click "Continue with GitHub"
3. Authorize Vercel to access GitHub
4. Click "Import Project" or "Add New Project"
5. Find `acorp-website` in the list
6. Click "Import"
7. **No configuration needed** - Vercel auto-detects Next.js
8. Click "Deploy"

**🎉 Done!** Your site will be live in ~90 seconds at:
`https://acorp-website-[random].vercel.app`

### Step 4: Share the Link

Copy the URL from Vercel and share with collaborators!

---

## Option 2: Super Fast - Temporary Public URL (No GitHub Needed)

For **immediate** sharing (expires when you close terminal):

### Using Ngrok:

```bash
# Install ngrok
# Visit: https://ngrok.com/download
# Or on Mac: brew install ngrok

# Make sure dev server is running
npm run dev

# In a NEW terminal window:
ngrok http 3000
```

You'll get a URL like: `https://abc123.ngrok.io`

Share this URL with anyone! They can see your site immediately.

**Note:** URL stops working when you close the terminal.

---

## Option 3: Alternative - Netlify

1. Push to GitHub (see Option 1, Step 1-2)
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub
5. Select `acorp-website`
6. Build command: `npm run build`
7. Publish directory: `.next`
8. Click "Deploy"

---

## Updating After Deployment (Vercel/Netlify)

Every time you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Vercel/Netlify **automatically redeploys** with your changes!

---

## Custom Domain Setup (Optional)

### If you own `artistcorporations.com`:

#### On Vercel:
1. Project Settings → Domains
2. Add `artistcorporations.com`
3. Add DNS records (Vercel shows you exactly what to add)

#### On Netlify:
1. Site Settings → Domain management
2. Add custom domain
3. Update DNS records with your domain provider

---

## Collecting Feedback

Once live, you can:

1. **Share the URL** directly with collaborators
2. **Add a feedback form**:
   - Quick option: Add a Google Form link to the footer
   - Future: Build feedback into the site

3. **Track visitors** (optional):
   - Vercel Analytics (built-in, free)
   - Google Analytics
   - Plausible (privacy-friendly)

---

## Need Help?

**Build failing?**
```bash
# Test build locally first
npm run build

# If it works locally but fails online, check:
# - All files are committed: git status
# - TypeScript errors are fixed
```

**Want to update the site?**
```bash
# Make your changes, then:
git add .
git commit -m "Updated XYZ"
git push
# Vercel/Netlify auto-deploys!
```

---

## Your Current Setup

✅ Git repository initialized
✅ All files committed
✅ Ready to push to GitHub

**Next step:** Choose Option 1 (Vercel) or Option 2 (Ngrok) above!
