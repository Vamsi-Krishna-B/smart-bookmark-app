# Smart Bookmark App

## Features
- Google OAuth login
- Add and delete bookmarks
- Private bookmarks per user
- Real-time sync across tabs
- Deployed on Vercel

## Tech Stack
Next.js (App Router), Supabase (Auth, DB, Realtime), Tailwind CSS

## Challenges Faced

### 1. Google OAuth redirect issue
Fixed by adding Supabase callback URL in Google Console.

### 2. Real-time not working
Solved by enabling replication for bookmarks table in Supabase.

### 3. Row Level Security blocking data
Created policies to allow users to access only their own data.

## Live URL
https://smart-bookmark-app.vercel.app/
