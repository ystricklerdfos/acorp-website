#!/bin/bash
# Vercel Environment Variables Setup Script
# Run this after logging in with: vercel login

echo "Setting up Vercel environment variables..."

# Tina CMS Configuration
vercel env add NEXT_PUBLIC_TINA_CLIENT_ID production preview development
# When prompted, enter: 0156d7ac-88e9-4aed-8fb0-239fbb05a3b4

vercel env add TINA_TOKEN production preview development
# When prompted, enter: 108f8e735e21e7298f772310a2cb184031282b21

# GitHub Configuration
vercel env add GITHUB_BRANCH production preview development
# When prompted, enter: main

# NextAuth Configuration
vercel env add NEXTAUTH_SECRET production preview development
# When prompted, enter a secure random string (generate at: https://generate-secret.vercel.app/32)

vercel env add NEXTAUTH_URL production
# When prompted, enter your production URL (e.g., https://your-project.vercel.app)

echo "Environment variables configured!"
echo "Now run: vercel --prod"
