# How to Fix Your Vercel Deployment

## What Went Wrong

You deleted something in Vercel that broke the Tina CMS integration. There are two issues:

1. **Missing Environment Variables** - Vercel doesn't have the Tina credentials
2. **Tina Cloud Branch Not Configured** - Tina Cloud doesn't recognize your `main` branch

The build fails with:
```
Error: Branch 'main' is not on TinaCloud
```

## Complete Fix (10 minutes)

### Step 1: Reconnect Tina Cloud to Your Repository

1. Go to https://app.tina.io/projects/0156d7ac-88e9-4aed-8fb0-239fbb05a3b4/configuration
2. Look for **Branch Configuration** or **Repository Settings**
3. Make sure your GitHub repository `ystricklerdfos/acorp-website` is connected
4. Ensure the `main` branch is enabled/indexed
5. If needed, click "Re-index" or "Enable branch"

**Alternative:** If the branch settings look correct, you may just need to trigger a re-index by pushing to GitHub:

```bash
git commit --allow-empty -m "Trigger Tina re-index"
git push origin main
```

Wait 1-2 minutes for Tina Cloud to process the branch.

### Step 2: Add Environment Variables to Vercel

**Via Dashboard (Recommended):**

1. Go to https://vercel.com/dashboard
2. Find your `acorp-website` project
3. Click **Settings** → **Environment Variables**
4. Add these variables (check all three: Production, Preview, Development):

| Variable Name | Value |
|--------------|-------|
| `NEXT_PUBLIC_TINA_CLIENT_ID` | `0156d7ac-88e9-4aed-8fb0-239fbb05a3b4` |
| `TINA_TOKEN` | `108f8e735e21e7298f772310a2cb184031282b21` |
| `GITHUB_BRANCH` | `main` |
| `NEXTAUTH_SECRET` | Generate at https://generate-secret.vercel.app/32 |
| `NEXTAUTH_URL` | Your Vercel URL (e.g., `https://acorp-website.vercel.app`) |

5. Click **Save**

### Step 3: Redeploy

After fixing Tina Cloud AND adding Vercel variables, trigger a new deployment:

**Option A:** Via Dashboard
- Go to **Deployments** tab
- Click the three dots on the latest deployment
- Click **Redeploy**

**Option B:** Via Git
```bash
git commit --allow-empty -m "Trigger rebuild"
git push
```

**Option C:** Via CLI
```bash
vercel login
vercel --prod
```

## Alternative: Using Vercel CLI

If you prefer the command line:

```bash
# 1. Login to Vercel
vercel login

# 2. Link to your project (if not already linked)
vercel link

# 3. Add environment variables
vercel env add NEXT_PUBLIC_TINA_CLIENT_ID production preview development
# Enter: 0156d7ac-88e9-4aed-8fb0-239fbb05a3b4

vercel env add TINA_TOKEN production preview development
# Enter: 108f8e735e21e7298f772310a2cb184031282b21

vercel env add GITHUB_BRANCH production preview development
# Enter: main

# 4. Deploy
vercel --prod
```

## Verify the Fix

After redeploying, your build should succeed. You can verify by:

1. Check the deployment logs in Vercel dashboard
2. Look for "Build Completed Successfully"
3. Visit your live site URL

## Why This Happened

When you deleted something in Vercel, it likely removed the environment variables that Tina CMS needs to build. These variables tell Tina:
- Where to connect (`NEXT_PUBLIC_TINA_CLIENT_ID`)
- How to authenticate (`TINA_TOKEN`)
- Which branch to use for content (`GITHUB_BRANCH`)

Without these, the build fails before Next.js even starts.

## Test Locally First (Optional)

To ensure everything works, test the build locally:

```bash
npm run build
```

If this succeeds, your Vercel deployment will too.

## Need Help?

- Vercel docs: https://vercel.com/docs/environment-variables
- Tina Cloud docs: https://tina.io/docs/tina-cloud/
