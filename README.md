---

# 🔖 Smart Bookmark

**A minimalist, real-time web organizer.**

Smart Bookmark is a lightning-fast bookmark manager built for speed and privacy. No clutter—just your links, synced everywhere you need them instantly.

**[Live Demo](https://smart-bookmark-app.vercel.app/)**

---

### ✨ Features

* **Google One-Tap:** Instant, secure authentication via Google OAuth.
* **Living Data:** Real-time synchronization across multiple tabs using Supabase Realtime.
* **Privacy First:** Bulletproof security with **Row Level Security (RLS)** ensuring your bookmarks remain private.
* **Modern UI:** A responsive, sleek interface built with Next.js and Tailwind CSS.

### 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Database & Auth:** Supabase (PostgreSQL)
* **Deployment:** Vercel

---

### 🧠 Challenges & Solutions

Every project has its "aha!" moments. Here are the technical hurdles I cleared while building this app:

#### 1. The OAuth Handshake Loop

* **Problem:** Google OAuth login kept failing or redirecting back to the home page without authenticating.
* **Solution:** I realized I hadn't mapped the **Supabase Callback URL** inside the Google Cloud Console. Adding the correct `https://<project-id>.supabase.co/auth/v1/callback` fixed the handshake.

#### 2. The "Ghost" Deployment (Site URL)

* **Problem:** Authentication worked perfectly on `localhost` but broke immediately after deploying to Vercel.
* **Solution:** I forgot to update the **Site URL** and **Redirect URLs** in the Supabase Dashboard. Changing these from `localhost:3000` to the production Vercel URL allowed Supabase to trust the live environment.

#### 3. Silent Sync Issues

* **Problem:** Bookmarks wouldn't update on other tabs unless the page was refreshed.
* **Solution:** Realtime isn't "on" by default for every table. I had to manually enable **Replication** for the `bookmarks` table in the Supabase database settings to broadcast changes.

#### 4. Data Leakage Prevention (RLS)

* **Problem:** Initially, any logged-in user could technically see everyone's bookmarks via API calls.
* **Solution:** Implemented **Row Level Security (RLS)** policies. This ensures that the database itself checks the `auth.uid()` of the requester before returning any rows.

---

### 🚀 Quick Start

1. **Clone & Install**
```bash
git clone https://github.com/Vamsi-Krishna-B/smart-bookmark-app.git
npm install

```


2. **Environment Setup**
Create a `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key

```


3. **Run Locally**
```bash
npm run dev

```



---

**Would you like me to generate a clean, modern logo or a banner image for the top of this README?**
