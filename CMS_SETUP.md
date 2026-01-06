# Content Management System Setup Guide

## Overview

Your Artist Corporations website now has Tina CMS integrated, which allows you to edit content through a visual interface without touching code.

## Quick Start

### 1. Create a Tina Cloud Account

1. Go to [https://app.tina.io](https://app.tina.io)
2. Sign in with your GitHub account (ystricklerdfos)
3. Click "Create a Project"
4. Connect to your repository: `ystricklerdfos/acorp-website`
5. Copy your Client ID and Token

### 2. Configure Environment Variables

1. Create a file called `.env.local` in your project root (copy from `.env.local.example`)
2. Add your Tina credentials:

```
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id_from_tina
TINA_TOKEN=your_token_from_tina
GITHUB_BRANCH=main
```

### 3. Start the Development Server

```bash
npm run dev
```

This will start both Next.js and Tina CMS together.

### 4. Access the CMS

- **Local Admin**: http://localhost:3000/admin
- **Tina Cloud Dashboard**: https://app.tina.io

## Content Structure

Your content is organized into three collections:

### 1. Updates & Blog Posts (`content/updates/`)

For news, announcements, and blog posts like the fiscal assessment.

**Fields:**
- Title
- Author
- Date
- Category (Update, Announcement, Fiscal Analysis, Research)
- Excerpt
- Body (rich text editor)

**Example:** `content/updates/fiscal-assessment.mdx`

### 2. Program Pages (`content/programs/`)

For program pages like A-Corp Law, Artist ID, Tools.

**Fields:**
- Title
- URL Slug
- Description
- Body (rich text editor)

**Future content:** Law, Artist ID, Tools pages

### 3. General Pages (`content/pages/`)

For other pages like About, Pledge, Get Involved.

**Fields:**
- Title
- URL Slug
- Body (rich text editor)

## How to Edit Content

### Option 1: Visual Editor (Recommended)

1. Go to http://localhost:3000/admin
2. Log in with GitHub if prompted
3. Click on a collection (Updates, Programs, or Pages)
4. Select a post to edit or create a new one
5. Make your changes in the visual editor
6. Click "Save" - changes are automatically committed to GitHub

### Option 2: Tina Cloud Dashboard

1. Go to https://app.tina.io
2. Select your project
3. Browse and edit content
4. Changes sync to your GitHub repository

### Option 3: Direct File Editing

You can still edit the MDX files directly in your code editor:
- Updates: `content/updates/*.mdx`
- Programs: `content/programs/*.mdx`
- Pages: `content/pages/*.mdx`

## Creating New Content

### New Blog Post

1. Go to http://localhost:3000/admin
2. Click "Updates & Blog Posts"
3. Click "Create New"
4. Fill in:
   - Title
   - Author
   - Date
   - Category
   - Excerpt (short summary)
   - Body (full content)
5. Click "Save"

### New Program Page

1. Go to http://localhost:3000/admin
2. Click "Program Pages"
3. Click "Create New"
4. Fill in:
   - Title
   - URL Slug (e.g., "artist-id" for /programs/artist-id)
   - Description
   - Body
5. Click "Save"

## Deployment

### Automatic Deployment

When you save content through Tina CMS:
1. Changes are committed to your GitHub repository
2. Vercel automatically detects the changes
3. Your site is rebuilt and deployed within 2-3 minutes

### Manual Deployment

If you edit files directly:
```bash
git add .
git commit -m "Update content"
git push
```

Vercel will automatically deploy the changes.

## Content Migration

The following content needs to be migrated to Tina format:

- [ ] A-Corp Law page (`/programs/law`)
- [ ] Artist ID page (`/programs/artist-id`)
- [ ] Tools page (`/programs/tools`)
- [ ] All updates/blog posts

I'll help you migrate these after you've set up your Tina Cloud account.

## Troubleshooting

### "Missing Tina credentials" error

Make sure you've created `.env.local` with your Tina Client ID and Token.

### Changes not showing up

1. Check that you saved in the CMS
2. Wait 2-3 minutes for Vercel to rebuild
3. Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Can't access /admin

1. Make sure the dev server is running (`npm run dev`)
2. Check that you're logged into GitHub
3. Clear your browser cache

## Next Steps

1. **Set up Tina Cloud account** (5 minutes)
2. **Add environment variables** (2 minutes)
3. **Test creating/editing content** (5 minutes)
4. **Migrate existing pages to CMS** (I can help with this)

## Support

- Tina CMS Docs: https://tina.io/docs/
- Tina Community: https://discord.com/invite/zumN63Ybpf
- Your GitHub repo: https://github.com/ystricklerdfos/acorp-website

Let me know when you've completed the Tina Cloud setup, and I'll help you migrate your existing content!
