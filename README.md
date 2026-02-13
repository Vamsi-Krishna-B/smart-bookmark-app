# Smart Bookmark App

This is a Smart Bookmark Manager built with **Next.js (App Router)**, **Supabase**, and **Tailwind CSS**.
Users can sign in with Google, save personal bookmarks, and see updates in real-time across multiple tabs.

---

## Live Demo

**Vercel:**
https://your-vercel-url.vercel.app

**GitHub:**
https://github.com/your-username/smart-bookmark-app

---

## Features

* Google OAuth authentication (Supabase Auth)
* Add bookmarks (Title + URL)
* Delete bookmarks
* Private bookmarks per user
* Real-time updates across multiple browser tabs
* Modern cyber-style UI using Tailwind CSS
* Deployed on Vercel

---

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying:

```
app/page.tsx
```

The page auto-updates as you edit the file.

---

## Environment Variables

Create a `.env.local` file in the root directory and add:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in:
**Supabase → Project Settings → API**

---

## Tech Stack

**Frontend**

* Next.js (App Router)
* React
* Tailwind CSS

**Backend / Services**

* Supabase Authentication (Google OAuth)
* Supabase PostgreSQL Database
* Supabase Realtime
* Row Level Security (RLS)

**Deployment**

* Vercel

---

## Database Schema

Table: `bookmarks`

| Column     | Type                         |
| ---------- | ---------------------------- |
| id         | uuid (primary key)           |
| user_id    | uuid (references auth.users) |
| title      | text                         |
| url        | text                         |
| created_at | timestamp                    |

Row Level Security ensures users can only access their own bookmarks.

---

## Realtime

Supabase Realtime is enabled for the `bookmarks` table.
When a bookmark is added or deleted in one tab, the changes automatically appear in other open tabs without refreshing.

---

## Challenges Faced

**1. Google OAuth redirect issue**
Login worked locally but failed after deployment.
**Solution:** Added the Vercel domain to Supabase Redirect URLs and updated the Site URL.

**2. Row Level Security blocking data**
Bookmarks were not visible after insertion.
**Solution:** Created proper RLS policies for select, insert, and delete operations based on `auth.uid()`.

**3. Realtime not updating**
**Solution:** Enabled database replication and subscribed to `postgres_changes`.

**4. UI readability issues**
**Solution:** Implemented a cyber-style dark theme with glassmorphism using Tailwind.

---

## Project Structure

```
app/
 ├── components/
 │    ├── Login.tsx
 │    ├── Navbar.tsx
 │    ├── BookmarkForm.tsx
 │    └── BookmarkList.tsx
 │
 ├── page.tsx

lib/
 └── supabaseClient.ts
```

---

## Deploy on Vercel

The easiest way to deploy this app is using the Vercel Platform.

1. Push the project to GitHub
2. Import the repository in Vercel
3. Add environment variables
4. Deploy

After deployment, add the Vercel URL in:

Supabase → Authentication → URL Configuration

---

## Learn More

To learn more about the technologies used:

* Next.js Documentation: https://nextjs.org/docs
* Supabase Documentation: https://supabase.com/docs
* Tailwind CSS: https://tailwindcss.com/docs

---

## Author

Vamsi Krishna
B.Tech CSE | AI & Full Stack Developer
